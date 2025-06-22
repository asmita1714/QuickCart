<<<<<<< HEAD
import mongoose from "mongoose";
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
  bufferCommands: false
}
  cached.promise = mongoose.connect('${process.env.MONGODB_URI}/quickcart', opts).then(mongoose => {
    return mongoose
  })
}

cached.conn = await cached.promise
return cached.conn
  }

export default connectDB
=======
// lib/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDB;
>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
