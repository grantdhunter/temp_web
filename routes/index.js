var express = require('express');
var GitHubApi = require('github');
var http = require('http');
var router = express.Router();
var githubServices = require('../services/githubService.js');

router.get('/partials/:name', function (req, res) {
    res.render('partials/' + req.params.name);
});

router.get('/api/github/:user', function (req, res) {
   res.send(githubServices.getData());

});

/* GET home page. */
router.get('*', function (req, res) {
    res.render('index');
});
module.exports = router;