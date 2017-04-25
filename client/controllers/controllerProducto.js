app.controller('ControllerProducto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllProducto;
    console.log($scope.url);
    $scope.tipoProducto;
    $scope.cantidadProducto;
    $scope.unidadesProducto;

    $scope.busqueda;
    $scope.listaProductos;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoProducto();
        $scope.urlAllProducto = myProvider.getUrlALLProducto();
        $http.get($scope.urlAllProducto)
            .then(function (response) {

                $scope.listaProductos = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }
    
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