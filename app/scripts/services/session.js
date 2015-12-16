'use strict';

/**
 * @ngdoc service
 * @name quikiePrototypeAdminApp.session
 * @description
 * # session
 * Service in the quikiePrototypeAdminApp.
 */
angular.module('quikiePrototypeAdminApp')
  .service('SessionService', function (localStorageService, jwtHelper) {

    var session = {};

    session.isToken = function () {
      var isLoggedIn = false;
      if (localStorageService.get('sCurrentUser')) {
        var user = localStorageService.get('sCurrentUser');
        if (!jwtHelper.isTokenExpired(user.token)) {
          isLoggedIn = true;
        }
      }
      return {
        isLoggedIn: isLoggedIn
      };
    };

    return session;
  });