const router = require('express').Router()
const withAuth =require('../../utils/auth')
const {Comment} = require('../../models')

router.post('/', withAuth, function(req, res) {
    const body = req.body
    Comment.create({...body, userId: req.session.userId})
    .then(newComment=>{res.json(newComment)})
    .catch(err =>{res.status(500).json(err)})
})

module.exports = router;