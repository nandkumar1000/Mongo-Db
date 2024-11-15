const mongoose = require('mongoose')
const employeeschema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  password: Number
})
module.exports = mongoose.model('employee', employeeschema)