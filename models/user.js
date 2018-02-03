
// this is what the payload on the FE should look like
// {     firstName: 'John',     lastName: 'Smith',     email: 'abc',   }
// this is our router: router.use('/users', userRoutes);



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  // passwordHash: {
  //   type: String,
  //   required: true,
  // },
  // passwordSalt: {
  //   type: String,
  //   required: true,
  // },
  date: {
    type: Date,
    default: Date.now
  }},
 {_id: true});

var User = mongoose.model('User', UserSchema);

module.exports = User;
