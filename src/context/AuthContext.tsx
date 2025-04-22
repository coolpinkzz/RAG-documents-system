import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { User, LoginCredentials, RegisterCredentials } from '@/types';
import { fetchWithAuth } from '@/lib/api';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadUserFromSession() {
      try {
        const response = await fetchWithAuth<User>('/user');
        if (response.success && response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error('Failed to load user session', error);
      } finally {
        setLoading(false);
      }
    }

    loadUserFromSession();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchWithAuth<User>('/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      
      if (response.success && response.data) {
        setUser(response.data);
        router.push('/');
      } else {
        setError(response.error || 'Login failed');
        throw new Error(response.error || 'Login failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchWithAuth<User>('/register', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      
      if (response.success && response.data) {
        setUser(response.data);
        router.push('/');
      } else {
        setError(response.error || 'Registration failed');
        throw new Error(response.error || 'Registration failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    
    try {
      const response = await fetchWithAuth('/logout', {
        method: 'POST',
      });
      
      if (response.success) {
        setUser(null);
        router.push('/auth');
      } else {
        setError(response.error || 'Logout failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}
