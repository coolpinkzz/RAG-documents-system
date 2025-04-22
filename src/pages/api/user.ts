import type { NextApiRequest, NextApiResponse } from 'next';
import { mockUsers } from '@/lib/mockData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // In a real application, we would get the user ID from the session/JWT
    // and fetch the user data from the database
    
    // For this mock implementation, we'll return the first user
    const user = mockUsers[0];
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
    }

    // Return user data
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Get user error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch user data. Please try again later.' 
    });
  }
}
