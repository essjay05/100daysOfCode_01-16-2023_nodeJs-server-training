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

exports.getProductDetail = (req,res,next) => {
  const prodId = req.params.productId

  Product.findById(prodId, product => {
    res.render('admin/product', {
      product: product, 
      path: `/admin/products`,
      pageTitle: `Product: ${product.title}`
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
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const description = req.body.description
  const price = req.body.price

  const product = new Product(title, imageUrl, description, price)
  product.save()  
  res.redirect('/')
}

exports.getEditProduct = (req,res,next) => {
  res.render('admin/edit-product', { 
    pageTitle: 'Edit Product Page', 
    path: '/admin/edit-product'
  })
}

exports.putEditProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()  
  console.log(req.body)
  res.redirect('/admin/products')
}

exports.deleteProduct = (req, res, next) => {
  res.redirect('/admin/products')
}