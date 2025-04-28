import { useState, useEffect } from "react";

export default function UploadProgress() {
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const eventSource = new EventSource("/api/upload");

    eventSource.onmessage = function (event) {
      const data = JSON.parse(event.data);
      if (data.progress !== undefined) {
        setProgress(data.progress);
      }
    };

    eventSource.onerror = function () {
      console.error("Error with the EventSource connection.");
    };

    return () => {
      eventSource.close(); // Clean up when component unmounts
    };
  }, []);

  const handleFileUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsUploading(true);

    // Assume you're sending a form submission that triggers file upload
    const formData = new FormData();
    formData.append("title", "Test Title");
    formData.append("description", "Test Description");
    formData.append("file", file as any);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>
      <div>
        <h3>Upload Progress: {progress}%</h3>
        <div style={{ width: "100%", backgroundColor: "#ddd", height: "20px" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "green",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
