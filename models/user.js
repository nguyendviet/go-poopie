const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: false,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true,
  },
  passwordSalt: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
