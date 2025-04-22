import Head from 'next/head';
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DocumentList from '@/components/documents/DocumentList';
import DocumentUpload from '@/components/documents/DocumentUpload';
import Button from '@/components/ui/Button';
import ProtectedRoute from '@/lib/protectedRoute';

export default function Documents() {
  const [activeTab, setActiveTab] = useState<'list' | 'upload'>('list');

  return (
    <ProtectedRoute>
      <Head>
        <title>Documents | DocuQuery</title>
      </Head>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Document Management</h1>
            <div className="flex space-x-4">
              <Button
                variant={activeTab === 'list' ? 'default' : 'outline'}
                onClick={() => setActiveTab('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                View Documents
              </Button>
              <Button
                variant={activeTab === 'upload' ? 'default' : 'outline'}
                onClick={() => setActiveTab('upload')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload Document
              </Button>
            </div>
          </div>

          {activeTab === 'list' ? (
            <DocumentList />
          ) : (
            <DocumentUpload />
          )}
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
