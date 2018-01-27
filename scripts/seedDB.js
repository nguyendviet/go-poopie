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
    email: 'jane.doe@gopoopie.com'
    password: 'xxxxxxx'
  }
];

const newUserSeed = [
  {
    firstName: 'John'
    lastName: 'Doe'
    email: 'john.doe@gopoopie.com'
    password: 'yyyyyyy'
  },
  {
    firstName: 'Jane'
    lastName: 'Doe'
    email: 'jane.doe@gopoopie.com'
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
