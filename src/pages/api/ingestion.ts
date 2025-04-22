import type { NextApiRequest, NextApiResponse } from 'next';
import { mockIngestionJobs } from '@/lib/mockData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle GET request to fetch ingestion jobs
  if (req.method === 'GET') {
    try {
      // Extract query parameters
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      
      // In a real application, we would fetch jobs from the database
      // Filter by user ID, apply pagination, etc.
      
      // Apply limit if provided
      const jobs = limit ? mockIngestionJobs.slice(0, limit) : mockIngestionJobs;
      
      return res.status(200).json({
        success: true,
        data: jobs
      });
    } catch (error) {
      console.error('Get ingestion jobs error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch ingestion jobs. Please try again later.' 
      });
    }
  }
  
  // Handle POST request to create a new ingestion job
  if (req.method === 'POST') {
    try {
      const { documentId } = req.body;
      
      if (!documentId) {
        return res.status(400).json({ 
          success: false, 
          error: 'Document ID is required' 
        });
      }
      
      // In a real application, we would create a new ingestion job in the database
      // and start processing the document
      
      // For this mock implementation, we'll create a mock job
      const newJob = {
        id: `job-${Date.now()}`,
        documentId,
        documentTitle: 'Sample Document',
        status: 'queued' as const,
        progress: 0,
        startedAt: new Date().toISOString()
      };
      
      return res.status(201).json({
        success: true,
        data: newJob
      });
    } catch (error) {
      console.error('Create ingestion job error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to create ingestion job. Please try again later.' 
      });
    }
  }
  
  // Handle PUT request to update a job (cancel, retry)
  if (req.method === 'PUT') {
    try {
      const { id, action } = req.body;
      
      if (!id || !action) {
        return res.status(400).json({ 
          success: false, 
          error: 'Job ID and action are required' 
        });
      }
      
      if (action !== 'cancel' && action !== 'retry') {
        return res.status(400).json({ 
          success: false, 
          error: 'Invalid action. Supported actions: cancel, retry' 
        });
      }
      
      // In a real application, we would update the job in the database
      // For this mock implementation, we'll just return success
      
      return res.status(200).json({
        success: true,
        message: `Job ${action === 'cancel' ? 'cancelled' : 'retried'} successfully`
      });
    } catch (error) {
      console.error('Update ingestion job error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to update ingestion job. Please try again later.' 
      });
    }
  }
  
  // Handle any other HTTP method
  return res.status(405).json({ success: false, error: 'Method not allowed' });
}
