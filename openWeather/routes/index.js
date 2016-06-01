var express = require('express'),
    router = express.Router(),
    validation=require("../validation")(),
    services=require("../services")();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', validation.cityValidation,services.getWeatherData);

module.exports = router;
