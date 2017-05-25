app.controller('ControllerPedido', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlProductos;
    $scope.urlUtensiliosSeleccionados;
    $scope.urlAllOrdenServicio;
    $scope.urlAllUtensilios;

    // Variables Producto y Pedido
    $scope.observaciones;
    $scope.ordenServicio;
    $scope.tipoProducto;
    $scope.cantidadProducto;
    $scope.unidades;

    // Variables Utencilios
    $scope.utensilios;
    $scope.cantidadUtensilios;
    $scope.seleccionProducto;

    $scope.id;
    $scope.seleccionPedido;
    $scope.seleccionUtensilio;


    $scope.listaOrdenServicio;
    $scope.listaProductos = [];
    $scope.listaUtensilios = [];
    $scope.listaUtensilioSelect = [];
    $scope.listaUtensiliosArray = [];
    $scope.listaProductosArray = [];

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPedido();
        $scope.urlProductos = myProvider.getUrlIngresoProducto();
        $scope.urlUtensiliosSeleccionados = myProvider.getUrlIngresoUtensiliosSeleccionados();
        $scope.urlAllOrdenServicio = myProvider.getUrlAllOrdenServicio();
        $scope.urlAllUtensilios = myProvider.getUrlAllUtensilio();

        $http.get($scope.urlAllUtensilios)
            .then(function (response) {

                $scope.listaUtensilios = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });


        $http.get($scope.urlAllOrdenServicio)
            .then(function (response) {

                $scope.listaOrdenServicio = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    var ingresoProductos = function () {

        var n = listaProductos.length;

        for (var i = 0; i < n; i++) {
            $http.post($scope.urlProductos, obj)
                .then(function (response) {

                    $scope.iniciar();
                    console.log(response);

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    }

    $scope.ingresoPedido = function () {
        var obj = {
            orden_servicio: $scope.ordenServicio,
            productos: $scope.listaProductosArray,
            utensilios: $scope.listaUtensiliosArray,
            observaciones: $scope.observaciones
        };

        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }


    $scope.agregarListaUtensilios = function () {

        if ($scope.utensilios != undefined && $scope.utensilios != "") {

            var n = $scope.listaUtensilios.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaUtensilios[i]._id == $scope.utensilios) {
                    pos = i;
                    break;
                }
            }

            var obj = {
                utensilios: $scope.listaUtensilios[pos],
                cantidad_utensilios: $scope.cantidadUtensilios
            }

            $scope.listaUtensilioSelect.push(obj);

            $scope.listaUtensilios.splice(pos, 1);
            $scope.utensilios = {};
            $scope.cantidadUtensilios = "";

        }

    }

    $scope.quitarSeleccionUtensilio = function () {

        if ($scope.seleccionUtensilio != undefined && $scope.seleccionUtensilio != "") {

            $scope.seleccionUtensilioJS = JSON.parse($scope.seleccionUtensilio);
            $scope.listaUtensilios.push($scope.seleccionUtensilioJS.utensilios);

            var n = $scope.listaUtensilioSelect.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaUtensilioSelect[i].utensilios._id == $scope.seleccionUtensilioJS.utensilios._id) {
                    pos = i;
                    break;
                }
            }

            $scope.listaUtensilioSelect.splice(pos, 1);
            $scope.seleccionUtensilio = {};

        }

    }

    $scope.agregarListaProductos = function () {

        var obj = {
            tipo_producto: $scope.tipoProducto,
            cantidad_producto: $scope.cantidadProducto,
            unidades_producto: $scope.unidades
        }

        $scope.listaProductos.push(obj);

        $scope.tipoProducto = "";
        $scope.cantidadProducto = "";
        $scope.unidades = "";

    }

    $scope.quitarSeleccionProductos = function () {

        if ($scope.seleccionProducto != undefined && $scope.seleccionProducto != "") {

            $scope.seleccionProductoJS = JSON.parse($scope.seleccionProducto);

            var n = $scope.listaProductos.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaProductos[i].tipo_producto == $scope.seleccionProductoJS.tipo_producto) {
                    pos = i;
                    break;
                }
            }

            $scope.listaProductos.splice(pos, 1);
            $scope.seleccionProducto = {};

        }

    }

}]);