import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export default function ProtectedRoute({ children, adminOnly = false }: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.replace('/auth');
      } else if (adminOnly && !isAdmin) {
        router.replace('/');
      }
    }
  }, [isAuthenticated, isAdmin, loading, adminOnly, router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If authentication check passed, render children
  if ((isAuthenticated && !adminOnly) || (isAuthenticated && adminOnly && isAdmin)) {
    return <>{children}</>;
  }

  // Return null while redirecting
  return null;
}
