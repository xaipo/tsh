app.controller('ControllerProducto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllProducto;
    $scope.tipoProducto;
    $scope.cantidadProducto;
    $scope.unidadesProducto;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionProducto;

    $scope.busqueda;
    $scope.listaProductos;
    $scope.listaTipoProductos;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

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
} else {
        window.location = "/login.html"
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

    $scope.buscarSeleccionProducto = function (aux) {

        if ($scope.seleccionProducto != '' && $scope.seleccionProducto != undefined) {

            $scope.selecProd = JSON.parse($scope.seleccionProducto);

            $scope.id = $scope.selecProd._id;
            $scope.tipoProducto = $scope.selecProd.tipo_producto;
            $scope.cantidadProducto = $scope.selecProd.cantidad_producto;
            $scope.unidadesProducto = $scope.selecProd.unidades_producto;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);