(function () {
    'use strict';

    var content = angular.module('app.content', ['ngResource']);

    var routeBuilder = function (route, name, roles) {
        return {
            templateUrl: 'app/content/' + route + '/' + route + '.html',
            controller: route + 'Ctrl',
            caseInsensitiveMatch: true,
            showNav: name || route,
            resolve: {
                guard: ['guardSvc', function (guardSvc) {
                    return guardSvc.guardRoute(roles || []);
                }]
            },
            showForRoles: roles
        }
    }

    content.config(['$routeProvider', function ($routeProvider) {
        var asd = $routeProvider.when('/welcome', routeBuilder('welcome'));
        $routeProvider.when('/features', routeBuilder('features'));
        $routeProvider.when('/securedWebapiDemo', routeBuilder('securedWebapiDemo', 'Secured Web API demo'));
        $routeProvider.when('/adminOnly', routeBuilder('adminOnly', null, ['administrator']));
        $routeProvider.when('/userOnly',  routeBuilder('userOnly', null, ['user']));
    }]);

})();