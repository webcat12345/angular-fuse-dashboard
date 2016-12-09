(function () {

  'use strict';

  function RegisterTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      'REGISTER': {
        'TITLE': 'Create an account',
        'EMAIL': 'EMAIL',
        'ERRORS': {
          'USERNAME_REQUIRED': 'Username field is required',
          'EMAIL_REQUIRED': 'Email field is required',
          'EMAIL_MUST_VALID': 'Email must be a valid e-mail address',
          'PASSWORD_REQUIRED': 'Password field is required',
          'PASSWORD_CONFIRM_REQUIRED': 'Password (Confirm) field is required'
        },
        'READ_ACCEPT': 'I read and accept',
        'TERMS_COND': 'terms and conditions',
        'CREATE_ACCOUNT': 'CREATE MY ACCOUNT',
        'ALREADY_HAVE': 'Already have an account?',
        'LOGIN': 'Log in'
      }
    });

    $translateProvider.translations('de', {
      'TRANSACTION_IMAGES': {
        'IMAGE-PREVIEW': 'Bildansicht',
        'CLOSE': 'Schließen'
      }
    });
  }

  angular
    .module('app.auth.register')
    .config(RegisterTranslate);
})();


