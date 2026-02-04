import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("URI CHECK:", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1);
  }
};
