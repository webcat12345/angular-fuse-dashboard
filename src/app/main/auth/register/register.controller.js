(function ()
{
    'use strict';

    angular
        .module('app.auth.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController($scope, Auth)
    {
        // Data
        var vm = this;
        vm.form = {};
        // Methods
        $scope.register = function ($scope, Auth) {
          Auth.register($scope.form).then(
            function () {
              console.log('register-form', $scope.form);
            }
          );
        };
    }
})();
