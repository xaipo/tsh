app.controller('ControllerUtensilio', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoUtensilio();
    console.log($scope.url);
    $scope.descripcionUtensilio;
    $scope.stock;
    $scope.estado;
    
    $scope.ingresoUtensilio = function () {
        console.log($scope.descripcionUtensilio);
        var obj = {
            descripcion_utensilio: $scope.descripcionUtensilio, stock: $scope.stock, estado: $scope.estado
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);