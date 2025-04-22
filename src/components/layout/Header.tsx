import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';

export default function Header() {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const router = useRouter();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">DocuQuery</span>
            </Link>
            {isAuthenticated && (
              <nav className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === '/' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}>
                  Dashboard
                </Link>
                <Link href="/documents" className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === '/documents' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}>
                  Documents
                </Link>
                <Link href="/ingestion" className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === '/ingestion' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}>
                  Ingestion
                </Link>
                <Link href="/qa" className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === '/qa' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}>
                  Q&A
                </Link>
                {isAdmin && (
                  <Link href="/admin" className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === '/admin' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}>
                    Admin
                  </Link>
                )}
              </nav>
            )}
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center">
                <span className="text-sm text-gray-700 mr-4">
                  Hello, {user?.username}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => router.push('/auth')}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
