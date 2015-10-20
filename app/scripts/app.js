'use strict';

/**
 * @ngdoc overview
 * @name quentinApp
 * @description
 * # quentinApp
 *
 * Main module of the application.
 */
angular
  .module('quentinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/spells', {
        templateUrl: 'views/spell.html',
        controller: 'MainCtrl',
        controllerAs: 'spell'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
