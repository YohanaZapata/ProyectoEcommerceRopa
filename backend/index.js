const express = require('express');
const app = express();
const router = require('./routes');
const sequelize = require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});