const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello Sir')
})


app.all('/', function(req, res) {
    console.log('Hello Sir')
    next()   // Pass the control to the next handler
})

app.post('/', function(req, res) {
    res.send('Hello Sir'))

    module.exports = router;