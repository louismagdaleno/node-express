const express = require('express');
const dirPath = require('./util/path');
const path = require('path');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(userRouter);

// 404
app.use((req,res,next) => {
    res.status(404).sendFile(path.join('dirPath', 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});