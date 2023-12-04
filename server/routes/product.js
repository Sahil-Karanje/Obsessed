const express = require('express')
const router = express.Router();
const addproucttocart = require('../controller/addproducttocart.js');
const getProducts = require('../controller/getProducts.js')
const getCartProducts = require('../controller/getCartProducts.js')
const singleProduct = require('../controller/singleProduct.js')
const deleteData = require('../controller/deleteData.js')

router.post('/addtocart',addproucttocart)
router.get('/cart',getCartProducts)
router.get('',getProducts)
router.get('/:id',singleProduct)
router.delete('/deleteCartData/:id',deleteData)

module.exports = router;