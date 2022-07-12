const express = require('express');
const Products = require('./data/Products');
const users = require('./data/users');
const Product = require('./models/ProductModel');
const User = require('./models/UserModel');
const asyncHandler =require('express-async-handler')

const ImportData = express.Router();


ImportData.post('/users' , asyncHandler(
    async (req, res) => {
        await User.remove({})
        const importUser = await User.insertMany(users);
        console.log('import data ...')
        res.send({importUser});
    }
) );

ImportData.post('/products' , asyncHandler(
    async (req, res) => {
        await Product.remove({})
        const importProduct = await Product.insertMany(Products);
        console.log('import data ...')
        res.send({importProduct});
    }
) );


module.exports = ImportData;