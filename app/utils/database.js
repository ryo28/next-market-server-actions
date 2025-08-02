import mongoose from "mongoose";
export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://waki:QUQhd3BWemKKhFTp@cluster0.jgjb9es.mongodb.net/nextMarketDataServerActions?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success:Connected to MongoDB");
  } catch {
    console.error("Failure: Unconnected to MongoDB");
    throw new Error();
  }
}
