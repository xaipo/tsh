app.controller('ControllerPedidoModificar', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.urlModificar;
    $scope.urlAllPedidos;
    $scope.urlAllOrdenServicio;
    $scope.urlAlimentos;
    $scope.urlMateriales;
    $scope.urlAllTipoAlimentos;
    $scope.urlAllTipoMateriales;

    // Variables Producto y Pedido
    $scope.id;
    $scope.ordenServicio;
    $scope.observaciones;
    $scope.alimento;
    $scope.cantidadAlimento;
    $scope.unidadesAlimento;

    // Variables Materiales
    $scope.material;
    $scope.cantidadMaterial;

    //Selecciones
    $scope.seleccionMaterial;
    $scope.seleccionAlimento;
    $scope.seleccionPedido;

    //Listas
    $scope.listaPedidos = [];
    $scope.listaOrdenServicio = [];
    $scope.listaAlimentos = [];
    $scope.listaAlimentosNueva = [];
    $scope.listaMateriales = [];
    $scope.listaMaterialesSelecciondos = [];
    $scope.listaMaterialesSelecciondosNueva = [];
    $scope.listaMaterialesSelect = [];
    $scope.listaMaterialesArray = [];
    $scope.listaAlimentosArray = [];

    $scope.iniciar = function () {
        $scope.urlModificar = myProvider.getUrlModificarPedido();
        $scope.urlAllPedidos = myProvider.getUrlAllPedido();
        $scope.urlProductos = myProvider.getUrlIngresoProducto();
        $scope.urlProductosBuscar = myProvider.getUrlBuscarProducto();
        $scope.urlProductosModificar = myProvider.getUrlModificarProducto();
        $scope.urlUtensiliosSeleccionados = myProvider.getUrlIngresoUtensiliosSeleccionados();
        $scope.urlUtensiliosSeleccionadosBuscar = myProvider.getUrlBuscarUtensiliosSeleccionados();
        $scope.urlUtensiliosSeleccionadosModificar = myProvider.getUrlModificarUtensiliosSeleccionados();
        $scope.urlAllOrdenServicio = myProvider.getUrlAllOrdenServicio();
        $scope.urlAllUtensilios = myProvider.getUrlAllUtensilio();
        $scope.urlUtensiliosBuscar = myProvider.getUrlBuscarUtensilio();

        // Variables Producto y Pedido
        $scope.id = "";
        $scope.ordenServicio = "";
        $scope.observaciones = "";
        $scope.alimento = "";
        $scope.cantidadAlimento = "";
        $scope.unidadesAlimento = "";

        // Variables Materiales
        $scope.material = "";
        $scope.cantidadMaterial = "";

        //Selecciones
        $scope.seleccionMaterial = "";
        $scope.seleccionAlimento = "";
        $scope.seleccionPedido = "";

        //Listas
        $scope.listaPedidos = [];
        $scope.listaOrdenServicio = [];
        $scope.listaAlimentos = [];
        $scope.listaAlimentosNueva = [];
        $scope.listaMateriales = [];
        $scope.listaMaterialesSelecciondos = [];
        $scope.listaMaterialesSelecciondosNueva = [];
        $scope.listaMaterialesSelect = [];
        $scope.listaMaterialesArray = [];
        $scope.listaAlimentosArray = [];

        $http.get($scope.urlAllPedidos)
            .then(function (response) {

                $scope.listaPedidos = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllUtensilios)
            .then(function (response) {

                $scope.listaUtensilios = response.data;
                $scope.utensilios = $scope.listaUtensilios[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.ingresoProductos = function (pos) {

        var obj = $scope.listaProductosNueva[pos];
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

    $scope.modificarProductos = function (pos) {

        var obj = {
            id: $scope.listaProductos[pos]._id,
            tipo_producto: $scope.listaProductos[pos].tipo_producto,
            cantidad_producto: $scope.listaProductos[pos].cantidad_producto,
            unidades_producto: $scope.listaProductos[pos].unidades_producto
        }

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlProductosModificar, obj)
                .then(function successCallback(response) {

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoUtensiliosSeleccionados = function (pos) {

        var aux = $scope.listaUtensiliosSelecciondosNueva[pos];

        var obj = {
            utensilio: aux.utensilio._id,
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

    $scope.modificarUtensiliosSeleccionados = function (pos) {

        var aux = $scope.listaUtensiliosSelecciondos[pos];

        var obj = {
            id: aux._id,
            utensilio: aux.utensilio._id,
            cantidad_utensilios: aux.cantidad_utensilios
        }

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlUtensiliosSeleccionadosModificar, obj)
                .then(function successCallback(response) {

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarPedidoBase = function () {

        var obj = {
            id: $scope.id,
            orden_servicio: $scope.ordenServicio,
            productos: $scope.listaProductosArray,
            utensilios: $scope.listaUtensiliosArray,
            observaciones: $scope.observaciones
        };

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlModificar, obj)
                .then(function successCallback(response) {

                    $scope.iniciar();
                    console.log(response);

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarPedido = function () {

        var dimProducMod = $scope.listaProductos.length;

        for (var i = 0; i < dimProducMod; i++) {

            $scope.modificarProductos(i);
            $scope.listaProductosArray.push($scope.listaProductos[i]._id.toString());

        }

        var dimUtenMod = $scope.listaUtensiliosSelecciondos.length;

        for (var i = 0; i < dimUtenMod; i++) {

            $scope.modificarUtensiliosSeleccionados(i);
            $scope.listaUtensiliosArray.push($scope.listaUtensiliosSelecciondos[i]._id.toString());
        }

        var dimProduc = $scope.listaProductosNueva.length;

        for (var i = 0; i < dimProduc; i++) {

            $scope.ingresoProductos(i);

        }

        var dimUten = $scope.listaUtensiliosSelecciondosNueva.length;

        for (var i = 0; i < dimUten; i++) {

            $scope.ingresoUtensiliosSeleccionados(i);

        }

        $timeout(function () {

            $scope.modificarPedidoBase();

        }, 1000, false)

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

    $scope.buscarSeleccionListaPedido = function () {

        if ($scope.seleccionPedido != '' && $scope.seleccionPedido != undefined) {

            $scope.selecPedJS = JSON.parse($scope.seleccionPedido);
            $scope.id = $scope.selecPedJS._id;
            $scope.ordenServicio = $scope.selecPedJS.orden_servicio;
            $scope.observaciones = $scope.selecPedJS.observaciones;
            $scope.cargarListasSeleccion($scope.selecPedJS);

        }
    }

    $scope.cargarListasSeleccion = function (pedido) {

        var n = pedido.productos.length;
        var listProd = pedido.productos;
        for (var i = 0; i < n; i++) {

            var prod = { id: listProd[i] };
            $http.post($scope.urlProductosBuscar, prod)
                .then(function (response) {

                    $scope.listaProductos.push(response.data);

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

        var n = pedido.utensilios.length;
        var listUten = pedido.utensilios;
        var x = 0;
        for (var i = 0; i < n; i++) {

            var utenSelect = { id: listUten[i] };
            $http.post($scope.urlUtensiliosSeleccionadosBuscar, utenSelect)
                .then(function (response) {

                    $scope.listaUtensiliosSelecciondos.push(response.data);

                    var uten = {
                        id: response.data.utensilio
                    }

                    $http.post($scope.urlUtensiliosBuscar, uten)
                        .then(function (response) {

                            $scope.listaUtensiliosSelecciondos[x++].utensilio = response.data;

                        }, function errorCallback(response) {

                            console.log(response);

                        });

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

    }

    $scope.cargarDatosSeleccionProductos = function () {

        if ($scope.seleccionProducto != undefined && $scope.seleccionProducto != "") {

            $scope.seleccionProductoJS = JSON.parse($scope.seleccionProducto);

            $scope.tipoProducto = $scope.seleccionProductoJS.tipo_producto;
            $scope.cantidadProducto = $scope.seleccionProductoJS.cantidad_producto;
            $scope.unidades = $scope.seleccionProductoJS.unidades_producto;

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

            $scope.listaProductosNueva.push(obj);

            $scope.tipoProducto = "";
            $scope.cantidadProducto = "";
            $scope.unidades = "";
        }
    }

    $scope.modificarListaProductos = function () {

        if ($scope.seleccionProducto != undefined && $scope.seleccionProducto != "" &&
            $scope.tipoProducto != "" && $scope.cantidadProducto != "" && $scope.unidades != "" &&
            $scope.tipoProducto != undefined && $scope.cantidadProducto != undefined && $scope.unidades != undefined) {

            $scope.seleccionProductoJS = JSON.parse($scope.seleccionProducto);

            var n = $scope.listaProductos.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaProductos[i]._id == $scope.seleccionProductoJS._id) {

                    $scope.seleccionProductoJS.tipo_producto = $scope.tipoProducto;
                    $scope.seleccionProductoJS.cantidad_producto = $scope.cantidadProducto;
                    $scope.seleccionProductoJS.unidades_producto = $scope.unidades;

                    $scope.listaProductos[i] = $scope.seleccionProductoJS;
                    break;

                }
            }

            var n = $scope.listaProductosNueva.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaProductosNueva[i].tipo_producto == $scope.seleccionProductoJS.tipo_producto) {

                    $scope.seleccionProductoJS.tipo_producto = $scope.tipoProducto;
                    $scope.seleccionProductoJS.cantidad_producto = $scope.cantidadProducto;
                    $scope.seleccionProductoJS.unidades_producto = $scope.unidades;

                    $scope.listaProductosNueva[i] = $scope.seleccionProductoJS;
                    break;

                }
            }

            $scope.seleccionProducto = {};
            $scope.tipoProducto = "";
            $scope.cantidadProducto = "";
            $scope.unidades = "";

        }

    }

    $scope.eliminarListaProductos = function () {

        if ($scope.seleccionProducto != undefined && $scope.seleccionProducto != "") {

            $scope.seleccionProductoJS = JSON.parse($scope.seleccionProducto);

            var n = $scope.listaProductos.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaProductos[i]._id == $scope.seleccionProductoJS._id) {

                    $scope.listaProductos.splice(i, 1);
                    break;

                }
            }

            var n = $scope.listaProductosNueva.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaProductosNueva[i].tipo_producto == $scope.seleccionProductoJS.tipo_producto) {

                    $scope.listaProductosNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionProducto = {};
            $scope.tipoProducto = "";
            $scope.cantidadProducto = "";
            $scope.unidades = "";


        }

    }

    $scope.cargarDatosSeleccionUtensilios = function () {

        if ($scope.seleccionUtensilio != undefined && $scope.seleccionUtensilio != "") {

            $scope.seleccionUtensilioJS = JSON.parse($scope.seleccionUtensilio);
            $scope.utensilios = $scope.seleccionUtensilioJS.utensilio._id;
            $scope.cantidadUtensilios = $scope.seleccionUtensilioJS.cantidad_utensilios;

        }
    }

    $scope.agregarListaUtensilios = function () {

        if ($scope.utensilios != undefined && $scope.utensilios != "" &&
            $scope.cantidadUtensilios != "" && $scope.cantidadUtensilios != undefined) {

            var n = $scope.listaUtensilios.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaUtensilios[i]._id == $scope.utensilios) {

                    var obj = {
                        utensilio: $scope.listaUtensilios[i],
                        cantidad_utensilios: $scope.cantidadUtensilios
                    }

                    $scope.listaUtensiliosSelecciondosNueva.push(obj);
                    break;

                }
            }

            $scope.utensilios = {};
            $scope.cantidadUtensilios = "";

        }

    }

    $scope.modificarListaUtensilios = function () {

        if ($scope.seleccionUtensilio != undefined && $scope.seleccionUtensilio != "" &&
            $scope.utensilios != undefined && $scope.utensilios != "" &&
            $scope.cantidadUtensilios != "" && $scope.cantidadUtensilios != undefined) {

            $scope.seleccionUtenJS = JSON.parse($scope.seleccionUtensilio);

            var n = $scope.listaUtensiliosSelecciondos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaUtensiliosSelecciondos[i]._id == $scope.seleccionUtenJS._id) {

                    var n1 = $scope.listaUtensilios.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaUtensilios[j]._id == $scope.utensilios) {

                            $scope.listaUtensiliosSelecciondos[i].utensilio = $scope.listaUtensilios[j];
                            $scope.listaUtensiliosSelecciondos[i].cantidad_utensilios = $scope.cantidadUtensilios;
                            break;

                        }

                    }
                }
            }

            var n = $scope.listaUtensiliosSelecciondosNueva.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaUtensiliosSelecciondosNueva[i].utensilio._id == $scope.seleccionUtensilioJS.utensilio._id) {

                    var n1 = $scope.listaUtensilios.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaUtensilios[j]._id == $scope.utensilios) {

                            $scope.listaUtensiliosSelecciondosNueva[i].utensilio = $scope.listaUtensilios[j];
                            $scope.listaUtensiliosSelecciondosNueva[i].cantidad_utensilios = $scope.cantidadUtensilios;
                            break;

                        }

                    }
                }
            }

            $scope.seleccionUtensilio = {};
            //$scope.utensilio = "";
            $scope.cantidadUtensilios = "";

        }

    }

    $scope.eliminarListaUtensilios = function () {

        if ($scope.seleccionUtensilio != undefined && $scope.seleccionUtensilio != "") {

            $scope.seleccionUtenJS = JSON.parse($scope.seleccionUtensilio);

            var n = $scope.listaUtensiliosSelecciondos.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaUtensiliosSelecciondos[i]._id == $scope.seleccionUtenJS._id) {

                    $scope.listaUtensiliosSelecciondos.splice(i, 1);
                    break;
                }
            }

            var n = $scope.listaUtensiliosSelecciondosNueva.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaUtensiliosSelecciondosNueva[i].utensilio._id == $scope.seleccionUtenJS.utensilio._id) {

                    $scope.listaUtensiliosSelecciondosNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionUtensilio = {};
            //$scope.utensilio = "";
            $scope.cantidadUtensilios = "";

        }

    }

}]);