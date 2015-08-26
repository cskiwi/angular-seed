define(['app'], function (app) {
    'use strict';

    app.directive('breadcrumbs', function () {
        return {
            templateUrl: 'app/views/directives/breadcrumbs.html',
            restrict: 'E',
            scope: {
                breadcrumbs: "="
            }
        };
    });

    return app;

});