var app = angular.module('app', []);

app.controller('postsCtrl', function ($scope) {
    $scope.name = 'Ihar';
    console.log('scope from ctrl ', $scope);
});

app.directive('post', function () {
    return {
        scope: true, //new proto scope from ctrl scope
        template: '<div>His name is {{name}} <input type="text" ng-model="name">',
        link: function (scope, element, attrs) {
            console.log('scope from dir', scope);
            console.log(scope.name)
        }
    }
});