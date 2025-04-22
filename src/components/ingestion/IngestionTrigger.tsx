import { useState, useEffect } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { Document, IngestionJob } from '@/types';
import { mockDocuments } from '@/lib/mockData';
import { fetchWithAuth } from '@/lib/api';

export default function IngestionTrigger() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [triggering, setTriggering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        // In a real application, this would fetch from the API
        // const response = await fetchWithAuth<Document[]>('/documents');
        
        // For now, use the mock data (only showing documents that are not being processed)
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
        setDocuments(mockDocuments.filter(doc => doc.status !== 'pending'));
      } catch (error) {
        setError('Failed to fetch documents');
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleTriggerIngestion = async () => {
    if (!selectedDocumentId) {
      setError('Please select a document');
      return;
    }

    try {
      setTriggering(true);
      setError(null);
      setSuccess(null);
      
      // In a real application, this would call the API
      // await fetchWithAuth('/ingestion/jobs', {
      //   method: 'POST',
      //   body: JSON.stringify({ documentId: selectedDocumentId }),
      // });
      
      // For now, simulate the ingestion trigger
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      setSuccess('Ingestion started successfully');
      setSelectedDocumentId('');
    } catch (error) {
      setError('Failed to trigger ingestion');
      console.error('Error triggering ingestion:', error);
    } finally {
      setTriggering(false);
    }
  };

  const documentOptions = documents.map(doc => ({
    value: doc.id,
    label: doc.title,
  }));

  return (
    <Card title="Trigger Document Ingestion">
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {error && (
            <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md">
              {success}
            </div>
          )}

          <div>
            <p className="text-sm text-gray-600 mb-4">
              Select a document to process and make it available for search and Q&A. 
              This will extract text, analyze content, and index the document.
            </p>

            <Select
              label="Select Document"
              id="document-select"
              value={selectedDocumentId}
              onChange={(e) => setSelectedDocumentId(e.target.value)}
              options={[
                { value: '', label: 'Choose a document...' },
                ...documentOptions,
              ]}
              disabled={documentOptions.length === 0 || triggering}
            />

            {documentOptions.length === 0 && (
              <p className="mt-2 text-sm text-amber-600">
                No available documents found. Please upload a document first.
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleTriggerIngestion}
              disabled={!selectedDocumentId || triggering}
              isLoading={triggering}
            >
              {triggering ? 'Starting Ingestion...' : 'Start Ingestion'}
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
