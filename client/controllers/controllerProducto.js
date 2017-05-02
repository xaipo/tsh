app.controller('ControllerProducto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllProducto;
    $scope.tipoProducto;
    $scope.cantidadProducto;
    $scope.unidadesProducto;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaProductos;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoProducto();
        $scope.urlModificar = myProvider.getUrlModificarProducto();
        $scope.urlAllProducto = myProvider.getUrlALLProducto();
        $http.get($scope.urlAllProducto)
            .then(function (response) {

                $scope.listaProductos = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoProducto = function () {

        var obj = {
            tipo_producto: $scope.tipoProducto, cantidad_producto: $scope.cantidadProducto,
            unidades_producto: $scope.unidadesProducto
        };

        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarProducto = function () {

        var obj = {
            id: $scope.id, tipo_producto: $scope.tipoProducto, cantidad_producto: $scope.cantidadProducto,
            unidades_producto: $scope.unidadesProducto
        };
        console.log($scope.urlModificar);
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccion = function (aux) {
        $scope.id = aux._id;
        $scope.tipoProducto = aux.tipo_producto;
        $scope.cantidadProducto = aux.cantidad_producto;
        $scope.unidadesProducto = aux.unidades_producto;
    }

}]);