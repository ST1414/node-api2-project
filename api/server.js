// implement your server here
// require your posts router and connect it here

// ----- Imports -----
const express = require('express');
const postsRouter = require('./posts/posts-router'); // Import Router

// ----- Instance of Express Server -----
const server = express(); // Instance of the express server

// ----- Tell server how to parse JSON -----
server.use(express.json()); // Tell the server how to parse JSON

// ----- Tell server to use router -----
server.use('/api/posts', postsRouter);

// ----- Home route -----
server.get('/', (req,res) => {
    res.send(`
    <h2> Server is up and you can see me!</h2>
    `)
});

module.exports = server;