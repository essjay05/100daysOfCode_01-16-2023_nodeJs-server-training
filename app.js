const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()

// middleware
app.use('/', (req, res, next) => {
  console.log('This always runs!')
  // if you are having middleware with a next, have it go ABOVE the routes
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))

// Routes

// Note paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down
app.use('/add-product', (req,res,next) => {
  console.log('In the middleware')
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
  // don't do next in routes middleware
})

// can use app.get, app.post, app.put, etc. to limit actions to filter
app.post('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req,res,next) => {
  console.log('In the middleware')
  res.send('<h1>Hello from express!</h1>')
})

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})