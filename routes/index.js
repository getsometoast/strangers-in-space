var express = require('express');
var router = express.Router();
var Firebase = require(‘firebase’);
var FirebaseRef = new Firebase("https://strangers-in-space.firebaseio.com/");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
