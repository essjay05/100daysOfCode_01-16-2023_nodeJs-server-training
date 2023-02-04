const path = require('path')

const express = require('express')

// const rootDir = require('../util/path')

// controllers
const productsController = require('../controllers/products')
const router = express.Router()



// Routes

// Note: paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down

// Note: can use router.get, router.post, router.put, etc. to limit actions to filter

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct)


// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct)

module.exports = router;