import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://vlogayush51_db_user:Z9gDSaTAdepeGcEg@cluster0.yidlauw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected")
    } catch (error) {
        console.log("DB error")
    }
}
export default connectDb