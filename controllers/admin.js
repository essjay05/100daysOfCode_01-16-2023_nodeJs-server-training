const Product = require('../models/product')

exports.getProducts = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products, 
      path: '/admin/products',
      pageTitle: 'Admin Product List', 
      hasProducts: products.length > 0,
      shopActive: true,
      productCSS: true
    })
  })
}

exports.getEditProduct = (req,res,next) => {
  res.render('admin/edit-product', { 
    pageTitle: 'Edit Product Page', 
    path: '/admin/edit-product',
    addProductsActive: true,
    productCSS: true,
    formsCSS: true
  })
}

exports.putEditProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()  
  console.log(req.body)
  res.redirect('/admin/products')
}