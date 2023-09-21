import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongoDb");
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;