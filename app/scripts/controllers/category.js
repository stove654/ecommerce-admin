'use strict';

/**
 * @ngdoc function
 * @name quikiePrototypeAdminApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the quikiePrototypeAdminApp
 */
angular.module('quikiePrototypeAdminApp')
  .controller('CategoryCtrl', function ($scope, $state, RestService) {

    $scope.data = {};
    $scope.data.items = [];

    $scope.goDetail = function (id) {
      $state.go('main.categoryDetail', {id: id})
    };

    var _init = function () {
      RestService.getList('categories').then(function (response) {
        console.log(response)
        $scope.data.items = response;
      }, function (err) {

      })
    };

    _init();

  });
