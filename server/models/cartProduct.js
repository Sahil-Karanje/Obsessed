const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartProductSchema = new Schema({
        productID:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
        },
        quantity: {
                type: Number,
                default: 1
        }
});

const CartProduct = mongoose.model('cartProducts', cartProductSchema );

module.exports = CartProduct;