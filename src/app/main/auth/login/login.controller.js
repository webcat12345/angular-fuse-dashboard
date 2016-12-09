(function ()
{
    'use strict';

    angular
        .module('app.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope, Auth)
    {
      // Data
      var vm = this;
      vm.form = {};

      // Methods
      $scope.login = function () {
        Auth.login($scope.form).then(
          function () {
            console.log('login-form', $scope.form);
          }
        );
      };
    }
})();
