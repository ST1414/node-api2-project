// implement your server here
// require your posts router and connect it here
const express = require('express');
const postsRouter = require('./posts/posts-router');

const server = express(); // Instance of the express server

server.use(express.json()); // Tell the server how to parse JSON

server.get('/', (req,res) => {
    res.send(`
    <h2> Server is up and you can see me!</h2>
    `)
});

module.exports = server;