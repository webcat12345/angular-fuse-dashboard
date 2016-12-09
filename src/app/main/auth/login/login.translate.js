(function () {

  'use strict';

  function LoginTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      'LOGIN': {
        'TITLE': 'Log in to your account',
        'EMAIL': 'EMAIL',
        'ERRORS': {
          'EMAIL_REQUIRED': 'Email field is required',
          'EMAIL_MUST_VALID': 'Email must be a valid e-mail address',
          'PASSWORD_REQUIRED': 'Password field is required'
        },
        'REMEMBER_ME': 'Remember Me',
        'FORGOT_PASSWORD': 'Forgot Password?',
        'LOG_IN': 'LOG IN',
        'DONT_HAVE_ACCOUNT': "Don't have an account?",
        'CREATE_ACCOUNT': 'Create an account'
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
    .module('app.auth.login')
    .config(LoginTranslate);
})();

