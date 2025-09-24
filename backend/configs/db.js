import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/teradata🥳⭐");
    console.log("DB connected ✅");
  } catch (error) {
    console.log("DB connection error ❌", error);
  }
};

export default connectDb;
