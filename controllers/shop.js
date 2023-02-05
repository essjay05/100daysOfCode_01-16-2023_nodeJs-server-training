const Product = require('../models/product')

exports.getIndex = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products, 
      path: '/',
      pageTitle: 'Shop Products List'
    })
  })
}

exports.getProductList = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products, 
      path: '/products',
      pageTitle: 'Product List'
    })
  })
}

exports.getCart = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/cart', {
      prods: products, 
      path: '/cart',
      pageTitle: 'Cart'
    })
  })
}

exports.getOrders = (req,res,next) => {
  // Product.fetchAll(products => {
    res.render('shop/orders', {
      // prods: products, 
      path: '/orders',
      pageTitle: 'Your Orders'
    })
  // })
}

exports.getCheckout = (req,res,next) => {
  Product.fetchAll(products => {
      res.render('shop/checkout', {
      prods: products, 
      path: '/checkout',
      pageTitle: 'Checkout'
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