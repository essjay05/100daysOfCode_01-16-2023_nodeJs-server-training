const path = require('path')

const express = require('express')

// const rootDir = require('../util/path')

// controllers
const adminController = require('../controllers/admin')
const router = express.Router()

// Routes

// Note: paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down

// Note: can use router.get, router.post, router.put, etc. to limit actions to filter



// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)

// /admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/products/:productId => GET 1 Product Detail
router.get('/products/:productId', adminController.getProductDetail)

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct)

// /admin/edit-product => POST
router.post('/edit-product/:productId', adminController.postEditProduct)

// /admin/delete-product => DELETE
router.delete('/delete-product', adminController.deleteProduct)

module.exports = router;