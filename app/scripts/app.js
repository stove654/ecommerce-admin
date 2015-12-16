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
    'angular-loading-bar',
    'cfp.loadingBar',
    'toaster',
    'angular-jwt'
  ])

  .run(function ($rootScope, $state, $location, SessionService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
      var shouldLogin = toState.data !== undefined
        && toState.data.requireLogin
        && !SessionService.isToken().isLoggedIn;

      // NOT authenticated - wants any private stuff
      if (shouldLogin) {
        $state.go('login');
        event.preventDefault();
        return;
      }

      // authenticated (previously) comming not to root main
      if (SessionService.isToken().isLoggedIn) {
        var shouldGoToMain = fromState.name === ''
          && toState.name !== 'main.category';
        return;
      }


    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

      .state('login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: 'LoginCtrl'
      })
      .state('main', {
        url: "/main",
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        abstract: true,
        data: {requireLogin: true}
      })
      .state('main.dashboard', {
        url: "/dashboard",
        templateUrl: "views/states/dashboard.html",
        data: {requireLogin: true}
      })
      .state('main.category', {
        url: "/category",
        templateUrl: "views/states/category.html",
        controller: 'CategoryCtrl',
        data: {requireLogin: true}
      })
      .state('main.categoryDetail', {
        url: "/category/:id",
        templateUrl: "views/states/category_detail.html",
        controller: 'CategoryDetailCtrl',
        data: {requireLogin: true}
      })


    $urlRouterProvider.otherwise("/login");

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = $httpProvider.defaults.headers.post['Content-Type'];

  })
  .controller('AppCtrl', function ($rootScope, localStorageService) {
    $rootScope.currentUser = localStorageService.get('sCurrentUser');
    console.log($rootScope.currentUser)
  });


