const router = require('express').Router();
const bathroomController = require('../../controllers/bathroomController');

// Matches with "/api/bathrooms"
router
.route('/')
.get(bathroomController.findAll)
.post(bathroomController.create);

module.exports = router;