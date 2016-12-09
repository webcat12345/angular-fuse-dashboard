(function ()
{
    'use strict';

    angular
        .module('app.auth.forgot-password')
        .controller('ForgotPasswordController', ForgotPasswordController);

    /** @ngInject */
    function ForgotPasswordController($scope)
    {
        // Data
        var vm = this;
        vm.form = {};

        // Methods
        $scope.forgetPassword = function () {
        };
        //////////
    }
})();
