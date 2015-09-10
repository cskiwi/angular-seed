/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			app: config.libDir + '/ng-app'
		}
	});
	
	require(
		[
			'app',

            // services
			'services/contactService',
            'services/autocompleteService',
            'services/searchService',
            'services/userService',

            // directives
            'directives/breadcrumbDirective',
            'directives/closeNavDirective',

            // custom controllers
            'controllers/Navigation'

		],
		function (app) {
			angular.bootstrap(document, [app.name]);
		});

});