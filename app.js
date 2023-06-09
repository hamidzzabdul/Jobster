const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
// serving static files
app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use(express.static('css'))

module.exports = app