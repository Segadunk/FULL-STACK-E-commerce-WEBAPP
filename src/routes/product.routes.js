import express from "express"
import productController from "../controllers/product.controller.js"

const router=express.Router()

router.post("/products", productController.createProduct)

export default router;//always export the router from the routes file