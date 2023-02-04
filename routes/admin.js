const path = require('path')

const express = require('express')

// const rootDir = require('../util/path')

// controllers
const productsController = require('../controllers/products')
const adminController = require('../controllers/admin')
const router = express.Router()

// Routes

// Note: paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down

// Note: can use router.get, router.post, router.put, etc. to limit actions to filter



// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct)

// /admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/edit-product => GET
router.get('/edit-product', adminController.getEditProduct)

// /admin/edit-product => PUT
router.put('/edit-product', adminController.putEditProduct)

module.exports = router;