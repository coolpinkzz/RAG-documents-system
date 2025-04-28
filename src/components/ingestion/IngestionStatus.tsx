import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Table from "@/components/ui/Table";
import Button from "@/components/ui/Button";
import { IngestionJob } from "@/types";
import { mockIngestionJobs } from "@/lib/mockData";
import { fetchWithAuth } from "@/lib/api";

export default function IngestionStatus() {
  const [ingestionJobs, setIngestionJobs] = useState<IngestionJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const fetchJobs = async () => {
    try {
      setLoading(true);
      // In a real application, this would fetch from the API
      const response = await fetch("/api/ingestion");
      const data = await response.json();
      console.log(data, "data");
      setIngestionJobs(data);
      // For now, use mock data and simulate job progress changes

      // Simulate progress change for processing jobs
      //  const updatedJobs = [...mockIngestionJobs].map((job) => {
      //    if (job.status === "processing") {
      //      const newProgress = Math.min(
      //        job.progress + Math.floor(Math.random() * 10),
      //        100
      //      );

      //      // Once progress reaches 100, mark as completed
      //      if (newProgress === 100) {
      //        return {
      //          ...job,
      //          progress: newProgress,
      //          status: "completed" as const,
      //          completedAt: new Date().toISOString(),
      //        };
      //      }

      //      return { ...job, progress: newProgress };
      //    }
      //    return job;
      //  });

      //  setIngestionJobs(updatedJobs);
    } catch (error) {
      setError("Failed to fetch ingestion jobs");
      console.error("Error fetching ingestion jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();

    // Simulate real-time updates by polling every 5 seconds
    //const interval = setInterval(fetchJobs, 10000);
    //setRefreshInterval(interval);

    //return () => {
    //  if (refreshInterval) {
    //    clearInterval(refreshInterval);
    //  }
    //};
  }, []);

  // Cancel an ingestion job
  const handleCancelJob = async (jobId: string) => {
    try {
      setLoading(true);
      // In a real application, this would call the API
      // await fetchWithAuth(`/ingestion/jobs/${jobId}/cancel`, {
      //   method: 'POST',
      // });

      // For now, simulate cancellation
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay

      //  setIngestionJobs(
      //    ingestionJobs.map((job) =>
      //      job.id === jobId
      //        ? { ...job, status: "failed", error: "Job cancelled by user" }
      //        : job
      //    )
      //  );
    } catch (error) {
      setError("Failed to cancel job");
      console.error("Error cancelling job:", error);
    } finally {
      setLoading(false);
    }
  };

  // Retry a failed ingestion job
  const handleRetryJob = async (jobId: string) => {
    try {
      setLoading(true);
      // In a real application, this would call the API
      // await fetchWithAuth(`/ingestion/jobs/${jobId}/retry`, {
      //   method: 'POST',
      // });

      // For now, simulate retry
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay

      //  setIngestionJobs(
      //    ingestionJobs.map((job) =>
      //      job.id === jobId
      //        ? { ...job, status: "processing", progress: 0, error: undefined }
      //        : job
      //    )
      //  );
    } catch (error) {
      setError("Failed to retry job");
      console.error("Error retrying job:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      header: "Document",
      accessor: "documenttitle",
    },
    {
      header: "Status",
      accessor: (job: IngestionJob) => {
        const statusVariant =
          job.status === "completed" ? "success" : "warning";

        return <Badge variant={statusVariant}>{job.status}</Badge>;
      },
    },
    {
      header: "Progress",
      accessor: (job: IngestionJob) => (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              job.status === "completed"
                ? "bg-green-600"
                : job.status === "failed"
                ? "bg-red-600"
                : "bg-blue-600"
            }`}
            style={{ width: `${job.progress}%` }}
          ></div>
          <span className="text-xs text-gray-600 mt-1">{job.progress}%</span>
        </div>
      ),
    },
    {
      header: "Started",
      accessor: (job: IngestionJob) => new Date(job.startedat).toLocaleString(),
    },
    {
      header: "Completed",
      accessor: (job: IngestionJob) =>
        job.updatedat ? new Date(job.updatedat).toLocaleString() : "-",
    },
    {
      header: "Actions",
      accessor: (job: IngestionJob) => (
        <div className="flex space-x-2">
          {job.status === "processing" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCancelJob(job.id)}
            >
              Cancel
            </Button>
          )}
          {job.status === "failed" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleRetryJob(job.id)}
            >
              Retry
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Card title="Ingestion Status">
      {loading && !ingestionJobs.length ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="p-4 text-red-500 bg-red-100 rounded-md">{error}</div>
      ) : (
        <>
          <div className="mb-4 flex justify-end">
            <Button variant="outline" size="sm" onClick={fetchJobs}>
              Refresh
            </Button>
          </div>
          <Table
            columns={columns}
            data={ingestionJobs}
            emptyMessage="No ingestion jobs found"
          />
        </>
      )}
    </Card>
  );
}
