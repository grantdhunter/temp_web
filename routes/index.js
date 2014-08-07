var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('index');
});

router.get('/partials/:name', function(req, res) {
    console.log(req);
  res.sendfile('partials/' + req.params.name);
});

module.exports = router;
