const port = 3000

const bodyParse = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParse.urlencoded({ extended: true}))
server.use(bodyParse.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BackEnd is Runnig on port ${port}.`)
})

module.exports = server