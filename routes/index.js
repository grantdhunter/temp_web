var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/partials/:name', function(req, res) {
     console.log('HERE:::\n'+ req.path);
  res.render('partials/' + req.params.name);
});

module.exports = router;
