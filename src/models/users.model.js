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
    country:{
        type:String,
        required:[true,"Country is required"],
        default:Nepal,
    },
    email:{
        type:String,
        required:[true,"Email address is required"],
        minLength:5,
        maxLength:100,
        unique: true, //this will make sure that two users do not have the same email
        lowercase: true,//this will automatically make all the characters into lowercase
        //now comes a very powerful function
        validate:{
            validator: (value)=>{
                 const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                emailRegex.test(value);
            },
            message: "Invalid email address"
        },
    },
})

export default mongoose.model("User",userSchema)