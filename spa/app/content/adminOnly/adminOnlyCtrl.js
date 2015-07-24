(function () {
    'use strict';

    var controllerId = 'adminOnlyCtrl';
    
    angular.module('app.content')
        .controller(controllerId, ['$scope', function ($scope) {
            $scope.title = 'Secure section for admin';
        }]);    
})();
