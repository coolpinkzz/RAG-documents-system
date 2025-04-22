import type { NextApiRequest, NextApiResponse } from 'next';
import { mockQuestions, mockDocumentExcerpts } from '@/lib/mockData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle GET request to fetch question history
  if (req.method === 'GET') {
    try {
      // In a real application, we would fetch questions from the database
      // Filter by user ID, apply pagination, etc.
      
      return res.status(200).json({
        success: true,
        data: mockQuestions
      });
    } catch (error) {
      console.error('Get questions error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch questions. Please try again later.' 
      });
    }
  }
  
  // Handle POST request to ask a new question
  if (req.method === 'POST') {
    try {
      const { question } = req.body;
      
      if (!question) {
        return res.status(400).json({ 
          success: false, 
          error: 'Question text is required' 
        });
      }
      
      // In a real application, we would process the question using RAG,
      // query a vector database, generate an answer, etc.
      
      // For this mock implementation, we'll create a simulated response
      const newQuestion = {
        id: `q-${Date.now()}`,
        question,
        answer: `This is a simulated answer to your question: "${question}". In a real application, this would be generated using RAG techniques to provide accurate information based on your documents.`,
        documentExcerpts: mockDocumentExcerpts['1'], // Use existing excerpts for demo
        askedAt: new Date().toISOString(),
        userId: '1', // Assume current user
      };
      
      return res.status(200).json({
        success: true,
        data: newQuestion
      });
    } catch (error) {
      console.error('Ask question error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to process question. Please try again later.' 
      });
    }
  }
  
  // Handle any other HTTP method
  return res.status(405).json({ success: false, error: 'Method not allowed' });
}
