import Head from 'next/head';
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import IngestionStatus from '@/components/ingestion/IngestionStatus';
import IngestionTrigger from '@/components/ingestion/IngestionTrigger';
import Button from '@/components/ui/Button';
import ProtectedRoute from '@/lib/protectedRoute';

export default function Ingestion() {
  const [activeTab, setActiveTab] = useState<'status' | 'trigger'>('status');

  return (
    <ProtectedRoute>
      <Head>
        <title>Ingestion | DocuQuery</title>
      </Head>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Document Ingestion</h1>
            <div className="flex space-x-4">
              <Button
                variant={activeTab === 'status' ? 'default' : 'outline'}
                onClick={() => setActiveTab('status')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Ingestion Status
              </Button>
              <Button
                variant={activeTab === 'trigger' ? 'default' : 'outline'}
                onClick={() => setActiveTab('trigger')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Trigger Ingestion
              </Button>
            </div>
          </div>

          {activeTab === 'status' ? (
            <IngestionStatus />
          ) : (
            <IngestionTrigger />
          )}
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
