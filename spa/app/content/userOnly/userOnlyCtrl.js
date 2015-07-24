(function () {
    'use strict';

    var controllerId = 'userOnlyCtrl';

    angular.module('app.content')
        .controller(controllerId, ['$scope', function ($scope) {
            $scope.title = 'Secure section for user';
        }]);
})();