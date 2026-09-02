import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name:{
        type:String,
        minLenght:[2,"Username cannot be shorter than two characters"],
    },
    age:{
        type:Number,
        min:[18,"User cannot be under 18"],
    }, 
})

export default {userModel}