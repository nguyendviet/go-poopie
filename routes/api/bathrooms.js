const router = require('express').Router();
const bathroomController = require('../../controllers/bathroomController');

// Matches with "/api/bathrooms"
router
.route('/')
.get(bathroomController.findAll)

module.exports = router;