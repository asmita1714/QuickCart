import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

   cached.promise = mongoose
  .connect(`${process.env.MONGODB_URI}/quickcart`, opts)
  .then((mongoose) => {
    return mongoose;
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  });
  }}
  export default connectDB