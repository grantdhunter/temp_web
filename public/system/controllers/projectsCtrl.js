function projectsCtrl($scope, $routeParams, apiService) {

    apiService.github('grantdhunter');
    
    
    
    $scope.projects = [{
        title: 'SilentZone',
        link: 'http://silentzone.ca',
        description: 'Android app that automatically changes ringtone settings based on location. Go to <a href="http://silentzone.ca/"> silentzone.ca</a> for the full scoop, or if you want to download it, head to the <a href="https://play.google.com/store/apps/details?id=ca.silentzone.silentzone">google play store</a>.'
    }, {
        title: 'Webpage Under Contruction',
        link: 'http://undercontruction.grant-hunter.ca',
        description: 'A silly little static page served up by an express.js server. It uses bootstrap i386 to add some MS-DOS retro flavoring. My favorite part is the page loading animation.'
    }];

}