const express = require('express');
const dirPath = require('../util/path');
const path = require('path');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).send('<h1>Hello from router</h1>');
});

router.get('/users', (req,res,next) => {
    res.status(200).sendFile(path.join(dirPath, 'views', 'users.html'));
});

module.exports = router;