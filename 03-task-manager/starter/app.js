const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware 
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new tasks
// app.get('/api/v1/tasks/:id')    - get a single tasks
// app.patch('/api/v1/tasks')      - update a tasks
// app.delete('/api/v1/tasks/:id') - delete a tasks

const Port = 5000;

app.listen(Port, () => {
  console.log(`Server is listening on the port ${Port}...`);
})