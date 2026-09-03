import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[2,"Username cannot be shorter than two characters"],
    },
    age:{
        type:Number,
        min:[18,"User cannot be under 18"],
    }, 
})

export default mongoose.model("User",userSchema)