import mongoose from "mongoose";
import 'dotenv/config';

console.log("👉 Loaded MONGO_URI:", process.env.MONGO_URI); // 👈 ADD THIS LINE

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🚀 Connected to MongoDB Successfully!");
  } catch (error) {
    console.error("❌ Final DB Error:", error.message);
  }
};

export default connectToMongo;
