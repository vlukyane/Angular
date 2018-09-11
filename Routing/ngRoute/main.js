var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            template: '<h1>some posts</h1>'
        })
});

app.controller('homeCtrl', function ($scope) {
    console.log('home controller');
    $scope.model = {
        message: "Hello from home ctrl"
    }
});