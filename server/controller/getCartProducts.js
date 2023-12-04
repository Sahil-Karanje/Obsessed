const products = require('../models/cartProduct.js')

const getCartProducts = async (req,res)=>{
    try {
        res.send(await products.find());
    } catch (error) {
        console.log(error);
    }
}

module.exports = getCartProducts;