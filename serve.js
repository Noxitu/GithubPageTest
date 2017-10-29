
const express = require('express')
const app = express()

app.use('/test.txt', (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://Noxitu.github.io");
  next()
})

app.use(express.static('.'))

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})