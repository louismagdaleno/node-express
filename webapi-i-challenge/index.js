// import express
const express = require('express');

// create server
const app = express();

// use bodyparser
app.use(express.json());

// endpoints

app.post('/api/users', (req,res) => {

})

app.get('/api/users', (req,res) => {

})

app.get('/api/users/:id', (req,res) => {

})

app.delete('/api/users/:id', (req,res) => {

})

app.put('/api/users/:id', (req,res) => [

])

// run server
app.listen(9000, () => {
    console.log('Server is up on port 9000.');
});