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
            res.status(200).json(response);
        })
        .catch( err => {
            res.status(500).json({
                // Testing the catch
                // message: err.message
                message: "The posts information could not be retrieved"
            })
        })
})


// ----- GET POST BY ID -----
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (post) {
            res.status(202).json(post)
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist" 
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})


// ----- CREATE NEW POST -----
router.post('/', (req, res) => {

    if (!req.body.title || !req.body.contents) {
        res.status(400).json({ // Bad request
            message: "Please provide title and contents for the post"
        })
    } else { 
        Post.insert(req.body)
        .then( response => {
            res.status(201).json(response); // Created  // ***** ERROR IN TESTING *****
        })
        .catch (err => {
            res.status(500).json({ // Server error
                message: "There was an error while saving the post to the database"
            })
        });
    }

})


// ----- UPDATE POST BY ID -----
router.put('/:id', async (req, res) => {
    try {
        
        if (!req.body.title || !req.body.contents) { 
            res.status(400).json({ // Bad request
                message: "Please provide title and contents for the post"
            })
        } else { 
            const post = await Post.update(req.params.id, req.body);
            if (post) { // Success
                res.status(200).json(post);  // ***** ERROR IN TESTING *****
            } else { // id not found
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                })
            }
        } 

    } catch (err) {
        res.status(500).json({
            message: "The post information could not be modified"
        })
    }
})


// ----- DELETE POST BY ID -----
router.delete('/:id', (req, res) => {
    Post.remove(req.params.id)
        .then(response => {
            if (response > 0) {
                res.status(200).json(response)
            } else {
                res.status(404).json({message: "The post with the specified ID does not exist"})
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "The post could not be removed"
            })
        })
})

// ----- GET POST COMMENT BY ID -----
// throw new Error("This will be stored in the catch's, err.message"); 
// message: err.message



module.exports = router;