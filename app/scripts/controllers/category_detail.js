'use strict';

/**
 * @ngdoc function
 * @name quikiePrototypeAdminApp.controller:CategoryDetailCtrl
 * @description
 * # CategoryDetailCtrl
 * Controller of the quikiePrototypeAdminApp
 */
angular.module('quikiePrototypeAdminApp')
  .controller('CategoryDetailCtrl', function ($scope, $stateParams, RestService, cfpLoadingBar, toaster, $filter) {

    $scope.data = {};
    $scope.data.category = {
      status: true,
      image: "https://s3-ap-southeast-1.amazonaws.com/stove-arstist/default-product-image.jpg"
    };

    $scope.updateCategory = function () {
      cfpLoadingBar.start();
      if ($scope.data.category._id) {

      } else {
        RestService.create($scope.data.category, 'categories').then(function (response) {
          console.log(response);
          cfpLoadingBar.complete();
        })
      }
    }

    var _init = function () {
      if ($stateParams.id != 'new') {
        cfpLoadingBar.start();
        RestService.getItem($stateParams.id, 'categories').then(function (response) {
          $scope.data.category = response;
          console.log(response)
          cfpLoadingBar.complete();
        }, function (err) {

        })
      }
    };

    _init();
    console.log($stateParams)

  });
