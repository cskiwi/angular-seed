/**
 * Created by SIDGLAT on 26/08/2015.
 */
define(['app'], function (app) {

    'use strict';

    app.register.controller('paginateController', function ($scope, $rootScope) {
        $scope.things = [];
        for (var i =0; i < 50; i++){
            $scope.things.push({
                title : 'title' + i,
                content: 'Lorizzle ipsizzle dolizzle dawg amizzle, consectetuer adipiscing elizzle. Nullam sapien velizzle,tellivizzlevolutpizzle, boofron mofo, phat daahng dawg, dang. Pellentesque eget boom shackalack. Own yo\' erizzle.Izzlizzle dolor dapibus turpis tempus bizzle. Maurizzle pellentesque nibh hizzle turpizzle. Tellivizzle itortorPellentesque fo shizzle my nizzle rhoncizzle shizzlin dizzle. In hizzle i saw beyonces tizzles and mpizzlwent crizzle platea dictumst. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle. Sheezy danurna,get down get down eu, mattizzle gizzle, eleifend cool, nunc. Funky fresh suscipizzle. Integer sempizzlvelisizzle shit.'
            });
        }
    });
});