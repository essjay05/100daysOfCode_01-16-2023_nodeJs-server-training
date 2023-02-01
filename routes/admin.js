const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

// Routes

// Note: paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down

// Note: can use router.get, router.post, router.put, etc. to limit actions to filter

// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
  res.render('add-product', { pageTitle: 'Add Product Page', path: '/admin/add-product' })
})


// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  console.log(req.body)
  res.redirect('/')
})

exports.routes = router;
exports.products = products;