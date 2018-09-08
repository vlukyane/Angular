var app = angular.module('app', []);

app.directive('foo', function () {
    //scope - scope
    //element - dom el this directive in jqlite
    //attrs - all attrs of this directive
    return {
        link: function (scope, element, attrs) {
            element.on('click', function () {
                if (element.text() === 'some old text'){
                    element.text('some new text');
                }
                else {
                    element.text('some old text');
                }
            })
        }
    }
});