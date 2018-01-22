const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currUserSchema = new Schema({
  lastName: {type: String, required: true},
  password: {type: String, required: true}
});

const currUser = mongoose.mode('Login', currUserSchema);
module.export = currUser;
