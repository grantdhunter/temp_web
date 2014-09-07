var GitHubApi  = require('github');    

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
        console.log(JSON.stringify(data));
    });