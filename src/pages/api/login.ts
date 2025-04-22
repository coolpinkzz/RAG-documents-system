import type { NextApiRequest, NextApiResponse } from 'next';
import { mockUsers } from '@/lib/mockData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email and password are required' 
      });
    }

    // Find user by email
    const user = mockUsers.find(user => user.email === email);
    
    // In a real application, we would check the password hash
    // For this mock implementation, we'll accept any password for the mock users
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid email or password' 
      });
    }

    // Return user data (excluding password)
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Login failed. Please try again later.' 
    });
  }
}
