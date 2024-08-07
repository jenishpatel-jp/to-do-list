const mongoose = require('mongoose');

const mongoURI: string | undefined = process.env.MONGODB_URI;

if(!mongoURI){
  throw new Error("MongoDB connection URI is not defined.")
}

let isConnected: boolean = false;

const connectDB = async (): Promise<void> => {
  if(isConnected){
    console.log('Using existing database connection');
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Database connection error')
  }
};

export default connectDB;
