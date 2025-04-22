import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/layout/MainLayout';
import UserManagement from '@/components/admin/UserManagement';
import ProtectedRoute from '@/lib/protectedRoute';
import { useAuth } from '@/hooks/useAuth';

export default function Admin() {
  const { isAdmin, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  
  // Redirect non-admin users
  useEffect(() => {
    if (!loading && isAuthenticated && !isAdmin) {
      router.push('/');
    }
  }, [isAdmin, isAuthenticated, loading, router]);

  return (
    <ProtectedRoute adminOnly>
      <Head>
        <title>Admin | DocuQuery</title>
      </Head>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          
          <UserManagement />
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
