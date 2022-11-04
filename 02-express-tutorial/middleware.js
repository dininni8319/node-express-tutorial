const express = require('express');
const app = express();
const logger = require('./logger-middleware');
const authorize = require('./authorize');
const morgan = require('morgan');

// In the middle we can stack the middleware
// order is important, if you use the use methos after a get method 
// it won't apply it

//the path will aplly it to the paths that are the same

// 1. use vs route
// 2. options - our own / express / third party 

// app.use([logger, authorize]);
// app.use(express.static('./public'));

// morgan
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  
  res.send('Home');
});

app.get('/api/about', (req, res) => {
  res.send('About');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.listen(5000, () => {
  console.log('Server is listening on the port 5000...');
});