const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/ProductModel');

const productRoutes = express.Router();



//GET ALL PRODUCTS
productRoutes.get('/' , asyncHandler(async (req , res) => {
    const products = await Product.find({});
    res.json(products);
}));



//GET A PRODUCT BY ID
productRoutes.get('/:id' , asyncHandler(async (req , res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error('Product not found')
    }
}));


module.exports = productRoutes;