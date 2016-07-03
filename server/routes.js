var controller = require('./controllers');
var router = require('express').Router();

var allowCrossDomain = function(req, res, next) {
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    res.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("access-control-max-age", 10);
    res.header("Content-Type", 'application/json');  
    res.status(200);
  } else {
    next();
  }
};

router.use(allowCrossDomain);

//Connect controller methods to their corresponding routes

router.get('/messages', controller.messages.get);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);


module.exports = router;

