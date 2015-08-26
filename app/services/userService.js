/**
 * Created by SIDGLAT on 26/08/2015.
 */
define(['app'], function (app) {

    'use strict';

    app.factory('userService',
        function ($http ) {
            return ({
                getUser: getUser,
            });
            function getUser() {
                return $http({
                    method: "post",
                    url: "/Documentum.Webclient.AM_Gent/actions/UserActions.aspx",
                    params: {
                        Action: "loggedinuser",
                    }
                });
            }

        });
});