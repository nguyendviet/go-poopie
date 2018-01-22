var express = require('express');
var router = express.Router();

var User = require('/models/newUser');

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

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
