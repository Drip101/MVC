var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello Sir')
})

    var express = require('express')
var app = express()

app.all('/', function(req, res) {
    console.log('Hello Sir')
    next()   // Pass the control to the next handler
})

var express = require('express')
var app = express()

app.post('/', function(req, res) {
    res.send('Hello Sir'))