var app = angular.module('app', []);

app.directive('fooBar', function () {
   return {
       //A - attr, E - element, C - class
       restrict: 'M',
       link: function () {
           console.log("log ffrom foobar directive");
       }
   }
});