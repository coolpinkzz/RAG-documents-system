import type { NextApiRequest, NextApiResponse } from 'next';
import { mockDocuments } from '@/lib/mockData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle GET request to fetch documents
  if (req.method === 'GET') {
    try {
      // Extract query parameters
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      
      // In a real application, we would fetch documents from the database
      // Filter by user ID, apply pagination, etc.
      
      // Apply limit if provided
      const documents = limit ? mockDocuments.slice(0, limit) : mockDocuments;
      
      return res.status(200).json({
        success: true,
        data: documents
      });
    } catch (error) {
      console.error('Get documents error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch documents. Please try again later.' 
      });
    }
  }
  
  // Handle POST request to create a document
  if (req.method === 'POST') {
    try {
      // In a real application, we would process file upload, validate file type and size
      // For this mock implementation, we'll extract data from the request body
      
      const { title, description } = req.body;
      
      if (!title) {
        return res.status(400).json({ 
          success: false, 
          error: 'Document title is required' 
        });
      }
      
      // Create a mock document
      const newDocument = {
        id: `doc-${Date.now()}`,
        title,
        description: description || '',
        fileType: 'pdf',
        fileSize: 1024 * 1024, // 1MB
        uploadedBy: '1', // Assuming current user ID is 1
        uploadedAt: new Date().toISOString(),
        status: 'pending' as const
      };
      
      // In a real application, we would save the document to the database
      // mockDocuments.push(newDocument);
      
      return res.status(201).json({
        success: true,
        data: newDocument
      });
    } catch (error) {
      console.error('Create document error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to upload document. Please try again later.' 
      });
    }
  }
  
  // Handle DELETE request to delete a document
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({ 
          success: false, 
          error: 'Document ID is required' 
        });
      }
      
      // In a real application, we would delete the document from the database
      // For this mock implementation, we'll just return success
      
      return res.status(200).json({
        success: true,
        message: 'Document deleted successfully'
      });
    } catch (error) {
      console.error('Delete document error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to delete document. Please try again later.' 
      });
    }
  }
  
  // Handle any other HTTP method
  return res.status(405).json({ success: false, error: 'Method not allowed' });
}
