const mongoose = require('mongoose');

//the model is the rapresentation for the collection
const TaskSchema = new mongoose.Schema({
   name:  String,
   completed: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema);