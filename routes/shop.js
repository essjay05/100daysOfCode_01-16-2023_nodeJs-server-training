const path = require('path')

const express = require('express')

const shopController = require('../controllers/shop')

const router = express.Router()

// /shop/index => GET
router.get('/', shopController.getIndex)

// /shop/product-list => GET
router.get('/products', shopController.getProductList)

// /shop/cart => GET
router.get('/cart', shopController.getCart)

// /shop/cart => POST
router.post('/cart', shopController.postCart)

// /shop/cart => POST
router.post('/cart', shopController.postCart)

// /shop/cart => GET
router.post('/cart-delete-item', shopController.postCartDeleteProduct)

// /shop/checkout => GET
router.get('/orders', shopController.getOrders)

// /shop/checkout => GET
router.get('/checkout', shopController.getCheckout)

// /shop/product-detail => GET 1 product
router.get('/products/:productId', shopController.getProductDetail)

module.exports = router