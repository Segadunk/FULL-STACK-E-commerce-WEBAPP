import productServices from "../services/product.services.js";

const createProduct= (req,res)=>{
    productServices.createProduct()

    res.send(`Product Created`)
}

export default {createProduct}