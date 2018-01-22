var express = require('express');
var router = express.Router();

var User = require('/models/currUser');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});


router.route('/:id')
  .get()
  .put()
  .delete();
module.exports = router;
