import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,   
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  stock: {
    type: Number,
    default: 1,
  },
  description:{
    type: String,
  },
  imageUrls: [String], //box  bracket for arrays or a number of it 
})

export default mongoose.model("Product",productSchema);