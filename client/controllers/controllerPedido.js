app.controller('ControllerPedido', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.url;
    $scope.urlAlimentos;
    $scope.urlMaterialesSeleccionados;
    $scope.urlAllOrdenServicioEstadoViajeProceso;
    $scope.urlAllMateriales;
    $scope.urlAllTipoAlimentos;
    $scope.buscarEmbarcacion;
    $scope.buscarPuerto;

    // Variables Alimentos y Pedido
    $scope.observaciones;
    $scope.ordenServicio;
    $scope.alimento;
    $scope.cantidadAlimento;
    $scope.unidades;
    $scope.inc;

    // Variables Materiales
    $scope.material;
    $scope.cantidadMaterial;
    $scope.seleccionAlimento;

    $scope.id;
    $scope.seleccionOrden;
    $scope.seleccionPedido;
    $scope.seleccionMaterial;
    $scope.seleccionTipoAlimento = "";


    $scope.listaOrdenServicio;
    $scope.listaAlimentos = [];
    $scope.listaMateriales = [];
    $scope.listaMaterialSelect = [];
    $scope.listaMaterialesArray = [];
    $scope.listaAlimentosArray = [];
    $scope.listaTipoAlimentos = [];

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoPedido();
            $scope.urlAlimentos = myProvider.getUrlIngresoAlimentos();
            $scope.urlMaterialesSeleccionados = myProvider.getUrlIngresoMaterialesSeleccionados();
            $scope.urlAllOrdenServicioEstadoViajeProceso = myProvider.getUrlBuscarOrdenServicioEstadoViajeProceso();
            $scope.urlAllMateriales = myProvider.getUrlAllMaterialesActivos();
            $scope.urlAllTipoAlimentos = myProvider.getUrlALLTipoAlimentosActivos();
            $scope.buscarEmbarcacion = myProvider.getUrlIdEmbarcacion();
            $scope.buscarPuerto = myProvider.getUrlIdPuerto();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.observaciones = "";
            $scope.ordenServicio = "";
            $scope.alimento = "";
            $scope.cantidadAlimento = "";
            $scope.unidades = "";

            $scope.material = "";
            $scope.cantidadMaterial = "";
            $scope.seleccionAlimento = "";

            $scope.id = "";
            $scope.inc = 0;
            $scope.seleccionPedido = "";
            $scope.seleccionMaterial = "";
            $scope.seleccionTipoAlimento = "";


            $scope.listaOrdenServicio = [];
            $scope.listaAlimentos = [];
            $scope.listaMateriales = [];
            $scope.listaMaterialSelect = [];
            $scope.listaMaterialesArray = [];
            $scope.listaAlimentosArray = [];
            $scope.listaTipoAlimentos = [];            

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


            $http.get($scope.urlAllOrdenServicioEstadoViajeProceso)
                .then(function (response) {

                    $scope.listaOrdenServicio = response.data;

                    var n = $scope.listaOrdenServicio.length;
                    var x = 0;
                    var y = 0;
                    var z = 0;
                    for (var i = 0; i < n; i++) {

                        var emb = {
                            id: $scope.listaOrdenServicio[i].embarcacion
                        };
                        $http.post($scope.buscarEmbarcacion, emb)
                            .then(function (response) {

                                $scope.listaOrdenServicio[x++].embarcacion = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var puertEmb = {
                            id: $scope.listaOrdenServicio[i].puerto_embarque
                        };
                        $http.post($scope.buscarPuerto, puertEmb)
                            .then(function (response) {

                                $scope.listaOrdenServicio[y++].puerto_embarque = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var puertoDesem = {
                            id: $scope.listaOrdenServicio[i].puerto_desembarque
                        };
                        $http.post($scope.buscarPuerto, puertoDesem)
                            .then(function (response) {

                                $scope.listaOrdenServicio[z++].puerto_desembarque = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoAlimentos = function (pos) {

        var obj = {
            tipo_alimento: $scope.listaAlimentos[pos].tipo_alimento._id,
            cantidad_alimento: $scope.listaAlimentos[pos].cantidad_alimento,
            unidades_alimento: $scope.listaAlimentos[pos].unidades_alimento
        }
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

    $scope.ingresoMaterialesSeleccionados = function (pos) {

        var aux = $scope.listaMaterialSelect[pos];

        var obj = {
            material: aux.material._id,
            cantidad_material: aux.cantidad_material
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

    $scope.ingresoPesidoBase = function () {

        var obj = {
            orden_servicio: $scope.ordenServicio,
            alimentos: $scope.listaAlimentosArray,
            materiales: $scope.listaMaterialesArray,
            observaciones: $scope.observaciones
        };
        if (validarCamposVacios(obj)) {
            var q = $q.defer()
            q.resolve(

                $http.post($scope.url, obj)
                    .then(function successCallback(response) {

                        if (response.data == "true") {

                            $scope.iniciar();
                            swal({
                                title: "Ingreso Exitoso!",
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

    $scope.ingresoPedido = function () {
        
        if ($scope.ordenServicio != "" && $scope.ordenServicio != null) {
            var dimProduc = $scope.listaAlimentos.length;

            for (var i = 0; i < dimProduc; i++) {

                $scope.ingresoAlimentos(i);

            }

            var dimUtenSelect = $scope.listaMaterialSelect.length;

            for (var i = 0; i < dimUtenSelect; i++) {

                $scope.ingresoMaterialesSeleccionados(i);

            }

            $timeout(function () {

                $scope.ingresoPesidoBase();

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

    $scope.cargarSeleccionListaMateriales = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialesJS = JSON.parse($scope.seleccionMaterial);
            $scope.listaMateriales.push($scope.seleccionMaterialesJS.material);
            $scope.material = $scope.seleccionMaterialesJS.material._id;
            $scope.cantidadMaterial = $scope.seleccionMaterialesJS.cantidad_material;

        }
    }

    $scope.agregarListaMateriales = function () {

        if ($scope.material != undefined && $scope.material != "" &&
            $scope.cantidadMaterial != "" && $scope.cantidadMaterial != undefined) {

            var n = $scope.listaMateriales.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaMateriales[i]._id == $scope.material) {

                    var obj = {
                        id: $scope.inc++,
                        material: $scope.listaMateriales[i],
                        cantidad_material: $scope.cantidadMaterial
                    }
                    $scope.listaMaterialSelect.push(obj);
                    //$scope.listaMateriales.splice(i, 1);
                    //if ($scope.listaMateriales.length != 0)
                    //    $scope.material = $scope.listaMateriales[0]._id;
                    $scope.cantidadMaterial = "";
                    break;
                }
            }
        }

    }

    $scope.modificarListaMateriales = function () {

        if ($scope.material != undefined && $scope.material != "" &&
            $scope.material != undefined && $scope.material != "" &&
            $scope.cantidadMaterial != "" && $scope.cantidadMaterial != undefined) {

            $scope.seleccionMaterialesJS = JSON.parse($scope.seleccionMaterial);
            var n = $scope.listaMateriales.length;
            var n1 = $scope.listaMaterialSelect.length;
            for (var i = 0; i < n1; i++) {
                if ($scope.listaMaterialSelect[i].id == $scope.seleccionMaterialesJS.id) {
                    for (var j = 0; j < n; j++) {
                        if ($scope.listaMateriales[j]._id == $scope.material) {
                            $scope.listaMaterialSelect[i].material = $scope.listaMateriales[j];
                            $scope.listaMaterialSelect[i].cantidad_material = $scope.cantidadMaterial;
                            $scope.listaMateriales.splice(j, 1);
                            $scope.cantidadMaterial = 0;
                            if ($scope.listaMateriales.length != 0)
                                $scope.material = $scope.listaMateriales[0]._id;
                            break;
                        }
                    }
                }
            }
        }

    }

    $scope.quitarSeleccionMaterial = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialJS = JSON.parse($scope.seleccionMaterial);

            var n = $scope.listaMaterialSelect.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialSelect[i].id == $scope.seleccionMaterialJS.id) {
                    $scope.listaMaterialSelect.splice(i, 1);
                    $scope.seleccionMaterial = {};
                    $scope.cantidadMaterial = 0;
                    break;
                }
            }



        }

    }

    $scope.cargarSeleccionListaAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);

            $scope.id = $scope.seleccionAlimentoJS.id;
            $scope.alimento = $scope.seleccionAlimentoJS.tipo_alimento._id;
            $scope.cantidadAlimento = $scope.seleccionAlimentoJS.cantidad_alimento;
            $scope.unidades = $scope.seleccionAlimentoJS.unidades_alimento;

        }
    }

    $scope.agregarListaAlimentos = function () {

        if ($scope.alimento != "" && $scope.cantidadAlimento != "" && $scope.unidades != "" &&
            $scope.alimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidades != undefined) {

            var n = $scope.listaTipoAlimentos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaTipoAlimentos[i]._id == $scope.alimento) {
                    var obj = {
                        id: $scope.inc++,
                        tipo_alimento: $scope.listaTipoAlimentos[i],
                        cantidad_alimento: $scope.cantidadAlimento,
                        unidades_alimento: $scope.unidades
                    }

                    //$scope.listaTipoAlimentos.splice(i, 1);
                    $scope.listaAlimentos.push(obj);
                    $scope.cantidadAlimento = "";
                    $scope.unidades = "";
                }
            }
        }
    }

    $scope.modificarListaAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "" &&
            $scope.alimento != "" && $scope.cantidadAlimento != "" && $scope.unidades != "" &&
            $scope.alimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidades != undefined) {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);
            var n = $scope.listaAlimentos.length;

            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentos[i].id == $scope.seleccionAlimentoJS.id) {

                    var n1 = $scope.listaTipoAlimentos.length;
                    for (var j = 0; j < n1; j++) {
                        if ($scope.listaTipoAlimentos[j]._id == $scope.alimento) {

                            $scope.listaAlimentos[i].tipo_alimento = $scope.listaTipoAlimentos[j];
                            $scope.listaAlimentos[i].cantidad_alimento = $scope.cantidadAlimento;
                            $scope.listaAlimentos[i].unidades_alimento = $scope.unidades;

                            $scope.seleccionAlimento = {};
                            $scope.cantidadAlimento = "";
                            $scope.unidades = "";
                            break;

                        }
                    }
                }
            }

        }
    }

    $scope.quitarSeleccionAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);
            var n = $scope.listaAlimentos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentos[i].id == $scope.seleccionAlimentoJS.id) {
                    $scope.listaAlimentos.splice(i, 1);
                    $scope.seleccionAlimento = {};
                    break;
                }
            }
            //$scope.alimento = "";
            $scope.cantidadAlimento = "";
            $scope.unidades = "";
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

        $scope.ordenServicio = item._id;
        $scope.selectedRow = index;

    }

}]);

// SOLO LETRAS
function soloLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " �����abcdefghijklmn�opqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
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
    letras = " (),/.-0123456789�����abcdefghijklmn�opqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
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
