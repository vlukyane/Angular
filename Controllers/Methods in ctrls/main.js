var app = angular.module('app', []);

app.controller('firstCtrl', function ($scope, myFactory) {
    $scope.hello = 123;

    $scope.myFactory = myFactory;
    $scope.myFunction = function () {
        return "data from myFunction";
    };

    $scope.setHello = function (text) {
        $scope.hello = text;
    };
});

app.factory('myFactory', function () {
    return {
        hello: function () {
            return 'hello 789';
        }
    };
});