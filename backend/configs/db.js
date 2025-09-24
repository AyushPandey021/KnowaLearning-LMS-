import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://vlogayush51_db_user:osHcKtH5hXikbSlr@cluster0.salwarb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("DB connected ✅");
  } catch (error) {
    console.log("DB connection error ❌", error);
  }
};

export default connectDb;
