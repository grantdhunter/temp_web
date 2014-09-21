var express = require('express');
var GitHubApi = require('github');
var http = require('http');
var router = express.Router();
var githubServices = require('../services/githubService.js');
var Config = require('config-js');

var config = new Config('./config.js');

router.get('/partials/:name', function (req, res) {
    res.render('partials/' + req.params.name);
});

router.get('/api/github/:user', function (req, res) {
   res.send(githubServices.getData());

});

/* GET home page. */
router.get('*', function (req, res) {
    console.log(config.get('api.googleAnalytics'));
    res.render('index',{title: 'Grant-Hunter.ca', googleAnalyticsApi: config.get('api.googleAnalytics')});
});
module.exports = router;