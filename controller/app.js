app.controller('mainCtrl', function($scope, $http){
    $scope.data = {};
    $http.get('/json/books.json').then(
        function(data){
            $scope.data.books=data.data;
        },
        function (error){
            $scope.data.error=error;
        }
    )
        // .success(function(data){
        //     $scope.data.books=data;
        // })
        // .error(function(error){
        //     $scope.data.error=error;
        // })

});
