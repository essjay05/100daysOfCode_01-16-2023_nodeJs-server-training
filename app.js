const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()

const adminRoutes = require('./routes/admin')

// middleware
app.use('/', (req, res, next) => {
  console.log('This always runs!')
  // if you are having middleware with a next, have it go ABOVE the routes
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))


// Routes
app.use(adminRoutes)

app.use('/', (req,res,next) => {
  console.log('In the middleware')
  res.send('<h1>Hello from express!</h1>')
})

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})