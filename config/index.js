import mongoose from "mongoose";
const DB_URL = process.env.MONGODB_URI
let isConnected = false; // Track the connection state

const connectDB = async () => {
  if (isConnected) {
    console.log("Mongodb already connected");
    return true;
  }

  try {
    await mongoose.connect('mongodb+srv://mkn:Jx0sexApTSjbpRZ3@cluster0.irzr9mk.mongodb.net/testdb');
    isConnected = true;
    console.log('Mongodb connected');
    return true;
  } catch (error) {
    console.log("Mongodb connection error:", error);
    return error;
  }
}

export default connectDB;