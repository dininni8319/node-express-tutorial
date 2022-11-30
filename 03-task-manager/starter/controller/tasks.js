const Task = require('../models/Task')
const getAllTasks = (req, res) => {
  res.send('get all the tasks')
}

const createTask = async (req, res) => {
  
  const task = await Task.create({
    name: req.body.name,
    completed: req.body.completed,
  })
   res.status(201).json(task)
  // try {
  //   res.json('tasks created!')
  // } catch (error) {
    
  // }
  // res.json(req.body)
}

const getTask = (req, res) => {
  res.json({id: req.params.id})
}

const updateTask = (req, res) => {
  res.json(res.json({id: req.params.id}))
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}