'use strict';

/**
 * @ngdoc overview
 * @name quikiePrototypeAdminApp
 * @description
 * # quikiePrototypeAdminApp
 *
 * Main module of the application.
 */
angular
  .module('quikiePrototypeAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'LocalStorageModule',
    'angular-loading-bar'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

      .state('login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: 'LoginCtrl'
      })


    $urlRouterProvider.otherwise("/login");

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = $httpProvider.defaults.headers.post['Content-Type'];

  })

