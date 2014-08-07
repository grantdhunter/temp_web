'use strict';


// Declare app level module which depends on filters, and services
var temp_web = angular.module('temp_web', ['ngRoute']);


$(startApp)

function startApp() {


    temp_web.config(function($provide, $routeProvider) {

        //setup routes
        $routeProvider.when('/', {templateUrl: 'partials/musings', controller:'musingsCtrl'});
        $routeProvider.when('/musings', {templateUrl: 'partials/musings', controller:'musingsCtrl'});
    });

    angular.bootstrap(document,['temp_web']);
}