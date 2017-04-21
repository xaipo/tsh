app.controller('ControllerProducto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoProducto();
    console.log($scope.url);
    $scope.tipoProducto;
    $scope.cantidadProducto;
    $scope.unidadesProducto;
    
    $scope.ingresoProducto = function () {
        console.log($scope.tipoProducto);
        var obj = {
            tipo_producto: $scope.tipoProducto, cantidad_producto: $scope.cantidadProducto,
            unidades_producto: $scope.unidadesProducto
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);