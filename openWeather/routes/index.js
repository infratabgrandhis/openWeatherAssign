var express = require('express'),
    router = express.Router(),
    validation=require("../validation")();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', validation.cityValidation);

module.exports = router;
