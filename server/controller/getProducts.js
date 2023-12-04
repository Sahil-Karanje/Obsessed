const products = require('../models/products.js')

const getProducts = async (req,res)=>{
    try {
        res.send(await products.find());
    } catch (error) {
        console.log(error);
    }
}

module.exports = getProducts;