const server = require('./server.js');
const express = require('express');
const postRoutes = require('./posts/postsRouter');


server.use(express.json());
server.use('/api/posts', postRoutes);

server.use('/', (req,res) => {
    res.status(200).send('<h2>welcome to posts</h2>');
})

server.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});