const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import and use your route files here
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

app.use('/users', usersRoute);
app.use('/products', productsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});