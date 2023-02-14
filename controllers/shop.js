const Product = require('../models/product')
const Cart = require('../models/cart')

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

exports.getProductDetail = (req,res,next) => {
  const prodId = req.params.productId

  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product, 
      path: `/products`,
      pageTitle: `Product Detail: ${product.title}`
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

exports.postCart = (req,res,next) => {
  const productId = req.body.productId
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price)
  })
  res.redirect('/cart')
}

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price)
    res.redirect('/cart')
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
