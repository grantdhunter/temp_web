var express = require('express');
var router = express.Router();

router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});

/* GET home page. */
router.get('*', function(req, res) {
  res.render('index');
});
module.exports = router;
