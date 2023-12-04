const cartProduct = require('../models/cartProduct.js')

const addproucttocart = async (req,res)=>{
    const cartProductData = await req.body;
    const {productID} = cartProductData;
    try {
        let product = await cartProduct.findOne({productID:productID});
        if(product == null){
            await cartProduct.create(cartProductData);
            res.send("item added!");
        }else{
            let prevQuantity = product.quantity;
            await cartProduct.updateOne({productID:productID},{quantity:prevQuantity+1});
            res.send("item updated!");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = addproucttocart;