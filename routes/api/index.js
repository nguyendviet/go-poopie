const router = require('express').Router();
const userRoutes = require('./users');
const bathroomRoutes = require('./bathrooms');

// users routes
router.use('/users', userRoutes);

// bathrooms routes
router.use('/bathrooms', bathroomRoutes);

module.exports = router;