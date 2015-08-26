/* global define */

define(['app'], function (app) {

    'use strict';

    app.register.controller('ContactDetailController', function ($scope, $rootScope, breadcrumbs, $routeParams, contactService) {
        $rootScope.breadcrumbs = breadcrumbs;
        var id = $routeParams.id,
            contacts = contactService.contacts,

            getContactById = function (id) {
                var contact, l = contacts.length;
                while (l--) {
                    contact = contacts[l];
                    if (contact.id === id) {
                        return contact;
                    }
                }
                return null;
            };

        $scope.contact = getContactById(id);
    });
});