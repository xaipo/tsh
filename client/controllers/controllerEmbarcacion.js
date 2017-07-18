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

                    $scope.iniciar();
                    $.notify("Ingreso Correcto", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");

                });

        } else {
            $.notify("Revise los Campos", "info");
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

function validarCamposVacios(obj) {
    if (obj.nombre_embarcacion == "" || obj.num_matricula == "" || obj.eslora_total == "" || obj.manga == "" || obj.puntual == "" ||
        obj.calado == "" || obj.fecha_construccion == "" || obj.propietario == "" || obj.propulsion == "" || obj.tipo_combustible == "" ||
        obj.tonelaje_bruto == "" || obj.capacidad_carga == "" || obj.tipo_embarcacion == "" || obj.capitan_embarcacion == "" || obj.tripulantes == "") {
        return false;
    } else {
        return true;
    }
}