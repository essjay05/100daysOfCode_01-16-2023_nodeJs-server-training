const path = require('path')

const express = require('express')

const productsController = require('../controllers/products')
const shopController = require('../controllers/shop')

const router = express.Router()

// /shop/index => GET
router.get('/', shopController.getIndex)

// /shop/product-list => GET
router.get('/products', shopController.getProductList)

// /shop/cart => GET
router.get('/cart', shopController.getCart)

// /shop/checkout => GET
router.get('/checkout', shopController.getCheckout)

// /shop/product-detail => GET
router.get('/products/product-detail', shopController.getProductDetail)

module.exports = router