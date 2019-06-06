// import express
const express = require('express');
const cors = require('cors');

// create server
const app = express();
const db = require('./data/db.js');

// use bodyparser
app.use(express.json());
app.use(cors());

// endpoints

app.post('/api/users', (req,res) => {
    const user = req.body;
    db.insert(user)
    .then(id => {
        if (!user.name || !user.bio){
            res.status(400).json(' {"errorMessage": "Please provide name and bio for the user."');
        } else {
            res.status(201).json(id);
        }
       
    })
    .catch(err => {
        res.status(500).send(err);
    })

})

app.get('/api/users', (req,res) => {
    db.find()
    .then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(500).json(err);
    })
})

app.get('/api/users/:id', (req,res) => {
    const { id } = req.params;
    db.findById(id)
    .then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json(err);
    })
})

app.delete('/api/users/:id', (req,res) => {
    const { id } = req.params;
    db.remove(id)
    .then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json(err);
    })

})

app.put('/api/users/:id', (req,res) => {
    const { id } = req.params;
    const user = req.body;
    db.update(id, user)
    .then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json(err);
    })
})

// run server
app.listen(9000, () => {
    console.log('Server is up on port 9000.');
});