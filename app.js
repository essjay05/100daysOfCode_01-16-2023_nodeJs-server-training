const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// middleware
app.use(bodyParser.urlencoded({ extended: false }))


// Routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// 404 catchall
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})