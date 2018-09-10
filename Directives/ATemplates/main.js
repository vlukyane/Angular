const app = angular.module('app', []);

app.directive('fooBar', function () {
    const strings = [
        {
            id: 1,
            name: 'Angular'
        },
        {
            id: 2,
            name: 'React'
        },
        {
            id: 3,
            name: 'Redux'
        }
    ];
    return {
        template: "<div ng-repeat='string in myStrings'>{{string.name}}</div>",
        link: function (scope, element, attrs) {
            scope.name = "Slava";
            scope.myStrings = strings;
            console.log('hello there');
        }
    }
});