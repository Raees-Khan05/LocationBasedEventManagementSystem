import mongoose from "mongoose";


export default async function  connectDB() {
    try {
        let connection;
        connection = await mongoose.connect(process.env.MONGODB_URI);
        console.info('MongoDB Connected')
    } catch (error) {
        console.log('err in connection=>' , error);
        
    }
}