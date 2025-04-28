import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "@/components/layout/MainLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ProtectedRoute from "@/lib/protectedRoute";
import { useAuth } from "@/context/AuthContext";
import { Document, IngestionJob } from "@/types";
import { mockDocuments, mockIngestionJobs } from "@/lib/mockData";
//import Navbar from "@/components/Navbar";

export default function Home() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [ingestionJobs, setIngestionJobs] = useState<IngestionJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("/api/get-documents");
        const result = await res.json();
        const data = result.documents;

        // For now, use the mock data
        setDocuments(data.slice(0, 3));
        setIngestionJobs(mockIngestionJobs.slice(0, 2));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);

  return (
    <ProtectedRoute>
      <Head>
        <title>Dashboard | DocuQuery</title>
      </Head>
      {/*<Header />*/}

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-gray-800">
                  Welcome, {user?.username}!
                </h2>
                <p className="text-gray-600 mt-1">
                  Manage your documents and access the Q&A interface from your
                  dashboard.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="default"
                  onClick={() => router.push("/documents")}
                >
                  Upload Document
                </Button>
                <Button variant="outline" onClick={() => router.push("/qa")}>
                  Ask Questions
                </Button>
              </div>
            </div>
          </Card>

          <Card title="Recent Documents" className="md:col-span-2">
            {isLoading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : documents.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  You haven&apos;t uploaded any documents yet.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => router.push("/documents")}
                >
                  Upload Your First Document
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 border rounded-md hover:bg-gray-50"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {doc.description}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(doc.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <Button
                    variant="link"
                    onClick={() => router.push("/documents")}
                  >
                    View All Documents →
                  </Button>
                </div>
              </div>
            )}
          </Card>

          <Card title="Processing Status" className="md:col-span-1">
            {isLoading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : ingestionJobs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No document processing jobs.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {ingestionJobs.map((job) => (
                  <div key={job.id} className="p-3 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3
                        className="font-medium text-gray-900 text-sm truncate"
                        title={job.documentTitle}
                      >
                        {job.documentTitle}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          job.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : job.status === "failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          job.status === "completed"
                            ? "bg-green-600"
                            : job.status === "failed"
                            ? "bg-red-600"
                            : "bg-blue-600"
                        }`}
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {job.progress}% complete
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <Button
                    variant="link"
                    onClick={() => router.push("/ingestion")}
                  >
                    View All Jobs →
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
      {/*</MainLayout>*/}
    </ProtectedRoute>
  );
}
