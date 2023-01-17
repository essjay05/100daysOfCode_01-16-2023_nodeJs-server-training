const express = require('express')

const router = express.Router()

// Routes

// Note paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down
router.get('/add-product', (req,res,next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
})

// can use router.get, router.post, router.put, etc. to limit actions to filter
router.post('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router