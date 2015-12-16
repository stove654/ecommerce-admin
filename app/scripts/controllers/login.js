'use strict';

/**
 * @ngdoc function
 * @name quikiePrototypeAdminApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the quikiePrototypeAdminApp
 */
angular.module('quikiePrototypeAdminApp')
  .controller('LoginCtrl', function ($scope, RestService, cfpLoadingBar, localStorageService, toaster, $filter, $state) {

    $scope.data = {};
    $scope.data.newUser = {};
    $scope.data.user = {};

    $scope.viewSignUp = function () {
      $scope.data.signUp = true;
    };

    $scope.viewSignIn = function () {
      $scope.data.signUp = false;
    };

    $scope.login = function () {
      cfpLoadingBar.start();
      RestService.login($scope.data.user).then(function (response) {
        cfpLoadingBar.complete();
        localStorageService.set('sCurrentUser', response);
        $state.go('main.dashboard')
      }, function (err) {
        toaster.error($filter('translate')('ERROR'), $filter('translate')('WRONG_PASSWORD'));
      })
    };

    $scope.createNewUser = function () {
      RestService.create($scope.data.newUser, 'users').then(function (response) {
        console.log(response);
      }, function (err) {

      })
    }


  });
