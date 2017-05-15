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

        //$http.get($scope.urlAllProducto)
        //    .then(function (response) {

        //        $scope.listaProductos = response.data;

        //        var n = $scope.listaProductos.length;
        //        if (n == 0) {
        //            alert('no se encontro informacion');
        //        } else {
        //            for (var i = 0; i < n; i++) {
        //                for (var j = 0; j < 4; j++) {
        //                    if ($scope.listaProductos[i].tipo_producto == $scope.listaTipoProductos[j].id) {
        //                        $scope.aux = $scope.listaTipoProductos[j];
        //                        $scope.listaProductos[i].tipo_producto = $scope.aux;
        //                    }
        //                }
        //            }
                    
        //        }

        //    }, function errorCallback(response) {

        //        console.log(response);

        //    });

        //$scope.listaTipoProductos = [{ id: '1', tipo_producto: 'Cereal' }, { id: '2', tipo_producto: "Avena" },
        //    { id: '3', tipo_producto: "Granos" }, { id: '4', tipo_producto: "carne" }];
        //$scope.tipoProducto = "1";

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

}]);