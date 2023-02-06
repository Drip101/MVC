const router = require('express').Router()
const withAuth =require('../../utils/auth')
const {Post, User, Comment} = require('../../models')

router.post('/', withAuth, function(req, res) {
    const body = req.body
    Post.create({...body, userId: req.session.userId})
    .then(newPost=>{res.json(newPost)})
    .catch(err =>{res.status(500).json(err)})
})


router.put('/:id', withAuth, function(req, res) {
    Post.update(req.body, {
        where:{
            id: req.params.id
        }
    })
    .then(updatePost=>{
        if(updatedRows > 0){
            res.status(200).end()
        }
        else{
            res.status(404).end()
        }
    }).catch(err =>{res.status(500).json(err)})
    
})

router.delete('/:id', function(req, res) {
    Post.update(req.body, {
        where:{
            id: req.params.id
        }
    })
    .then(updatePost=>{
        if(updatedRows > 0){
            res.status(200).end()
        }
        else{
            res.status(404).end()
        }
    }).catch(err =>{res.status(500).json(err)})})

    module.exports = router;