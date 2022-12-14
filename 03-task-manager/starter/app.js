const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const  connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
require('dotenv').config();

// middleware 
app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new tasks
// app.get('/api/v1/tasks/:id')    - get a single tasks
// app.patch('/api/v1/tasks')      - update a tasks
// app.delete('/api/v1/tasks/:id') - delete a tasks

const Port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log(`Server is listening on the port ${Port}...`);
    })

  } catch (error) {
    console.log(error);  
  }
}

start();