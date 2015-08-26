/* global define */

define(['app'], function (app) {

    'use strict';

    app.factory('searchService',
        function ($resource) {
            return $resource('api/search');
        });
});