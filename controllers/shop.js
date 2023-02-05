const Product = require('../models/product')

exports.getIndex = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products, 
      path: '/',
      pageTitle: 'Shop', 
      hasProducts: products.length > 0,
      shopActive: true,
      productCSS: true
    })
  })
}

exports.getProductList = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products, 
      path: '/products',
      pageTitle: 'Product List', 
      hasProducts: products.length > 0,
      shopActive: true,
      productCSS: true
    })
  })
}

exports.getCart = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/cart', {
      prods: products, 
      path: '/cart',
      pageTitle: 'Cart', 
      hasProducts: products.length > 0,
      shopActive: true,
      productCSS: true
    })
  })
}

exports.getCheckout = (req,res,next) => {
  Product.fetchAll(products => {
      res.render('shop/checkout', {
      prods: products, 
      path: '/checkout',
      pageTitle: 'Checkout', 
      hasProducts: products.length > 0,
      shopActive: true,
      productCSS: true
    })
  })
}

exports.getProductDetail = (req,res,next) => {
  res.render('shop/product-detail/', {
    // prods: products, 
    path: '/product-detail/',
    pageTitle: 'Product detail', 
    // hasProducts: products.length > 0,
    shopActive: true,
    productCSS: true
  })
}