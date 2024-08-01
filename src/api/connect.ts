import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await connectDB();
      res.status(200).json({ message: 'MongoDB connection is working!' });
    } catch (error) {
      res.status(500).json({ message: 'MongoDB connection failed', error: error });
    }
  };
  
  export default handler;