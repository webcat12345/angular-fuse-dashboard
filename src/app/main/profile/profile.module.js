(function ()
{
    'use strict';

    angular
        .module('app.profile', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.profile_page', {
            url      : '/profile',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/profile/profile.html',
                    controller : 'ProfileController as vm'
                }
            },
            resolve  : {
                Timeline    : function (apiResolver)
                {
                    return apiResolver.resolve('profile.timeline@get');
                },
                About       : function (apiResolver)
                {
                    return apiResolver.resolve('profile.about@get');
                },
                PhotosVideos: function (apiResolver)
                {
                    return apiResolver.resolve('profile.photosVideos@get');
                }
            },
            bodyClass: 'profile'
        });

        $translatePartialLoaderProvider.addPart('app/main/profile');

        // Navigation
        msNavigationServiceProvider.saveItem('profile', {
            title : 'Profile',
            icon  : 'icon-account',
            state : 'app.profile_page',
            weight: 6
        });
    }

})();
