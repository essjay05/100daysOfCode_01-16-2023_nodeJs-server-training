
const fs = require('fs')

const requestHandler = (req, res) => {
  const { url, method } = {...req}
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`<html>`)
    res.write(`<head><title>Enter Message</title></head>`)
    res.write(`<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>`)
    res.write(`</html>`)
    return res.end()
  }
  if (url === '/message' && method ==='POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody)
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(`<html>`)
  res.write(`<head><title>My First Page</title></head>`)
  res.write(`<body><h1>Hello from My Node.js Server!</h1></body>`)
  res.write(`</html>`)
  res.end()
}

module.exports = requestHandler;

// Below is an example if you were exporting multiple keys from this file.
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }
// Alternative way to export multiple keys form a file:
// module.exports.handler = requestHandler
// module.exports.someText = 'Some hard coded text'