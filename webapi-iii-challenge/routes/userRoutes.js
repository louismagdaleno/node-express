const express = require('express');
const dirPath = require('../util/path');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).sendfile(dirPath, 'views', 'users.html');
});

module.exports = router;