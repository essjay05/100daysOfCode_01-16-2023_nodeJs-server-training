const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

app.engine('hbs', expressHbs())
app.set('view engine', 'hbs')
app.set('views', 'views')

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
  res.status(404).render('page-not-found', { pageTitle: '404 Page Not Found'})
})

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})