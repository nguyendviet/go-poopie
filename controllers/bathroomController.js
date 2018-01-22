const axios = require('axios');
const db = require('../models');

// findAll searches for all nearby bathrooms
module.exports = {
    findAll: (req, res) => {
        // find all the bathrooms either from an API or Mongo
        res.send({message: 'need to work on this'})
    }
};
