(function () {
    'use strict';

    var content = angular.module('app.content', ['ngResource']);

    var routeBuilder = function (route, name, roles) {
        var result = {
            templateUrl: 'app/content/' + route + '/' + route + '.html',
            controller: route + 'Ctrl',
            caseInsensitiveMatch: true,
            showNav: name || route
        }

        if (roles) {
            result.resolve = {
                guard: ['guardSvc', function (guardSvc) {
                    return guardSvc.guardRoute(roles || []);
                }]
            };

            result.showForRoles = roles
        }

        return result;
    }

    content.config(['$routeProvider', function ($routeProvider) {
        var asd = $routeProvider.when('/welcome', routeBuilder('welcome'));
        $routeProvider.when('/features', routeBuilder('features'));
        $routeProvider.when('/securedWebapiDemo', routeBuilder('securedWebapiDemo', 'Secured Web API demo'));
        $routeProvider.when('/adminOnly', routeBuilder('adminOnly', null, ['administrator']));
        $routeProvider.when('/userOnly',  routeBuilder('userOnly', null, ['user']));
    }]);

})();