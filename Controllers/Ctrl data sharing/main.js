var app = angular.module('app', []);

app.controller('firstCtrl', function ($scope, myFactory) {
   console.log('firstCtrl');
   $scope.hello = 'hello';
   $scope.myFactory = myFactory;
});

app.controller('secondCtrl', function ($scope, myFactory) {
    console.log('secondCtrl');
    $scope.myFactory = myFactory;
    $scope.hello = 'hello';

});

app.factory('myFactory', function () {
   return {
     hello: 'hello Angular'
   };
});