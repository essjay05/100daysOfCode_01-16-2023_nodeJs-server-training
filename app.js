const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Controllers
const errorController = require('./controllers/error')

// Routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// 404 catchall
app.use(errorController.get404Route)

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})