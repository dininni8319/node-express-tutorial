const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  })

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create({
      name: req.body.name,
      completed: req.body.completed,
    })
    res.status(201).json(task)
})

const getTask = asyncWrapper(async (req, res) => {

  const {id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  
  if (!task) {
    return res.status(404).json({msg: `No task with id: ${taskID}`})
  }

  res.status(200).json({ task });
})

const updateTask = asyncWrapper(async (req, res) => {

  const { id:taskId } = req.params;
  const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
    new: true, 
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({msg: `No task with id: ${taskID}`});
  }
  res.status(200).json({ task });
  
  res.json(res.json({id: req.params.id}));
})

const deleteTask = asyncWrapper(async (req, res) => {
 
    const {id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`});
    }

    res.status(200).json({msg: `The task was deleted with id: ${taskID}`});
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}