const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
        imgUrl:{type:String},
        price:{type:Number},
        title:{type:String},
        gender:{type:String},
        category:{type:String},
});

const products = mongoose.model('products', productsSchema );

module.exports = products;