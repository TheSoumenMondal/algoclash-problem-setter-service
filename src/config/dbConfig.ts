import mongoose from "mongoose";
import { serverConfig } from "./serverConfig";

export async function connectDB() {
  try {
    const connection = await mongoose.connect(serverConfig.MONGODB_URI!);
    console.log("Database connected successfully:", connection.connection.host);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}
