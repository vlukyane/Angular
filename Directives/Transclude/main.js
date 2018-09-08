const app = angular.module('app', []);

app.directive('fooBar', function () {
    return {
        restrict : 'E',
        transclude: true,
        template: 'some text',
        link: function (scope, element, attrs, ctrl, transclude) {
            transclude(scope, function (clone, scope) {
                element.append(clone);
            })
        }
    }
});

app.controller('mainCtrl', function ($scope) {
   $scope.name = 'Slava';
});