(function ()
{
  'use strict';

  angular
    .module('app.invoice', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
  {
    $stateProvider.state('app.invoice_table', {
      url      : '/invoice',
      views    : {
        'content@app': {
          templateUrl: 'app/main/invoice/invoice.html',
          controller : 'InvoiceController as vm'
        }
      },
      resolve  : {
        Invoice: function (apiResolver)
        {
          return apiResolver.resolve('invoice@get');
        }
      },
      bodyClass: 'invoice printable'
    });

    $translatePartialLoaderProvider.addPart('app/main/invoice');

    // Navigation
    msNavigationServiceProvider.saveItem('invoice', {
      title : 'Invoice',
      icon  : 'icon-receipt',
      state : 'app.invoice_table',
      weight: 4
    });
  }

})();
