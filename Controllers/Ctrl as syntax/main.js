var app = angular.module('app', []);

app.controller('mainCtrl', function () {
    this.myInfo = "info from mainCtrl";
    this.addInfo = function () {
        console.log("added!");
    }
});

app.controller('firstCtrl', function ($scope) {
    this.myInfo = "Info from firstCtrl";
    $scope.firstCtrl = this;
});

app.controller('secondCtrl', function () {
    this.myInfo = "Info from secondCtrl";
});