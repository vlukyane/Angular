var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            templateUrl : 'posts.html',
            controller: 'postsCtrl'
        })
        .when('/posts/:postId', {       //dymamic path
            templateUrl: 'postId.html',
            controller: 'postCtrl'
        })
        .otherwise({
            template: '<h1>404 No such page.</h1>'
        })
});

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function (event, current, previous, reject) {
        console.log('change st', arguments);
    });

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
        console.log('change suc', arguments);
        $rootScope.currentPath = current.$$route.originalPath;
    })
});

app.controller('pathCtrl', function () {

});

app.controller('homeCtrl', function ($scope) {
    console.log('home controller');
    $scope.model = {
        message: "Hello from home ctrl"
    }
});

app.controller('postCtrl', function ($scope, $routeParams, postFactory) {
    var postId = Number($routeParams.postId);
    $scope.post = _.findWhere(postFactory, {id: postId})
});

app.controller('postsCtrl', function ($scope, postFactory) {
    console.log(postFactory);
    $scope.posts = postFactory;
});

app.factory('postFactory', function () {
    return [
        {
            id: 1,
            name: 'Angular bla-bla'
        },
        {
            id: 2,
            name: 'React bla-bla'
        },
        {
            id: 3,
            name: 'Ember bla-bla'
        }
    ]
});