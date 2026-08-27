import mongoose from "mongoose";

async function connectDB(){
    try{
        await mongoose.connect("mongodb:localhost:27017/test");
    }   catch(error){
        console.log(error)
    }
}

export default connectDB;