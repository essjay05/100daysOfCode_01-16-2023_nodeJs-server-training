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
  res.render('admin/edit-product', { 
    pageTitle: 'Add Product Page', 
    path: '/admin/add-product',
    editing: false
  })
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const description = req.body.description
  const price = req.body.price

  const product = new Product(null, title, imageUrl, description, price)
  product.save()  
  res.redirect('/')
}

exports.getEditProduct = (req,res,next) => {
  const editMode = req.query.edit
  if (!editMode) {
    return res.redirect('/')
  }

  const prodId = req.params.productId
  Product.findById(prodId, product => {
    if (!product) {
      console.log('Error: Product not found!')
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      product: product, 
      path: `/admin/edit-product`,
      pageTitle: `Edit Product: ${product.title}`,
      editing: editMode
    })
  })
}

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId

  const updatedTitle = req.body.title
  const updatedImageUrl = req.body.imageUrl
  const updatedDescription = req.body.description
  const updatedPrice = req.body.price
  
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDescription,
    updatedPrice
  )
  updatedProduct.save()  
  console.log(req.body)
  res.redirect('/admin/products')
}

exports.deleteProduct = (req, res, next) => {
  res.redirect('/admin/products')
}