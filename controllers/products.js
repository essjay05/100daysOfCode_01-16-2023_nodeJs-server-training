const products = []

exports.getProducts = (req,res,next) => {
  res.render('shop', {
    prods: products, 
    path: '/',
    pageTitle: 'Shop', 
    hasProducts: products.length > 0,
    shopActive: true,
    productCSS: true
  })
}

exports.getAddProduct = (req,res,next) => {
  res.render('add-product', { 
    pageTitle: 'Add Product Page', 
    path: '/admin/add-product',
    addProductsActive: true,
    productCSS: true,
    formsCSS: true
  })
}

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title })
  console.log(req.body)
  res.redirect('/')
}