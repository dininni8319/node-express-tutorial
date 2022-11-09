
const getAllTasks = (req, res) => {
  res.send('get all the tasks')
}

const createTask = (req, res) => {
  res.json(req.body)
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