'use strict';


// Declare app level module which depends on filters, and services
var webApp = angular.module('webApp', ['ngRoute']);


$(startApp)

function startApp() {


    webApp.config(function ($provide, $routeProvider, $locationProvider) {

        //setup routes
        $routeProvider.when('/', {
            templateUrl: 'partials/musings',
            controller: 'musingsCtrl'
        });
        $routeProvider.when('/work', {
            templateUrl: 'partials/work',
            controller: 'workCtrl'
        });
        $routeProvider.when('/projects', {
            templateUrl: 'partials/projects',
            controller: 'projectsCtrl'
        });
        $routeProvider.when('/about', {
            templateUrl: 'partials/about',
            controller: 'aboutCtrl'
        });
         $routeProvider.otherwise({
            redirectTo: '/'
         });
        
        $locationProvider.html5Mode(true);
    });
    
    
    
    angular.bootstrap(document, ['webApp']);
}