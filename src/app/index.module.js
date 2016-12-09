(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            'app.dashboards',

            // login
            'app.auth.login',

            // register
            'app.auth.register',

            // forgot_pass
            'app.auth.forgot-password',

            'app.invoice',

            'app.profile',

            'app.errors.error-404',

            'app.errors.error-500'
        ]);
})();
