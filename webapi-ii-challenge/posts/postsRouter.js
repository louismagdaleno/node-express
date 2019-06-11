const express = require('express');
const db = require('../data/db.js');
const router = express.Router();

router.get('/', async (req,res) => {
   try{
       const posts = await db.find();
       res.status(200).json(posts);
    
   } catch(error){
       console.log(error);
       res.status(500).json({
           message: 'Error retrieving posts'
       })
   }
});

router.get('/:id', async (req,res) => {
    try {
        const post = await db.findById(req.params.id);
        res.status(200).json(post);
    } catch (error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving post'
        })
    }
    
    db.findById(req.params.id)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(500).send("An error has occured");
    });
});


module.exports = router;