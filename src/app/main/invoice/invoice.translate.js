/**
 * Created by mac on 2/17/16.
 */
(function () {

  'use strict';

  function InvoiceTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      'INVOICE': {
        'TITLE': 'Invoice',
        'FROM': {
          'NAME': 'Company Name',
          'ADDRESS': 'Company Address',
          'WEBSITE': 'Company Website',
          'EMAIL': 'Company Email',
          'CELL': 'Company Cell'
        },
        'TO':{
          'SUB-TITLE': 'Bill TO:',
          'NAME': 'Client Name',
          'ADDRESS': 'Client Address',
          'WEBSITE': 'Client Website',
          'EMAIL': 'Client Email',
          'CELL': 'Client Cell'
        },
        'DATE': {
          'INVOICE': 'Invoice Date',
          'DUE': 'Due Date'
        },
        'TABLE-HEADER': {
          'ITEM': 'Item',
          'DESC': 'Description',
          'RATE': 'Rate',
          'QUANTITY': 'Quantity',
          'TAX': 'Tax (%)',
          'PRICE': 'Price'
        },
        'RESULT': {
          'SUB': 'SUBTOTAL',
          'TAX': 'TAX',
          'DISCOUNT': 'DISCOUNT'
        },
        'TOTAL': 'TOTAL',
        'NOTE': 'Notes',
        'ERRORS': {
          'COMPANY_NAME_REQUIRED': 'Company Name field is required'
        }
      }
    });
  }

  angular
    .module('app.invoice')
    .config(InvoiceTranslate);
})();
