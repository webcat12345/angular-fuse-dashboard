(function () {

  'use strict';

  function Forgot_PasswordTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      'FORGOT_PASSWORD': {
        'TITLE': 'Recover your password',
        'EMAIL': 'EMAIL',
        'ERRORS': {
          'EMAIL_REQUIRED': 'Email field is required',
          'EMAIL_MUST_VALID': 'Email must be a valid e-mail address',
          'PASSWORD_REQUIRED': 'Password field is required'
        },
        'SEND_RESET_LINK': 'RESET MY PASSWORD',
        'GO_BACK': 'Go back to login'
      }
    });
  }

  angular
    .module('app.auth.forgot-password')
    .config(Forgot_PasswordTranslate);
})();

