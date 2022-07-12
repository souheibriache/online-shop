const express = require('express');
const asyncHandler = require('express-async-handler');
const protect = require('../Middleware/AuthMiddleware');
const User = require('../models/UserModel');
const generateToken = require('../utils/generateToken');

const userRoutes = express.Router();



//LOGIN
userRoutes.post('/login' , asyncHandler(async (req , res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id),
            createdAt : user.createdAt,
            

        })
    }else{
        res.status(401);
        throw new Error('Invalid Email or password')
    }
}));


//PROFILE
userRoutes.get('/profile' ,protect ,  asyncHandler(async (req , res) => {
    const user = await User.findById(req.user._id);

    if(user) {
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            createdAt : user.createdAt,
        })
    }else{
        res.status(404);
        throw new Error('User not found')
    }
}));

//REGISTER
userRoutes.post('/register' ,  asyncHandler(async (req , res) => {
    const {name , email , password} = req.body;
    
    console.log(req.body)
    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({name : name , email : email , password : password});
    if (user){
        res.status(200).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id),
        })

    }
    else{
        res.status(404);
        throw new Error("Invalid user")
    }
}));



module.exports = userRoutes;