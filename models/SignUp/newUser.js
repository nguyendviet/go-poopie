const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  date: {type: Date, default: Date.now}
});

const newUser = mongoose.mode("newUser", newUserSchema);
module.export = newUser;
