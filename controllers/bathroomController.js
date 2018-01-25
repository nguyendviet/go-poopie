const axios = require('axios');
const db = require('../models');

// findAll searches for all nearby bathrooms
module.exports = {
    findAll: (req, res) => {
        db.Bathroom
        .find(req.query)
        .then(dbBathroom => res.json(dbBathroom))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        const bathroom = {
            name: req.body.name,
            location: req.body.location
        };

        db.Bathroom
        .create(bathroom)
        .then(dbBathroom => res.json(dbBathroom))
        .catch(err => res.status(422).json(err));
    }
};