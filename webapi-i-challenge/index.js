// import express
const express = require('express');

// create server
const app = express();

// use bodyparser
app.use(express.json());

// run server
app.listen(9000, () => {
    console.log('Server is up on port 9000.');
});