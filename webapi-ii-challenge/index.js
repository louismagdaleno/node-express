const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.json());
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});