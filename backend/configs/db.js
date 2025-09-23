try {

    const conn = await mongoose.connect("mongodb+srv://vlogayush51_db_user:Z9gDSaTAdepeGcEg@cluster0.yidlauw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`✅ DB Connected: ${conn.connection.host}`);
} catch (error) {
    console.error("❌ DB Connection Failed");
    console.error(error.message);
    process.exit(1);
}


export default connectDb;