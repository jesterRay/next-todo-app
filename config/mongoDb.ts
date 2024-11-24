import mongoose from "mongoose";



const connectDb = async () => {
    if(mongoose.connections[0].readyState) return true;
    try {
        const uri: any = process.env.MONGODB_URI;
        await mongoose.connect(uri)
        console.log("Connected To MongoDB")
    } catch (error: any) {
        throw new Error(error.message || "Error in connecting to DB.")
    }
}



export default connectDb;