var express = require('express');
var github = require('github');
var http = require('http');
var router = express.Router();

router.get('/partials/:name', function (req, res) {
    res.render('partials/' + req.params.name);
});

router.get('/api/github/:user', function (req, res) {
    var github = new GitHubApi({
        // required
        version: "3.0.0",
        // optional
        debug: true,
        protocol: "https",
        host: "github.com",
        pathPrefix: "/api/v3", // for some GHEs
        timeout: 5000
    });

    github.repos.getFromUser({
        user: req.params.user
    }, function (err, data) {
        console.log(data);
        res.send(data)
    });
});

/* GET home page. */
router.get('*', function (req, res) {
    res.render('index');
});
module.exports = router;