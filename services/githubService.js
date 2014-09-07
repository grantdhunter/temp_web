var GitHubApi = require('github');

var githubService = {};
var gitData = {};

githubService.setInterval = function (interval) {
    setInterval(function () {
        var github = new GitHubApi({
            // required
            version: "3.0.0",
            // optional
            debug: true,
            protocol: "https",
            host: "api.github.com",
            // pathPrefix: "/api/v3", // for some GHEs
            timeout: 5000
        });

        github.repos.getFromUser({
            user: 'grantdhunter'
        }, function (err, data) {
            gitData = data;
        });

    }, interval);
}

githubService.getData = function() {
    return gitData;
}

module.exports = githubService;