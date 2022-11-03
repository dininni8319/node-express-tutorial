const express = require('express');
const app = express();

app.get('/api/', (req, resp) => {
  resp.json()
})

app.listen(5000, () => {
  console.log('Server is listening on the port 5000...');
})