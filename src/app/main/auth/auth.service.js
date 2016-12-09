(function () {

  'use strict';

  function Auth ($http, $cookies, CookieTokenKey) {
    function login (form) {
      console.log('form', form);
      return $http
        .post('http://52.90.89.254/v0.1/auth/login', form)
        .then(function (response) {
          $cookies.put(CookieTokenKey, response.data && response.data.token);

          return response;
        });
    }

    function logout () {
    }

    function register (form) {
      console.log('form', form);
      return $http
        .post('api/auth/register', form)
        .then(function (response) {
          $cookies.put(CookieTokenKey, response.data && response.data.token);

          return response;
        });
    }

    function current () {
    }

    function update (updateData) {
    }

    function uploadPhoto (file) {
    }

    return {
      login: login,
      logout: logout,
      current: current,
      update: update,
      uploadPhoto: uploadPhoto
    };
  }

  angular
    .module('fuse')
    .factory('Auth', Auth)
    .constant('CookieTokenKey', 'token');
})();

