'use strict';

/**
 * @ngdoc overview
 * @name isonadeApp
 * @description
 * # isonadeApp
 *
 * Main module of the application.
 */
angular
  .module('isonadeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/channel', {
        templateUrl: 'views/channel.html',
        controller: 'ChannelCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
