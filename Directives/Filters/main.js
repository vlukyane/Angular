const app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.money1 = "1.13$";
    $scope.money2 = "$1.21";
    $scope.money3 = "3.22";
});

app.filter('moneyFilter', function () {
   return function (str) {
       const lastChar = str.slice(-1);
       const firstChar = str.slice(0, 1);
       let slicedPart;
       if (lastChar === '$') {
           slicedPart = str.slice(0, str.length - 1);
           return '$' + slicedPart;
       }
       else if (firstChar === '$') {
           return str;
       }
       else {
           return '$' + str;
       }
   }
});