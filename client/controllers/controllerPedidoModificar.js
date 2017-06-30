app.controller('ControllerPedidoModificar', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.urlModificar;
    $scope.urlAllPedidos;
    $scope.urlAllOrdenServicio;
    $scope.urlAlimentos;
    $scope.urlBuscarAlimentos;
    $scope.urlAlimentosModificar;
    $scope.urlMaterialesSeleccionados;
    $scope.urlMaterialesSeleccionadosModificar;
    $scope.urlBuscarMaterialesSeleccionados;
    $scope.urlAllTipoAlimentos;
    $scope.urlBuscarTipoAlimentos;
    $scope.urlAllMateriales;
    $scope.urlBuscarTipoMateriales;
    $scope.urlBuscarOrdenServicio;
    $scope.urlBuscarEmbarcacion;

    // Variables Producto y Pedido
    $scope.id;
    $scope.ordenServicio;
    $scope.observaciones;
    $scope.alimento;
    $scope.cantidadAlimento;
    $scope.unidadesAlimento;
    $scope.embarcacion;

    // Variables Materiales
    $scope.material;
    $scope.cantidadMaterial;

    //Selecciones
    $scope.seleccionMaterial;
    $scope.seleccionAlimento;
    $scope.seleccionPedido;

    // Incremento
    $scope.inc = 0;

    //Listas
    $scope.listaPedidos = [];
    $scope.listaOrdenServicio = [];
    $scope.listaAlimentos = [];
    $scope.listaAlimentosNueva = [];
    $scope.listaMateriales = [];
    $scope.listaTipoAlimentos = [];
    $scope.listaMaterialesSeleccionados = [];
    $scope.listaMaterialesSeleccionadosNueva = [];
    $scope.listaMaterialesSelect = [];
    $scope.listaMaterialesArray = [];
    $scope.listaAlimentosArray = [];

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {

            $scope.urlModificar = myProvider.getUrlModificarPedido();

            $scope.urlAllPedidos = myProvider.getUrlAllPedido();
            $scope.urlAllOrdenServicio = myProvider.getUrlAllOrdenServicio();

            $scope.urlAlimentos = myProvider.getUrlIngresoAlimentos();
            $scope.urlAlimentosModificar = myProvider.getUrlModificarAlimentos();
            $scope.urlBuscarAlimentos = myProvider.getUrlBuscarAlimentos();

            $scope.urlMaterialesSeleccionados = myProvider.getUrlIngresoMaterialesSeleccionados();
            $scope.urlMaterialesSeleccionadosModificar = myProvider.getUrlModificarMaterialesSeleccionados();
            $scope.urlBuscarMaterialesSeleccionados = myProvider.getUrlBuscarMaterialesSeleccionados();

            $scope.urlAllTipoAlimentos = myProvider.getUrlALLTipoAlimentos();
            $scope.urlBuscarTipoAlimentos = myProvider.getUrlBuscarTipoAlimentos();

            $scope.urlAllMateriales = myProvider.getUrlAllMateriales();;
            $scope.urlBuscarMateriales = myProvider.getUrlBuscarMateriales();

            $scope.urlBuscarOrdenServicio = myProvider.getUrlBuscarOrdenServicio();
            $scope.urlBuscarEmbarcacion = myProvider.getUrlBuscarEmbarcacion();


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

            // Incremento
            $scope.inc = 0;

            //Listas
            $scope.listaPedidos = [];
            $scope.listaAlimentos = [];
            $scope.listaAlimentosNueva = [];
            $scope.listaMateriales = [];
            $scope.listaTipoAlimentos = [];
            $scope.listaMaterialesSeleccionados = [];
            $scope.listaMaterialesSeleccionadosNueva = [];
            $scope.listaMaterialesSelect = [];
            $scope.listaMaterialesArray = [];
            $scope.listaAlimentosArray = [];

            $http.get($scope.urlAllPedidos)
                .then(function (response) {

                    $scope.listaPedidos = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoAlimentos)
                .then(function (response) {

                    $scope.listaTipoAlimentos = response.data;
                    $scope.alimento = $scope.listaTipoAlimentos[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllMateriales)
                .then(function (response) {

                    $scope.listaMateriales = response.data;
                    $scope.material = $scope.listaMateriales[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    } else {
        window.location = "/login.html"
    }

    $scope.iniciarListas = function () {

        // Variables Producto y Pedido
        $scope.id = "";
        $scope.ordenServicio = "";
        $scope.observaciones = "";
        //$scope.alimento = "";
        $scope.cantidadAlimento = "";
        $scope.unidadesAlimento = "";

        // Variables Materiales
        //$scope.material = "";
        $scope.cantidadMaterial = "";

        //Selecciones
        $scope.seleccionMaterial = "";
        $scope.seleccionAlimento = "";

        // Incremento
        $scope.inc = 0;

        //Listas
        $scope.listaAlimentos = [];
        $scope.listaAlimentosNueva = [];
        $scope.listaMaterialesSeleccionados = [];
        $scope.listaMaterialesSeleccionadosNueva = [];
        $scope.listaMaterialesSelect = [];
        $scope.listaMaterialesArray = [];
        $scope.listaAlimentosArray = [];

    }

    $scope.ingresoAlimentos = function (pos) {

        var obj = {
            tipo_alimento: $scope.listaAlimentosNueva[pos].tipo_alimento._id,
            cantidad_alimento: $scope.listaAlimentosNueva[pos].cantidad_alimento,
            unidades_alimento: $scope.listaAlimentosNueva[pos].unidades_alimento
        };
        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlAlimentos, obj)
                .then(function successCallback(response) {

                    $scope.listaAlimentosArray.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarAlimentos = function (pos) {

        var obj = {
            id: $scope.listaAlimentos[pos]._id,
            tipo_alimento: $scope.listaAlimentos[pos].tipo_alimento._id,
            cantidad_alimento: $scope.listaAlimentos[pos].cantidad_alimento,
            unidades_alimento: $scope.listaAlimentos[pos].unidades_alimento
        };

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlAlimentosModificar, obj)
                .then(function successCallback(response) {

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoMaterialesSeleccionados = function (pos) {

        var aux = $scope.listaMaterialesSeleccionadosNueva[pos];

        var obj = {
            material: $scope.listaMaterialesSeleccionadosNueva[pos].material._id,
            cantidad_material: $scope.listaMaterialesSeleccionadosNueva[pos].cantidad_material
        }

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlMaterialesSeleccionados, obj)
                .then(function successCallback(response) {

                    $scope.listaMaterialesArray.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarMaterialesSeleccionados = function (pos) {

        var obj = {
            id: $scope.listaMaterialesSeleccionados[pos]._id,
            material: $scope.listaMaterialesSeleccionados[pos].material._id,
            cantidad_material: $scope.listaMaterialesSeleccionados[pos].cantidad_material
        }

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlMaterialesSeleccionadosModificar, obj)
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
            alimentos: $scope.listaAlimentosArray,
            materiales: $scope.listaMaterialesArray,
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

        var dimAlimMod = $scope.listaAlimentos.length;

        for (var i = 0; i < dimAlimMod; i++) {

            $scope.modificarAlimentos(i);
            $scope.listaAlimentosArray.push($scope.listaAlimentos[i]._id.toString());
            console.log($scope.listaAlimentos);
            console.log($scope.listaAlimentosArray);
        }

        var dimMatMod = $scope.listaMaterialesSeleccionados.length;

        for (var i = 0; i < dimMatMod; i++) {

            $scope.modificarMaterialesSeleccionados(i);
            $scope.listaMaterialesArray.push($scope.listaMaterialesSeleccionados[i]._id.toString());
        }

        var dimAlim = $scope.listaAlimentosNueva.length;

        for (var i = 0; i < dimAlim; i++) {

            $scope.ingresoAlimentos(i);

        }

        var dimMat = $scope.listaMaterialesSeleccionadosNueva.length;

        for (var i = 0; i < dimMat; i++) {

            $scope.ingresoMaterialesSeleccionados(i);

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
        $scope.iniciarListas();
        if ($scope.seleccionPedido != '' && $scope.seleccionPedido != undefined) {

            $scope.selecPedJS = JSON.parse($scope.seleccionPedido);
            $scope.id = $scope.selecPedJS._id;
            $scope.ordenServicio = $scope.selecPedJS.orden_servicio;
            $scope.observaciones = $scope.selecPedJS.observaciones;
            $scope.embarcacion = $scope.selecPedJS.embarcacion;
            $scope.cargarListasSeleccion($scope.selecPedJS);

            var orden = {
                id: $scope.selecPedJS.orden_servicio
            }

            $http.post($scope.urlBuscarOrdenServicio, orden)
                .then(function (response) {

                    $scope.ordenServicioObj = response.data;

                    var emb = {
                        id: $scope.ordenServicioObj.embarcacion
                    }
                    $http.post($scope.urlBuscarEmbarcacion, emb)
                        .then(function (response) {

                            $scope.embarcacion = response.data.nombre_embarcacion;

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    }

    $scope.cargarListasSeleccion = function (pedido) {

        var n = pedido.alimentos.length;
        var listAlim = pedido.alimentos;
        var k = 0;
        for (var i = 0; i < n; i++) {

            var ali = { id: listAlim[i] };
            $http.post($scope.urlBuscarAlimentos, ali)
                .then(function (response) {

                    $scope.listaAlimentos.push(response.data);

                    var tpAlim = {
                        id: response.data.tipo_alimento
                    }

                    $http.post($scope.urlBuscarTipoAlimentos, tpAlim)
                        .then(function (response) {

                            $scope.listaAlimentos[k++].tipo_alimento = response.data;

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

        var n = pedido.materiales.length;
        var listMat = pedido.materiales;
        var x = 0;
        for (var i = 0; i < n; i++) {

            var matSelect = {
                id: listMat[i]
            };
            $http.post($scope.urlBuscarMaterialesSeleccionados, matSelect)
                .then(function (response) {

                    $scope.listaMaterialesSeleccionados.push(response.data);

                    var mat = {
                        id: response.data.material
                    }

                    $http.post($scope.urlBuscarMateriales, mat)
                        .then(function (response) {

                            $scope.listaMaterialesSeleccionados[x++].material = response.data;

                        }, function errorCallback(response) {

                            console.log(response);

                        });

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

    }

    $scope.cargarDatosSeleccionAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);

            $scope.alimento = $scope.seleccionAlimentoJS.tipo_alimento._id;
            $scope.cantidadAlimento = $scope.seleccionAlimentoJS.cantidad_alimento;
            $scope.unidadesAlimento = $scope.seleccionAlimentoJS.unidades_alimento;

        }
    }

    $scope.agregarListaAlimentos = function () {

        if ($scope.alimento != "" && $scope.cantidadAlimento != "" && $scope.unidadesAlimento != "" &&
            $scope.alimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidadesAlimento != undefined) {

            var n = $scope.listaTipoAlimentos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaTipoAlimentos[i]._id == $scope.alimento) {

                    var obj = {
                        _id: $scope.inc++,
                        tipo_alimento: $scope.listaTipoAlimentos[i],
                        cantidad_alimento: $scope.cantidadAlimento,
                        unidades_alimento: $scope.unidadesAlimento
                    }

                    $scope.listaAlimentosNueva.push(obj);

                }
            }
            $scope.cantidadAlimento = "";
            $scope.unidadesAlimento = "";
        }
    }

    $scope.modificarListaAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "" &&
            $scope.alimento != "" && $scope.cantidadAlimento != "" && $scope.unidadesAlimento != "" &&
            $scope.alimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidadesAlimento != undefined) {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);

            var n = $scope.listaAlimentos.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaAlimentos[i]._id == $scope.seleccionAlimentoJS._id) {

                    var n1 = $scope.listaTipoAlimentos.length;
                    for (var j = 0; j < n1; j++) {
                        if ($scope.listaTipoAlimentos[j]._id == $scope.alimento) {

                            $scope.seleccionAlimentoJS.tipo_alimento = $scope.listaTipoAlimentos[j];
                            $scope.seleccionAlimentoJS.cantidad_alimento = $scope.cantidadAlimento;
                            $scope.seleccionAlimentoJS.unidades_alimento = $scope.unidadesAlimento;

                            $scope.listaAlimentos[i] = $scope.seleccionAlimentoJS;
                            break;
                        }
                    }

                }
            }

            var n = $scope.listaAlimentosNueva.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaAlimentosNueva[i]._id == $scope.seleccionAlimentoJS._id) {

                    var n1 = $scope.listaTipoAlimentos.length;
                    for (var j = 0; j < n1; j++) {
                        if ($scope.listaTipoAlimentos[j]._id == $scope.alimento) {

                            $scope.seleccionAlimentoJS.tipo_alimento = $scope.listaTipoAlimentos[j];
                            $scope.seleccionAlimentoJS.cantidad_alimento = $scope.cantidadAlimento;
                            $scope.seleccionAlimentoJS.unidades_alimento = $scope.unidadesAlimento;

                            $scope.listaAlimentosNueva[i] = $scope.seleccionAlimentoJS;
                            break;
                        }
                    }

                }
            }

            //$scope.alimento = "";
            $scope.cantidadAlimento = "";
            $scope.unidadesAlimento = "";

        }

    }

    $scope.eliminarListaAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);

            var n = $scope.listaAlimentos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentos[i]._id == $scope.seleccionAlimentoJS._id) {

                    $scope.listaAlimentos.splice(i, 1);
                    break;

                }
            }

            var n = $scope.listaAlimentosNueva.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentosNueva[i]._id == $scope.seleccionAlimentoJS._id) {

                    $scope.listaAlimentosNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionProducto = {};
            $scope.alimento = "";
            $scope.cantidadAlimento = "";
            $scope.unidadesAlimento = "";


        }

    }

    $scope.cargarDatosSeleccionMaterial = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialJS = JSON.parse($scope.seleccionMaterial);
            $scope.material = $scope.seleccionMaterialJS.material._id;
            $scope.cantidadMaterial = $scope.seleccionMaterialJS.cantidad_material;

        }
    }

    $scope.agregarListaMaterial = function () {

        if ($scope.material != undefined && $scope.material != "" &&
            $scope.cantidadMaterial != "" && $scope.cantidadMaterial != undefined) {

            var n = $scope.listaMateriales.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaMateriales[i]._id == $scope.material) {

                    var obj = {
                        _id: $scope.inc++,
                        material: $scope.listaMateriales[i],
                        cantidad_material: $scope.cantidadMaterial
                    }

                    $scope.listaMaterialesSeleccionadosNueva.push(obj);
                    break;

                }
            }

            $scope.material = {};
            $scope.cantidadMaterial = "";

        }

    }

    $scope.modificarListaMaterial = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "" &&
            $scope.material != undefined && $scope.material != "" &&
            $scope.cantidadMaterial != "" && $scope.cantidadMaterial != undefined) {

            $scope.seleccionMaterialJS = JSON.parse($scope.seleccionMaterial);

            var n = $scope.listaMaterialesSeleccionados.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaMaterialesSeleccionados[i]._id == $scope.seleccionMaterialJS._id) {

                    var n1 = $scope.listaMateriales.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaMateriales[j]._id == $scope.material) {

                            $scope.listaMaterialesSeleccionados[i].material = $scope.listaMateriales[j];
                            $scope.listaMaterialesSeleccionados[i].cantidad_material = $scope.cantidadMaterial;
                            break;

                        }

                    }
                }
            }

            var n = $scope.listaMaterialesSeleccionadosNueva.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialesSeleccionadosNueva[i]._id == $scope.seleccionMaterialJS._id) {

                    var n1 = $scope.listaMateriales.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaMateriales[j]._id == $scope.material) {

                            $scope.listaMaterialesSeleccionadosNueva[i].material = $scope.listaMateriales[j];
                            $scope.listaMaterialesSeleccionadosNueva[i].cantidad_material = $scope.cantidadMaterial;
                            break;

                        }

                    }
                }
            }

            //$scope.seleccionMaterial = {};
            $scope.cantidadMaterial = "";

        }

    }

    $scope.eliminarListaMaterial = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialJS = JSON.parse($scope.seleccionMaterial);

            var n = $scope.listaMaterialesSeleccionados.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaMaterialesSeleccionados[i]._id == $scope.seleccionMaterialJS._id) {

                    $scope.listaMaterialesSeleccionados.splice(i, 1);
                    break;
                }
            }

            var n = $scope.listaMaterialesSeleccionadosNueva.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaMaterialesSeleccionadosNueva[i]._id == $scope.seleccionMaterialJS._id) {

                    $scope.listaMaterialesSeleccionadosNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionMaterial = {};
            $scope.cantidadMaterial = "";

        }

    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);