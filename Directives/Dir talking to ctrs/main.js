var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.posts = [
        {
            name: 'first post'
        },
        {
            name: 'second post'
        }
    ];
    $scope.hello = "hello";

    $scope.getPosts = function () {
        return $scope.posts;
    }
});

app.directive('post', function() {
    return {
        scope: false, //scope dir == scope ctrl
        template: '<div ng-repeat="post in getPosts()">{{post.name}}</div>',
        link : function (scope, element, attrs) {
            scope.hello = 'Hihi';
        }
    }
});