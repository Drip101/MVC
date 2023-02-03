const router = require('express').Router()
const withAuth =require('../../utils/auth')
const {Post, User, Comment} = require('../../models')

router.post('/', withAuth, function(req, res) {
    Post.create()
})


router.put('/:id', function(req, res) {
    console.log('Hello Sir')
    next()   // Pass the control to the next handler
})

app.delete('/:id', function(req, res) {
    res.send('Hello Sir'))

    module.exports = router;