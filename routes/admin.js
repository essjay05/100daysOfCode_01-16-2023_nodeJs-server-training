const express = require('express')

const router = express.Router()

// Routes

// Note: paths should have least complex (ie. '/') on bottom as it will filter
// out as it goes down

// Note: can use router.get, router.post, router.put, etc. to limit actions to filter

// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
})


// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router