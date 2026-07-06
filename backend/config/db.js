import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    
    const MONGO_URI = process.env.MONGO_URI 
    
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    
    console.log("Database connected successfully! 🚀 (MVC Mode)");
  } catch (err) {
    console.error("❌ Database connection error: ", err.message);
    process.exit(1);
  }
};

export default connectDB;