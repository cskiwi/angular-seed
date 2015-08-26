/**
 * Created by SIDGLAT on 26/08/2015.
 */
define(['app'], function (app) {

    'use strict';

    app.controller('NavigationController', function ($scope, $location, autocompleteService, searchService, userService) {
        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        };
        autocompleteService.query(function (data) {
            $scope.items = data;
        });

        $scope.updateItems = function (typed) {
            autocompleteService.query({search: typed}, function (data) {
                $scope.items = data;
            });
        };

        $scope.searchItems = function (input) {
            $scope.curPage.All = 1;
            $scope.curPage.Doc = 1;
            $scope.loading = true;
            $scope.fine = null;
            $location.path('/search').search({query: input});
            $scope.searchResults = [];
            if (input) {
                searchService.query({search: input}, function (data) {
                    $scope.searchResults = data;
                    $scope.loading = false;

                    var finetune = $('.finetune');
                    var count = $('.count');
                    finetune.slideUp();
                    count.slideDown();
                });
            } else {
                $scope.loading = false;
            }
        };

        $scope.clickSearch = function (input) {
            $scope.searchItems(input);
            $scope.query = input;
        };

        $scope.doSuggest = function (query) {
            $scope.suggestions = $filter('filter')($scope.items, function (value) {
                var exp = new RegExp("\\b" + query, "gi");
                return exp.test(value);
            });
        };

        userService.getUser()
            .success(function (data) {
                $scope.user = data;
            })
            .error(function () {
                $scope.user = "anon";
            });
    });
});