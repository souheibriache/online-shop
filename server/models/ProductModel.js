const mongoose = require('mongoose');


const reviewsSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },

    comment: {
        type: String,
        required: true,
    },

    user:{
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    image:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
        default: 0
    },
    
    reviews : [reviewsSchema],

    numReviews: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },


    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timeStamp: true
}

);

const Product = mongoose.model("Product" , productSchema);

module.exports = Product;