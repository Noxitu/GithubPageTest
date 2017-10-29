
const express = require('express')
const app = express()

const fs = require('fs')
const credentials = {
    key: fs.readFileSync('..\\Keys\\ggrz_key.pem'), 
    cert: fs.readFileSync('..\\Keys\\ggrz_cert.pem')
}


app.use('/test.txt', (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://Noxitu.github.io");
  next()
})

app.use(express.static('.'))

const https = require('https')
const server = https.createServer(credentials, app)

server.listen(443, function () {
  console.log('Example app listening on port 443!')
})