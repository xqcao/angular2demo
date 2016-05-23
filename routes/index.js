var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'webapp-Angular2',
    msg: 'Angular2 Demo page',
  });
});

module.exports = router;
