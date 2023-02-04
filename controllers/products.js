const Product = require('../models/product')

exports.getProducts = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products, 
      path: '/',
      pageTitle: 'Shop', 
      hasProducts: products.length > 0,
      shopActive: true,
      productCSS: true
    })
  })
}

exports.getAddProduct = (req,res,next) => {
  res.render('admin/add-product', { 
    pageTitle: 'Add Product Page', 
    path: '/admin/add-product',
    addProductsActive: true,
    productCSS: true,
    formsCSS: true
  })
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()  
  console.log(req.body)
  res.redirect('/')
}