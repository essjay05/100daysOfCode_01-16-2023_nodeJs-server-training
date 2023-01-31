const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'pug')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/admin', adminData.routes)
app.use(shopRoutes)

// 404 catchall
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})