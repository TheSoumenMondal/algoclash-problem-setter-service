import dotenv from "dotenv";

dotenv.config();

export const serverConfig = {
  PORT: process.env.PORT || 7001,
  MONGODB_URI: process.env.MONGODB_URI,
};