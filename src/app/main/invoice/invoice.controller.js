(function ()
{
    'use strict';

    angular
        .module('app.invoice')
        .controller('InvoiceController', InvoiceController);

    /** @ngInject */
    function InvoiceController(Invoice)
    {
      var vm = this;

      // Data
      vm.invoice = Invoice.data;

      // Methods

      //////////
    }
})();
