const mongoose = require('mongoose');

const mongoURI: string | undefined = process.env.MONGODB_URI;

const connectDB = async (): Promise<void> => {
  try {

    if(!mongoURI){
      throw new Error("MongoDB connection URI is not defined.")
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
