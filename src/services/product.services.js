import Product from "../models/Products.js"

const createProduct= async ()=>{
    return await Product.create({
        name:"Iphone 14",
        brand:"Apple",
        category:"Mobiles",
        price:150000,
    })
}
export default {createProduct}