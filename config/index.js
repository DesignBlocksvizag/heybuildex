import mongoose from "mongoose";
let isConnected = false; // Track the connection state

const connectDB = async () => {
  if (isConnected) {
    console.log("Mongodb already connected");
    return true;
  }

  try {
    await mongoose.connect('mongodb+srv://mkwebinsights:lkeou9k8fegmF9MF@designblocks.e7uoj.mongodb.net/heybuilex');
    isConnected = true;
    console.log('Mongodb connected');
    return true;
  } catch (error) {
    console.log("Mongodb connection error:", error);
    return error;
  }
}

export default connectDB;