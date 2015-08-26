/* global define */

define(['app'], function (app) {

	'use strict';

	app.register.controller('ContactController', function ($scope, $rootScope, breadcrumbs, contactService) {
        $rootScope.breadcrumbs = breadcrumbs;

        $scope.contacts = contactService.contacts;
	});
});