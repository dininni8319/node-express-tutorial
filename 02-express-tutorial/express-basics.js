const express = require('express');
const app = express();

// first param is the 
app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('Home Page!')
})

app.get('/about', (req, res) => {
  console.log('user hit the about page');
  res.status(200).send('About Page!')
})

app.all('*', (req, res) => {
  console.log('user hit the about page');
  res.status(404).send(`<h1 style='color:red; font-size: 40px'>Resource not Found</h1>`)
})

app.listen( 5000, () => {
  console.log('server listening on the port 5000...');
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen


