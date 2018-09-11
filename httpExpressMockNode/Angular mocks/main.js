var app = angular.module('app', ['ngMockE2E']);

app.run(function ($httpBackend) {
   console.log('RUN APP');
   var books = [
       {
           name: 'Angular'
       },
       {
           name: 'Ember'
       },
       {
           name: 'Redux'
       }
   ];
    $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);

    $httpBackend.whenPOST('http://localhost:3001/books').respond(function (method, url, data) {
        var result = JSON.parse(data);
        books.push(result);
        return [200, result];
    });
});

app.controller('mainCtrl', function ($http, $scope) {
    $http.get('http://localhost:3001/books').then(
        function (response) {
            $scope.books = response.data;
            console.log('success!', response)
        },
        function(error) {
            console.log('error!', error)
        });

    $scope.addBook = function (book) {
        $http.post('http://localhost:3001/books', book).then(
            function (response){
                $scope.books.push(book);
                $scope.book = null;
                console.log('success in adding new book in backend!');
            },
            function (error) {
                console.log('error in add book in post');
            }
        )
    }
});