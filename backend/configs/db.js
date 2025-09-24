import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Use environment variable for MongoDB URL
const mongoURL = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    if (!mongoURL) {
      throw new Error("MongoDB URL is not defined in .env file");
    }

    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connected ✅");
  } catch (error) {
    console.error("DB connection error ❌", error);
  }
};

export default connectDb;
