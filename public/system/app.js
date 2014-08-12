'use strict';


// Declare app level module which depends on filters, and services
var webApp = angular.module('webApp', ['ngRoute']);


$(startApp)

function startApp() {


    webApp.config(function($provide, $routeProvider) {

        //setup routes
        $routeProvider.when('/', {templateUrl: 'partials/index', controller:'appCtrl'});
    });
    angular.bootstrap(document,['webApp']);
}