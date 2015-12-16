'use strict';

/**
 * @ngdoc function
 * @name quikiePrototypeAdminApp.config:Config language
 * @description
 * # Config language
 * Controller of the quikiePrototypeAdminApp
 */
angular.module('quikiePrototypeAdminApp')
  //Config languages
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', {
        SIGN_TEXT: 'Sign in to store',
        WRONG_PASSWORD: 'Invalid email or password!',
        ERROR: 'Error',
      })
      .translations('vi', {
        SIGN_TEXT: 'Sign in to store',
        WRONG_PASSWORD: 'Sai email hoặc password!',
        ERROR: 'Lỗi',
      });
    $translateProvider.preferredLanguage('vi');
  })