define(['app'], function (app) {
    'use strict';

    app.directive('closeNav', function () {
        return {
            restrict: 'A',
            link: function ($scope, elem, attrs) {
                var clickingCallback = function() {
                    $('.button-collapse').sideNav('hide');
                };
                elem.bind('click', clickingCallback);
            }
        };
    });

    return app;

});