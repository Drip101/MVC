const router = require('express').Router()


router.post('/', function(req, res) {
    res.send('Hello Sir')
})


router.put('/:id', function(req, res) {
    console.log('Hello Sir')
    next()   // Pass the control to the next handler
})

app.delete('/:id', function(req, res) {
    res.send('Hello Sir'))

    module.exports = router;