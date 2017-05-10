var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/goods', function(req, res, next) {
  res.render('category', { title: 'Express' });
});

module.exports = router;
