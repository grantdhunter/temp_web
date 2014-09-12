function projectsCtrl($scope, $routeParams, githubService) {

    githubService.query({
        user: 'grantdhunter'
    }, function (projects) {
        $scope.githubProjects = projects;
    });



    $scope.projects = [{
        title: 'SilentZone',
        link: 'http://silentzone.ca',
        description: 'Android app that automatically changes ringtone settings based on location. Go to <a href="http://silentzone.ca/"> silentzone.ca</a> for the full scoop, or if you want to download it, head to the <a href="https://play.google.com/store/apps/details?id=ca.silentzone.silentzone">google play store</a>.'
    }, {
        title: 'Webpage Under Contruction',
        link: 'http://underconstruction.grant-hunter.ca',
        description: 'A silly little static page served up by an express.js server. It uses bootstrap i386 to add some MS-DOS retro flavoring. My favorite part is the page loading animation.'
    }, {
        title: 'EventFinder',
        link: 'https://github.com/grantdhunter/eventFinder',
        description: 'This is a javaScript file that ca be used as a node module. Given an event URL it finds and returns other events from the same domain. To determine whether a URL is an event link it finds the Levenshtein distance between the given link and the URL. The shorter the distance the larger the odds are that it is an event link.'
    }];

}