const products = require('../models/cartProduct.js')

const deleteData = async (req,res)=>{
    const id = await req.params.id;
    try {
        await products.deleteOne({"productID":id})
        res.send("deleted");
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteData;