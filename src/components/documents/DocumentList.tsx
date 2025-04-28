import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import { Document } from "@/types";
import { mockDocuments } from "@/lib/mockData";
import { fetchWithAuth } from "@/lib/api";

export default function DocumentList() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        // In a real application, this would fetch from the API
        // const response = await fetchWithAuth<Document[]>('/documents');
        const res = await fetch("/api/get-documents");
        const result = await res.json();
        const data = result.documents;

        setDocuments([...data, ...mockDocuments]);
      } catch (error) {
        setError("Failed to fetch documents");
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDeleteDocument = async (documentId: string) => {
    try {
      setLoading(true);
      // In a real application, this would delete the document via API
      // await fetchWithAuth(`/documents/${documentId}`, {
      //   method: 'DELETE',
      // });

      // For now, update the mock data
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
      setDocuments(documents.filter((doc) => doc.id !== documentId));

      setSelectedDocument(null);
    } catch (error) {
      setError("Failed to delete document");
      console.error("Error deleting document:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Description",
      accessor: "description",
    },
    {
      header: "Type",
      accessor: (doc: Document) => (
        <Badge variant="info">{doc.fileType.toUpperCase()}</Badge>
      ),
    },
    {
      header: "Size",
      accessor: (doc: Document) => formatFileSize(doc.fileSize),
    },
    {
      header: "Status",
      accessor: (doc: Document) => {
        const statusVariant = doc.isInjected ? "success" : "warning";

        return (
          <Badge variant={statusVariant}>
            {doc.isInjected ? "processed" : "pending"}
          </Badge>
        );
      },
    },
    {
      header: "Uploaded",
      accessor: (doc: Document) =>
        new Date(doc.created_at).toLocaleDateString(),
    },
    {
      header: "Actions",
      accessor: (doc: Document) => (
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              // View document details or download
              console.log("View document", doc.id);
            }}
          >
            View
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDocument(doc);
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
      <Card title="Documents">
        {loading && !documents.length ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="p-4 text-red-500 bg-red-100 rounded-md">{error}</div>
        ) : (
          <Table
            columns={columns as any}
            data={documents}
            emptyMessage="No documents found"
          />
        )}
      </Card>

      {/* Delete Document Confirmation Dialog */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Delete Document
            </h3>
            <p className="mb-6">
              Are you sure you want to delete the document "
              {selectedDocument.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setSelectedDocument(null)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDeleteDocument(selectedDocument.id)}
                isLoading={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
