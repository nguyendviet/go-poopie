const router = require('express').Router();
const userController = require('../../controllers/userController');

var User = require('/models/user');

router.route('/signup').post(function(req, res){
  var user = new User(req.body);
  user.save()
  .then(user =>{
    res.json('User Successfully Added');
  })
  .catch(err =>{
    res.status(400).send('unable to save to database');
  });
});

router.route('/login').post(function(req, res){
  var user = new User(req.body);
  user.get(userController.findById)
  .then(user=>{
    res.json('User Successfully Logged In');
  })
  .catch(err =>{
    res.status(400).send('unable to get from database');
  });
});

// Matches with "/api/users"
router.route('/')
.get(userController.findAll)
.post(userController.create);

// Matches with "/api/users/:id"
router
.route('/:id')
.get(userController.findById)
.put(userController.update)
.delete(userController.remove);

module.exports = router;
//
// //Code from Login router
// //##############################################################################
// var express = require('express');
// var router = express.Router();
//
// var User = require('/models/currUser');
//
// /* GET users listing. */
// router.get('/login', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
//
// router.route('/:id')
//   .get()
//   .put()
//   .delete();
// module.exports = router;
