const express = require('express')

const app = express()

// middleware
// Note paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down
app.use('/add-product', (req,res,next) => {
  console.log('In the middleware')
  res.send('<h1>This is the Add Product Page</h1>')
})

app.use('/', (req,res,next) => {
  console.log('In the middleware')
  res.send('<h1>Hello from express!</h1>')
})

app.listen(3000)