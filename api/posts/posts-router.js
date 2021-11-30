// implement your posts router here
const express = require('express');
const router = express.Router();
const Post = require('./posts-model');

// ----- GET ALL POSTS -----
router.get('/', (req, res) => {
    Post.find()
        .then( response => {
            // Testing the catch
            // throw new Error("This will be stored in the catch's, err.message"); 
            console.log('/: ', response);
            res.status(200).json(response);
        })
        .catch( err => {
            console.log('Error: ', err)
            res.status(500).json({
                // Testing the catch
                // message: err.message
                message: 'The posts information could not be retrieved'
            })
        })
})

// ----- GET POST BY ID -----
router.get('/:id')
// ----- CREATE NEW POST -----


// ----- UPDATE POST BY ID -----


// ----- DELETE POST BY ID -----


// ----- GET POST COMMENT BY ID -----




module.exports = router;