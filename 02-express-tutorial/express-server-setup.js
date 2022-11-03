const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware(build in middleware)
// static asset - the server doesn't need to change them, image, css, and js files
// make sure that all your file are in the public folder
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//  adding to static assets
//  SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port: 5000...');
})