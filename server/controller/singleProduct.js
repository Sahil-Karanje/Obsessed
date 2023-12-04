const products = require('../models/products.js')

const singleProduct = async (req,res)=>{
    const productId = req.params.id;
    try {
        res.send(await products.findOne({_id:productId}));
    } catch (error) {
        console.log(error);
    }
}

module.exports = singleProduct;