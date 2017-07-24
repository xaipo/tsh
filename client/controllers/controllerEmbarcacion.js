app.controller('ControllerEmbarcacion', ['$scope', '$http', 'myProvider', "$timeout", function ($scope, $http, myProvider, $timeout) {

    $scope.url;
    $scope.urlAllPropietarios;
    $scope.urlAllTipoUsuario;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoEmbarcacion;
    $scope.urlAllEstadoEmbarcacion;
    $scope.urlAllTipoTripulantesCapitanTimonel;
    $scope.urlAllTripulantes;
    $scope.urlAllTripulantesCapitan;


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

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;
    $scope.listaEstadoEmbarcacion;
    $scope.listaTipoCombustible;
    $scope.listaPropietarios;
    $scope.listaTripulante;
    $scope.listaTripulanteSelect = [];
    $scope.listaTripulanteIngresar = [];
    $scope.listaTripulantesCapitanes;
    $scope.seleccionTripulante;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoEmbarcacion();
            $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
            $scope.urlAllPropietarios = myProvider.getUrlAllPropietarioActivos();
            $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();
            $scope.urlAllTripulantes = myProvider.getUrlAllTripulanteActivos();
            $scope.urlAllTipoTripulantesCapitanTimonel = myProvider.getUrlAllTipoTripulanteCapitanTimonel();
            $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacionActivos();
            $scope.urlAllEstadoEmbarcacion = myProvider.getUrlAllEstadoEmbarcacionActivos();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id;
            $scope.nombreEmbarcacion = "";
            $scope.numeroMatricula = "";
            $scope.esloraTotal = "";
            $scope.manga = "";
            $scope.puntual = "";
            $scope.calado = "";
            $scope.fechaConstruccion = "";
            $scope.propietario = "";
            $scope.propulsion = "";
            $scope.tipoCombustible;
            $scope.tonelajeBruto = "";
            $scope.capacidadCarga = "";
            $scope.tipoEmbarcacion = "";
            $scope.capitan = "";
            $scope.estado = "";

            $scope.busqueda;
            $scope.seleccionTripulante = "";
            $scope.listaTipoEmbarcacion;
            $scope.listaTipoCombustible;
            $scope.listaPropietarios;
            $scope.listaTripulantes;
            $scope.listaTripulanteIngresar = [];
            $scope.listaTripulanteSelect = [];
            $scope.listaTripulantesCapitanes;

            $http.get($scope.urlAllEstadoEmbarcacion)
                .then(function (response) {

                    $scope.listaEstadoEmbarcacion = response.data;
                    $scope.estado = $scope.listaEstadoEmbarcacion[0]._id;

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

            $http.get($scope.urlAllPropietarios)
                .then(function (response) {

                    $scope.listaPropietarios = response.data;
                    $scope.propietario = $scope.listaPropietarios[0]._id;

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

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoEmbarcacion = function () {

        var dimeTrip = $scope.listaTripulanteSelect.length;

        for (var i = 0; i < dimeTrip; i++) {

            $scope.listaTripulanteIngresar.push($scope.listaTripulanteSelect[i]._id.toString());

        }

        var obj = {
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

            $http.post($scope.url, obj)
                .then(function (response) {

                    if (response.data == "true") {

                        $scope.iniciar();
                        swal({
                            title: "Ingreso Exitoso!",
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
        obj.tonelaje_bruto == "" || obj.capacidad_carga == "" || obj.tipo_embarcacion == "" || obj.capitan_embarcacion == "" || obj.tripulantes == "") {

        if (obj.nombre_embarcacion == "") {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.calado == "") {
            $(document.getElementById("calado")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.num_matricula == "") {
            $(document.getElementById("mat")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.eslora_total == "") {
            $(document.getElementById("eslora")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.manga == "") {
            $(document.getElementById("manga")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.puntual == "") {
            $(document.getElementById("puntual")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.fecha_construccion == "") {
            $(document.getElementById("fecha")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.propulsion == "") {
            $(document.getElementById("propulcion")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.tonelaje_bruto == "") {
            $(document.getElementById("tonelada")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.capacidad_carga == "") {
            $(document.getElementById("carga")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.tripulantes == "") {
            $(document.getElementById("tripulante")).notify("Lista Vac\u00EDa", { position: "right" });
        }
        return false;
    } else {
        return true;
    }
}