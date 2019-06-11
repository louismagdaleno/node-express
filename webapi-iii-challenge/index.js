const express = require('express');
const dirPath = require('./util/path');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/users', userRouter);

// 404
app.use((req,res,next) => {
    res.status(404).sendFile(dirPath, 'views', '404.html');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});