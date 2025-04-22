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
    const { username, email, password } = req.body;

    // Validate request body
    if (!username || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Check if email already exists
    const userExists = mockUsers.some(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email already in use' 
      });
    }

    // In a real application, we would hash the password and save to database
    // For this mock implementation, we'll create a new user object
    const newUser = {
      id: `${mockUsers.length + 1}`, // Generate a mock ID
      username,
      email,
      role: 'user' as const,
      createdAt: new Date().toISOString(),
    };

    // In a real app, we would add the user to the database
    // mockUsers.push(newUser); // We won't modify the mock data for this demo

    // Return the new user (excluding password)
    return res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Registration failed. Please try again later.' 
    });
  }
}
