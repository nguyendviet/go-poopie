const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/login",
  {
    useMongoClient: true
  }
);

const loginSeed = [
  {
    lastName: 'Doe'
    password: 'xxxxxxx'
  }
];

const signupSeed = [
  {
    firstName: 'John'
    lastName: 'Doe'
    password: 'yyyyyyy'
  },
  {
    firstName: 'Jane'
    lastName: 'Doe'
    password: 'xxxxxxx'
  }
];

db.newUser
  .remove({})
  .then(() => db.newUser.collection.insertMany(loginSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
