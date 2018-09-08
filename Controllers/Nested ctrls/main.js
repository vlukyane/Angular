const app = angular.module('app', []);

app.controller('langCtrl', function ($scope) {
    $scope.showContent = function() {
        console.log('this is some content');
    };
});

app.controller('angularCtrl', function ($scope) {

    $scope.showContent = function() {
      console.log('angular content');
    };
});

app.controller('emberCtrl', function ($scope) {
});