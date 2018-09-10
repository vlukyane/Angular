var app = angular.module('app', []);

app.directive('wrapIn', function ($templateCache) {
    return {
        transclude: 'element',
        link: function (scope, element, attrs, ctrl, transclude) {
            const template = $templateCache.get(attrs.wrapIn);
            const templateElement = angular.element(template);

            transclude(scope, function (clone) {
                element.after(templateElement.append(clone)); 
            })
        }
    }
});