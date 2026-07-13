import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // 🔗 Aapke naye Atlas Cluster ke coordinates embedded hain yahan par
    const MONGO_URI = process.env.MONGO_URI ;
    
    console.log("Connecting to MongoDB Cloud Atlas...");

    // Is configuration se network drop ya custom DNS settings bypass ho jayengi
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout limit for slow internet
      autoIndex: true
    });
    
    console.log("Database connected successfully! 🚀 (Real Cloud Atlas - MVC Mode)");
  } catch (err) {
    console.error("❌ Database connection error: ", err.message);
    console.log("\n💡 Devansh, agar ye fir bhi block ho toh 2 cheezein check karo:");
    console.log("1. MongoDB Atlas dashboard me Network Access me '0.0.0.0/0' (Allow access from anywhere) status Active hai ya nahi.");
    console.log("2. Kisi local restricted college Wi-Fi ke badle apne Mobile Hotspot se connect karke check karo.");
    process.exit(1);
  }
};

export default connectDB;