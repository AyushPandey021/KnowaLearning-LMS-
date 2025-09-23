import mongoose from "mongoose";

const connectDb = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ DB Connection Failed");
    console.error(error.message);
    process.exit(1); 
  }
};

export default connectDb;
