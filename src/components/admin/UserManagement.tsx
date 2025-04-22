import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Table from '@/components/ui/Table';
import Badge from '@/components/ui/Badge';
import { fetchWithAuth } from '@/lib/api';
import { User } from '@/types';
import { mockUsers } from '@/lib/mockData';

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [roleChangeUser, setRoleChangeUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // In a real application, this would fetch from the API
        // const response = await fetchWithAuth<User[]>('/users');
        
        // For now, use the mock data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
        setUsers(mockUsers);
      } catch (error) {
        setError('Failed to fetch users');
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: 'admin' | 'user') => {
    try {
      setLoading(true);
      // In a real application, this would update the user role via API
      // await fetchWithAuth(`/users/${userId}/role`, {
      //   method: 'PUT',
      //   body: JSON.stringify({ role: newRole }),
      // });
      
      // For now, update the mock data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      setUsers(users.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ));
      
      setRoleChangeUser(null);
    } catch (error) {
      setError('Failed to update user role');
      console.error('Error updating user role:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      setLoading(true);
      // In a real application, this would delete the user via API
      // await fetchWithAuth(`/users/${userId}`, {
      //   method: 'DELETE',
      // });
      
      // For now, update the mock data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      setUsers(users.filter(user => user.id !== userId));
      
      setSelectedUser(null);
    } catch (error) {
      setError('Failed to delete user');
      console.error('Error deleting user:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      header: 'Username',
      accessor: 'username',
    },
    {
      header: 'Email',
      accessor: 'email',
    },
    {
      header: 'Role',
      accessor: (user: User) => (
        <Badge
          variant={user.role === 'admin' ? 'success' : 'default'}
        >
          {user.role}
        </Badge>
      ),
    },
    {
      header: 'Created At',
      accessor: (user: User) => new Date(user.createdAt).toLocaleDateString(),
    },
    {
      header: 'Actions',
      accessor: (user: User) => (
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setRoleChangeUser(user);
            }}
          >
            Change Role
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedUser(user);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Card title="Users Management">
        {loading && !users.length ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="p-4 text-red-500 bg-red-100 rounded-md">
            {error}
          </div>
        ) : (
          <Table
            columns={columns}
            data={users}
            emptyMessage="No users found"
          />
        )}
      </Card>

      {/* Delete User Confirmation Dialog */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Delete User</h3>
            <p className="mb-6">
              Are you sure you want to delete the user "{selectedUser.username}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDeleteUser(selectedUser.id)}
                isLoading={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Change Role Dialog */}
      {roleChangeUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Change User Role</h3>
            <p className="mb-6">
              Change the role for user "{roleChangeUser.username}"
            </p>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Current Role: <span className="font-semibold">{roleChangeUser.role}</span>
              </label>
              <div className="flex space-x-3">
                <button
                  className={`px-4 py-2 rounded-md ${
                    roleChangeUser.role === 'user'
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => handleRoleChange(roleChangeUser.id, 'user')}
                >
                  User
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    roleChangeUser.role === 'admin'
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => handleRoleChange(roleChangeUser.id, 'admin')}
                >
                  Admin
                </button>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setRoleChangeUser(null)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
