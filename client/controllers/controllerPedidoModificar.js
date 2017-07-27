app.controller('ControllerPedidoModificar', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.urlModificar;
    $scope.urlAllPedidos;
    $scope.urlAllOrdenServicioEstadoViajeProceso;
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
    $scope.id = "";
    $scope.ordenServicio = "";
    $scope.observaciones = "";
    $scope.alimento = "";
    $scope.cantidadAlimento = "";
    $scope.unidadesAlimento = "";
    $scope.embarcacion = "";

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
            $scope.urlAllOrdenServicioEstadoViajeProceso = myProvider.getUrlBuscarOrdenServicioEstadoViajeProceso();

            $scope.urlAlimentos = myProvider.getUrlIngresoAlimentos();
            $scope.urlAlimentosModificar = myProvider.getUrlModificarAlimentos();
            $scope.urlBuscarAlimentos = myProvider.getUrlBuscarAlimentos();

            $scope.urlMaterialesSeleccionados = myProvider.getUrlIngresoMaterialesSeleccionados();
            $scope.urlMaterialesSeleccionadosModificar = myProvider.getUrlModificarMaterialesSeleccionados();
            $scope.urlBuscarMaterialesSeleccionados = myProvider.getUrlBuscarMaterialesSeleccionados();

            $scope.urlAllTipoAlimentos = myProvider.getUrlALLTipoAlimentosActivos();
            $scope.urlBuscarTipoAlimentos = myProvider.getUrlBuscarTipoAlimentos();

            $scope.urlAllMateriales = myProvider.getUrlAllMaterialesActivos();;
            $scope.urlBuscarMateriales = myProvider.getUrlBuscarMateriales();

            $scope.urlBuscarOrdenServicio = myProvider.getUrlBuscarOrdenServicio();
            $scope.urlBuscarEmbarcacion = myProvider.getUrlBuscarEmbarcacion();


            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

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

                    var n = $scope.listaPedidos.length;
                    var x = 0;
                    for (var i = 0; i < n; i++) {

                        var orden = {
                            id: $scope.listaPedidos[x].orden_servicio
                        }

                        $http.post($scope.urlBuscarOrdenServicio, orden)
                            .then(function (response) {

                                $scope.listaPedidos[x].orden_servicio = response.data;

                                var emb = {
                                    id: response.data.embarcacion
                                }
                                $http.post($scope.urlBuscarEmbarcacion, emb)
                                    .then(function (response) {

                                        $scope.listaPedidos[x++].orden_servicio.embarcacion = response.data;

                                    }, function errorCallback(response) {

                                        console.log(response);
                                    });

                            }, function errorCallback(response) {

                                console.log(response);
                            });
                    }

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
        window.location = "../login.html"
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
            orden_servicio: $scope.ordenServicio._id,
            alimentos: $scope.listaAlimentosArray,
            materiales: $scope.listaMaterialesArray,
            observaciones: $scope.observaciones
        };
        if (validarCamposVacios(obj)) {
            var q = $q.defer()
            q.resolve(
                $http.post($scope.urlModificar, obj)
                    .then(function successCallback(response) {

                        if (response.data == "true") {

                            $scope.iniciar();

                            swal({
                                title: "Modificaci\u00F3n Exitosa!",
                                type: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });

                        }

                    }, function errorCallback(response) {
                        $.notify("Error!", "error");
                    }));
            return q.promise
        }
    }

    $scope.modificarPedido = function () {

        console.log($scope.seleccionPedido);
        if ($scope.seleccionPedido != "" && $scope.seleccionPedido != null) {
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

            }, 500, false)
        } else {
            $(document.getElementById("listaOrden")).notify("Seleccione un Registro", { position: "left middle" });
            swal({
                title: "Seleccione un Registro!",
                type: "error",
                timer: 1500,
                showConfirmButton: false
            });
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

    $scope.buscarSeleccionListaPedido = function () {
        $scope.iniciarListas();
        if ($scope.seleccionPedido != '' && $scope.seleccionPedido != undefined) {

            $scope.selecPedJS = $scope.seleccionPedido;
            $scope.id = $scope.selecPedJS._id;
            $scope.ordenServicio = $scope.selecPedJS.orden_servicio;
            $scope.observaciones = $scope.selecPedJS.observaciones;
            $scope.embarcacion = $scope.selecPedJS.embarcacion;
            $scope.cargarListasSeleccion($scope.selecPedJS);

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

    $scope.redireccion = function () {
        window.location = "../menu.html"
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionPedido = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaPedido();

    }

}]);

// SOLO LETRAS
function soloLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo Letras", { position: "right" });
        return false;
    }
}

// SOLO SE INGRESAN NUMEROS
function soloNumeros(e, id) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo Numeros", { position: "right" });
        return false;
    }

}

// PERMITE INGRESAR NUMEROS, LETRAS /-(),.
function numerosLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " (),/.-0123456789áéíóúabcdefghijklmnñopqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo N\u00FAmeros, Letras, /.,-()", { position: "right" });
        return false;
    }
}

function validarCamposVacios(obj) {

    if (obj.observaciones == "" || obj.alimentos == "" || obj.materiales == "" ||
        obj.observaciones == null || obj.alimentos == null || obj.materiales == null) {

        if (obj.materiales == "" || obj.materiales == null) {
            $(document.getElementById("listmat")).notify("Lista Vac\u00EDa", { position: "right" });
        }
        if (obj.alimentos == "" || obj.alimentos == null) {
            $(document.getElementById("listali")).notify("Lista Vac\u00EDa", { position: "right" });
        }
        if (obj.observaciones == "" || obj.observaciones == null) {
            $(document.getElementById("letras")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        return false;
    } else {
        return true;
    }
}
