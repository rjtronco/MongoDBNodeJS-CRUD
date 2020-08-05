const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


//get all post
router.get('/', async(req,res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


//submit post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });


    try {
       const savedPost = await post.save();
       res.json(savedPost); 
    }catch(err){
        res.json({message:err});
    }
});


//get specific post
router.get('/:postId', async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
    
});

//update specific record
router.patch('/:postId', async (req,res) =>{
    try{
        const updated =  await Post.updateOne(
            {_id: req.params.postID}, 
            { $set: {title:res.body.title} }
        );
        res.json(updated)
    }catch(err){
        res.json({message:err});
    }
    
});


//delete specific record
router.delete('/:postId', async (req,res) =>{
    try{
        const removed =  await Post.remove({_id: req.params.postID});
        res.json(removed)
    }catch(err){
        res.json({message:err});
    }
    
});



module.exports = router;

