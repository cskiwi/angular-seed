/**
 * Created by SIDGLAT on 26/08/2015.
 */
define(['app'], function (app) {

    'use strict';

    app.factory('autocompleteService',
        function ($resource) {
            return $resource('/SearchIndexer.Api/autocomplete');
        });
});