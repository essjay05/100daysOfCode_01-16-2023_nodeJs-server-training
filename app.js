const express = require('express')

const app = express()

// middleware
app.use('/', (req, res, next) => {
  console.log('This always runs!')
  // if you are having middleware with a next, have it go ABOVE the routes
  next()
})

// Note paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down
app.use('/add-product', (req,res,next) => {
  console.log('In the middleware')
  res.send('<h1>This is the Add Product Page</h1>')
  // don't do next in routes middleware
})

app.use('/', (req,res,next) => {
  console.log('In the middleware')
  res.send('<h1>Hello from express!</h1>')
})

app.listen(3000)