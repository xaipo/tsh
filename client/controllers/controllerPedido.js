app.controller('ControllerPedido', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

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

        $scope.observaciones = "";
        $scope.ordenServicio = "";
        $scope.tipoProducto = "";
        $scope.cantidadProducto = "";
        $scope.unidades = "";

        $scope.utensilios = "";
        $scope.cantidadUtensilios = "";
        $scope.seleccionProducto = "";

        $scope.id = "";
        $scope.seleccionPedido = "";
        $scope.seleccionUtensilio = "";


        $scope.listaOrdenServicio = [];
        $scope.listaProductos = [];
        $scope.listaUtensilios = [];
        $scope.listaUtensilioSelect = [];
        $scope.listaUtensiliosArray = [];
        $scope.listaProductosArray = [];

        $http.get($scope.urlAllUtensilios)
            .then(function (response) {

                $scope.listaUtensilios = response.data;
                $scope.utensilios = $scope.listaUtensilios[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });


        $http.get($scope.urlAllOrdenServicio)
            .then(function (response) {

                $scope.listaOrdenServicio = response.data;
                $scope.ordenServicio = $scope.listaOrdenServicio[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoProductos = function (pos) {

        var obj = $scope.listaProductos[pos];
        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlProductos, obj)
                .then(function successCallback(response) {

                    $scope.listaProductosArray.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoUtensiliosSeleccionados = function (pos) {

        var aux = $scope.listaUtensilioSelect[pos];

        var obj = {
            utensilio: aux.utensilios._id,
            cantidad_utensilios: aux.cantidad_utensilios
        }

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlUtensiliosSeleccionados, obj)
                .then(function successCallback(response) {

                    $scope.listaUtensiliosArray.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoPesidoBase = function () {

        var obj = {
            orden_servicio: $scope.ordenServicio,
            productos: $scope.listaProductosArray,
            utensilios: $scope.listaUtensiliosArray,
            observaciones: $scope.observaciones
        };        

        var q = $q.defer()
        q.resolve(

            $http.post($scope.url, obj)
                .then(function successCallback(response) {

                    $scope.iniciar();
                    //console.log(response);

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoPedido = function () {

        var dimProduc = $scope.listaProductos.length;

        for (var i = 0; i < dimProduc; i++) {

            $scope.ingresoProductos(i);

        }

        var dimUtenSelect = $scope.listaUtensilioSelect.length;

        for (var i = 0; i < dimUtenSelect; i++) {

            $scope.ingresoUtensiliosSeleccionados(i);

        }       

        $timeout(function () {

            $scope.ingresoPesidoBase();

        }, 1000, false)

    }

    $scope.agregarListaUtensilios = function () {

        if ($scope.utensilios != undefined && $scope.utensilios != "" &&
            $scope.cantidadUtensilios != "" && $scope.cantidadUtensilios != undefined) {

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

        if ($scope.tipoProducto != "" && $scope.cantidadProducto != "" && $scope.unidades != "" &&
            $scope.tipoProducto != undefined && $scope.cantidadProducto != undefined && $scope.unidades != undefined) {
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