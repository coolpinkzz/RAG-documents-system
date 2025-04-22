import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { fetchWithAuth } from '@/lib/api';

const ALLOWED_FILE_TYPES = ['pdf', 'docx', 'doc', 'txt', 'csv', 'xlsx', 'xls'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function DocumentUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError(null);
    
    if (!selectedFile) {
      setFile(null);
      return;
    }
    
    // Validate file type
    const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !ALLOWED_FILE_TYPES.includes(fileExtension)) {
      setFileError(`Invalid file type. Allowed types: ${ALLOWED_FILE_TYPES.join(', ')}`);
      setFile(null);
      return;
    }
    
    // Validate file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      setFileError('File size exceeds 10MB limit');
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
  };
  
  const simulateUploadProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Simulate successful upload completion
        setTimeout(() => {
          setIsUploading(false);
          setUploadSuccess(true);
          setTitle('');
          setDescription('');
          setFile(null);
          setUploadProgress(0);
        }, 500);
      }
      setUploadProgress(Math.min(progress, 100));
    }, 300);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setFileError('Please select a file to upload');
      return;
    }
    
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);
    
    try {
      // In a real application, this would upload the file to the API
      // const formData = new FormData();
      // formData.append('title', title);
      // formData.append('description', description);
      // formData.append('file', file);
      
      // const response = await fetch('/api/documents', {
      //   method: 'POST',
      //   body: formData,
      //   onUploadProgress: (progressEvent) => {
      //     const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      //     setUploadProgress(percentCompleted);
      //   },
      // });
      
      // For now, simulate upload
      simulateUploadProgress();
      
    } catch (error) {
      setUploadError('Failed to upload document. Please try again.');
      setIsUploading(false);
    }
  };
  
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setFile(null);
    setFileError(null);
    setUploadProgress(0);
    setUploadSuccess(false);
    setUploadError(null);
  };
  
  return (
    <Card title="Upload Document">
      {uploadSuccess ? (
        <div className="text-center py-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">Upload Successful!</h3>
          <p className="text-gray-600 mt-2">Your document has been successfully uploaded and is now being processed.</p>
          <Button 
            className="mt-6" 
            onClick={resetForm}
          >
            Upload Another Document
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {uploadError && (
            <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
              {uploadError}
            </div>
          )}
          
          <Input
            label="Document Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter a title for your document"
          />
          
          <Textarea
            label="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description for your document"
            rows={3}
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Document
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      disabled={isUploading}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOCX, TXT, CSV, XLSX up to 10MB
                </p>
                {file && (
                  <p className="text-sm text-gray-900 font-medium">
                    Selected: {file.name}
                  </p>
                )}
              </div>
            </div>
            {fileError && <p className="mt-1 text-sm text-red-600">{fileError}</p>}
          </div>
          
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-sm text-gray-600 mt-1">Uploading: {Math.round(uploadProgress)}%</p>
            </div>
          )}
          
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isUploading || !file}
              isLoading={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload Document'}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}
