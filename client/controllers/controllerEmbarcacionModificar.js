app.controller('ControllerEmbarcacionModificar', ['$scope', '$http', 'myProvider', "$timeout", function ($scope, $http, myProvider, $timeout) {


    $scope.urlModificar;
    $scope.urlAllEmbarcacion;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoEmbarcacion;
    $scope.urlAllEstadoEmbarcacion;
    $scope.urlAllPropietarios;
    $scope.urlAllTripulantes;
    $scope.urlAllTripulantesCapitan;
    $scope.urlAllTipoTripulantesCapitanTimonel;
    $scope.buscarIdPropietario;
    $scope.buscarIdEstadoEmbarcacion;

    //atributos
    $scope.id;
    $scope.nombreEmbarcacion;
    $scope.numeroMatricula;
    $scope.esloraTotal;
    $scope.manga;
    $scope.puntual;
    $scope.calado;
    $scope.fechaConstruccion;
    $scope.propietario;
    $scope.propulsion;
    $scope.tipoCombustible;
    $scope.tonelajeBruto;
    $scope.capacidadCarga;
    $scope.tipoEmbarcacion;
    $scope.capitan = "";
    $scope.estado = "";

    //Listas
    $scope.busqueda;
    $scope.listaEmbarcacion;
    $scope.listaTipoEmbarcacion;
    $scope.listaTipoCombustible;
    $scope.listaPropietarios;
    $scope.listaTripulante;
    $scope.listaTripulanteAux;
    $scope.listaTripulanteSelect = [];
    $scope.listaTripulanteIngresar = [];
    $scope.listaTripulantesCapitanes;
    $scope.seleccionTripulante;
    $scope.seleccionTripulanteAux;


    //Selecciones
    $scope.seleccion = "";
    $scope.seleccionEmbarcacion = "";

    //ver como filtrar la lista de tripulantes....

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.urlModificar = myProvider.getUrlModificarEmbarcacion();
            $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
            $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacionActivos();

            $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
            $scope.urlAllPropietarios = myProvider.getUrlAllPropietarioActivos();
            $scope.urlAllTripulantes = myProvider.getUrlAllTripulanteActivos();
            $scope.urlAllTipoTripulantesCapitanTimonel = myProvider.getUrlAllTipoTripulanteCapitanTimonel();
            $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();
            $scope.urlAllEstadoEmbarcacion = myProvider.getUrlAllEstadoEmbarcacionActivos();
            $scope.buscarIdPropietario = myProvider.getUrlBuscarIdPropietario();
            $scope.buscarIdEstadoEmbarcacion = myProvider.getUrlBuscarIdEstadoEmbarcacion();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id = "";
            $scope.nombreEmbarcacion = "";
            $scope.numeroMatricula = "";
            $scope.esloraTotal = "";
            $scope.manga = "";
            $scope.puntual = "";
            $scope.calado = "";
            $scope.fechaConstruccion = "";
            $scope.propietario = "";
            $scope.propulsion = "";
            $scope.tipoCombustible = "";
            $scope.tonelajeBruto = "";
            $scope.capacidadCarga = "";
            $scope.tipoEmbarcacion = "";

            //Listas
            $scope.busqueda;
            $scope.listaEmbarcacion;
            $scope.listaTipoEmbarcacion;
            $scope.listaTipoCombustible;
            $scope.listaPropietarios;
            $scope.listaTripulante;
            $scope.listaTripulanteSelect = [];
            $scope.listaTripulanteIngresar = [];
            $scope.listaTripulantesCapitanes;
            $scope.seleccionTripulante;
            $scope.seleccionTripulanteAux;

            //Selecciones
            $scope.seleccion = "";
            $scope.seleccionEmbarcacion = "";


            $http.get($scope.urlAllEstadoEmbarcacion)
                .then(function (response) {

                    $scope.listaEstadoEmbarcacion = response.data;
                    $scope.estado = $scope.listaEstadoEmbarcacion[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });


            $http.get($scope.urlAllEmbarcacion)
                .then(function (response) {

                    $scope.listaEmbarcacion = response.data;

                    var n = $scope.listaEmbarcacion.length;
                    var x = 0;
                    var y = 0;
                    for (var i = 0; i < n; i++) {

                        var prop = {
                            id: $scope.listaEmbarcacion[i].propietario
                        };
                        $http.post($scope.buscarIdPropietario, prop)
                            .then(function (response) {

                                $scope.listaEmbarcacion[x++].propietario = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var estad = {
                            id: $scope.listaEmbarcacion[i].estado
                        };
                        $http.post($scope.buscarIdEstadoEmbarcacion, estad)
                            .then(function (response) {

                                $scope.listaEmbarcacion[y++].estado = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });
                        
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllPropietarios)
                .then(function (response) {

                    $scope.listaPropietarios = response.data;
                    $scope.propietario = $scope.listaPropietarios[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoCombustible)
                .then(function (response) {

                    $scope.listaTipoCombustible = response.data;
                    $scope.tipoCombustible = $scope.listaTipoCombustible[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoEmbarcacion)
                .then(function (response) {

                    $scope.listaTipoEmbarcacion = response.data;
                    $scope.tipoEmbarcacion = $scope.listaTipoEmbarcacion[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoTripulantesCapitanTimonel)
                .then(function (response) {

                    $scope.listaTipoCapitanTimonel = response.data;
                    var obj = {
                        idCapitan: $scope.listaTipoCapitanTimonel[0]._id,
                        idTimonel: $scope.listaTipoCapitanTimonel[1]._id
                    }

                    $http.post($scope.urlAllTripulantesCapitan, obj)
                        .then(function (response) {

                            $scope.listaTripulantesCapitanes = response.data;
                            $scope.capitan = $scope.listaTripulantesCapitanes[0]._id;

                        }, function errorCallback(response) {

                            console.log(response);
                        });


                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTripulantes)
                .then(function (response) {

                    $scope.listaTripulante = response.data;
                    $scope.seleccionTripulanteAux = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });


        }

    } else {
        window.location = "../login.html"
    }

    $scope.iniciarLista = function () {

        $scope.listaTripulante = [];
        $scope.listaTripulanteSelect = [];
        var n = $scope.seleccionTripulanteAux.length;
        for (var i = 0; i < n; i++) {
            $scope.listaTripulante.push($scope.seleccionTripulanteAux[i]);
        }

    }

    $scope.modificarEmbarcacion = function () {

        if ($scope.seleccionEmbarcacion != "") {
            var dimeTrip = $scope.listaTripulanteSelect.length;
            for (var i = 0; i < dimeTrip; i++) {

                $scope.listaTripulanteIngresar.push($scope.listaTripulanteSelect[i]._id.toString());

            }

            var obj = {
                id: $scope.id,
                nombre_embarcacion: $scope.nombreEmbarcacion,
                num_matricula: $scope.numeroMatricula,
                eslora_total: $scope.esloraTotal,
                manga: $scope.manga,
                puntual: $scope.puntual,
                calado: $scope.calado,
                fecha_construccion: $scope.fechaConstruccion,
                propietario: $scope.propietario,
                propulsion: $scope.propulsion,
                tipo_combustible: $scope.tipoCombustible,
                tonelaje_bruto: $scope.tonelajeBruto,
                capacidad_carga: $scope.capacidadCarga,
                tipo_embarcacion: $scope.tipoEmbarcacion,
                capitan_embarcacion: $scope.capitan,
                tripulantes: $scope.listaTripulanteIngresar,
                estado: $scope.estado
            };

            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        if (response.data == "true") {

                            $scope.iniciar();

                            swal({
                                title: "Modificaci\u00F3n Exitosa!",
                                type: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });

                        } else
                            $(document.getElementById("nombre")).notify("Embacaci\u00F3n ya Existe", { position: "right" });

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });

            }
        } else {
            $(document.getElementById("mensaje")).notify("Seleccione un Registro", { position: "left middle" });
            swal({
                title: "Seleccione un Registro!",
                type: "error",
                timer: 1500,
                showConfirmButton: false
            });
        }
    }

    $scope.cargarTripulantes = function () {

        var n = $scope.selecEmbarJS.tripulantes.length;
        var listTrip = $scope.selecEmbarJS.tripulantes;
        for (var i = 0; i < n; i++) {
            var n1 = $scope.listaTripulante.length;
            for (var j = 0; j < n1; j++) {

                if ($scope.listaTripulante[j]._id == listTrip[i]) {
                    $scope.listaTripulanteSelect.push($scope.listaTripulante[j]);
                    $scope.listaTripulante.splice(j, 1);
                    break;
                }

            }
        }
    }

    $scope.buscarSeleccionListaEmbarcacion = function () {

        $scope.iniciarLista();
        if ($scope.seleccionEmbarcacion != '' && $scope.seleccionEmbarcacion != undefined) {

            $scope.selecEmbarJS = $scope.seleccionEmbarcacion;
            
            $scope.id = $scope.selecEmbarJS._id;
            $scope.nombreEmbarcacion = $scope.selecEmbarJS.nombre_embarcacion;
            $scope.numeroMatricula = $scope.selecEmbarJS.num_matricula;
            $scope.esloraTotal = $scope.selecEmbarJS.eslora_total;
            $scope.manga = $scope.selecEmbarJS.manga;
            $scope.puntual = $scope.selecEmbarJS.puntual;
            $scope.calado = $scope.selecEmbarJS.calado;
            $scope.fechaConstruccion = $scope.selecEmbarJS.fecha_construccion.toString();
            $scope.propietario = $scope.selecEmbarJS.propietario._id;
            $scope.propulsion = $scope.selecEmbarJS.propulsion;
            $scope.tipoCombustible = $scope.selecEmbarJS.tipo_combustible;
            $scope.tonelajeBruto = $scope.selecEmbarJS.tonelaje_bruto;
            $scope.capacidadCarga = $scope.selecEmbarJS.capacidad_carga;
            $scope.tipoEmbarcacion = $scope.selecEmbarJS.tipo_embarcacion;
            $scope.capitan = $scope.selecEmbarJS.capitan_embarcacion;
            $scope.fechaConstruccion = $scope.selecEmbarJS.fecha_construccion;
            $scope.estado = $scope.selecEmbarJS.estado._id;

            $scope.cargarTripulantes();

        }
    }

    $scope.agregarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != undefined && $scope.seleccionTripulante != "") {

            $scope.seleccionTripulanteJS = JSON.parse($scope.seleccionTripulante);

            var n = $scope.listaTripulante.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaTripulante[i]._id == $scope.seleccionTripulanteJS._id) {
                    $scope.listaTripulanteSelect.push($scope.seleccionTripulanteJS);
                    $scope.listaTripulante.splice(i, 1);
                    $scope.seleccionTripulante = {};
                    break;
                }
            }

        }

    }

    $scope.quitarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != undefined && $scope.seleccionTripulante != "") {

            $scope.seleccionTripulanteJS = JSON.parse($scope.seleccionTripulante);

            var n = $scope.listaTripulanteSelect.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaTripulanteSelect[i]._id == $scope.seleccionTripulanteJS._id) {
                    $scope.listaTripulante.push($scope.seleccionTripulanteJS);
                    $scope.listaTripulanteSelect.splice(i, 1);
                    $scope.seleccionTripulante = {};
                    break;
                }
            }

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

        $scope.seleccionEmbarcacion = item;
        $scope.selectedRow = index;
        $scope.buscarSeleccionListaEmbarcacion();
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

// SOLO FORMATO DE FECHA
function validarFecha(e, id) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "/0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Formato: 01/12/2017", { position: "right" });
        return false;
    }

}

// PERMITE INGRESAR NUMEROS, LETRAS /-(),.
function numerosLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "-0123456789abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo N\u00FAmeros, Letras, - ", { position: "right" });
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

function validarCamposVacios(obj) {
    if (obj.nombre_embarcacion == "" || obj.num_matricula == "" || obj.eslora_total == "" || obj.manga == "" || obj.puntual == "" ||
        obj.calado == "" || obj.fecha_construccion == "" || obj.propietario == "" || obj.propulsion == "" || obj.tipo_combustible == "" ||
        obj.tonelaje_bruto == "" || obj.capacidad_carga == "" || obj.tipo_embarcacion == "" || obj.capitan_embarcacion == "" || obj.tripulantes == "" ||
        obj.nombre_embarcacion == null || obj.num_matricula == null || obj.eslora_total == null || obj.manga == null || obj.puntual == null ||
        obj.calado == null || obj.fecha_construccion == null || obj.propietario == null || obj.propulsion == null || obj.tipo_combustible == null ||
        obj.tonelaje_bruto == null || obj.capacidad_carga == null || obj.tipo_embarcacion == null || obj.capitan_embarcacion == null || obj.tripulantes == null) {

        if (obj.nombre_embarcacion == "" || obj.nombre_embarcacion == null) {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.calado == "" || obj.calado == null) {
            $(document.getElementById("calado")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.num_matricula == "" || obj.num_matricula == null) {
            $(document.getElementById("mat")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.eslora_total == "" || obj.eslora_total == null) {
            $(document.getElementById("eslora")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.manga == "" || obj.manga == null) {
            $(document.getElementById("manga")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.puntual == "" || obj.puntual == null) {
            $(document.getElementById("puntual")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.fecha_construccion == "" || obj.fecha_construccion == null) {
            $(document.getElementById("fecha")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.propulsion == "" || obj.propulsion == null) {
            $(document.getElementById("propulcion")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.tonelaje_bruto == "" || obj.tonelaje_bruto == null) {
            $(document.getElementById("tonelada")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.capacidad_carga == "" || obj.capacidad_carga == null) {
            $(document.getElementById("carga")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.tripulantes == "" || obj.tripulantes == null) {
            $(document.getElementById("tripulante")).notify("Lista Vac\u00EDa", { position: "right" });
        }
        return false;
    } else {
        return true;
    }
}