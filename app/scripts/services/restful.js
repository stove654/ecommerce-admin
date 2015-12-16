'use strict';

/**
 * @ngdoc service
 * @name quikiePrototypeAdminApp.RestService
 * @description
 * # RestService
 * Service in the quikiePrototypeAdminApp.
 */
angular.module('quikiePrototypeAdminApp')
  .factory('RestService', function (ENV, $http) {

    var api = {};
    api.url = ENV.apiEndpoint + '/api/'

    api.login = function (params) {
      return $http.post(ENV.apiEndpoint + '/auth/local', params).then(function(data) {
        return data.data;
      });
    };

    api.create = function (params, url) {
      return $http.post(api.url + url, params).then(function(data) {
        return data.data;
      });
    };

    api.getList = function (url) {
      return $http.get(api.url + url).then(function(data) {
        return data.data;
      });
    };

    api.getItem = function (id, url) {
      return $http.get(api.url + url + '/' + id).then(function(data) {
        return data.data;
      });
    };

    return api;
  });