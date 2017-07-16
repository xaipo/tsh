app.controller('ControllerEmbarcacionModificar', ['$scope', '$http', 'myProvider', "$timeout", function ($scope, $http, myProvider, $timeout) {


    $scope.urlModificar;
    $scope.urlAllEmbarcacion;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoEmbarcacion;
    $scope.urlAllPropietarios;
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
            $scope.urlAllTripulantes = myProvider.getUrlAllTripulante();
            $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();

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

            $http.get($scope.urlAllEmbarcacion)
                .then(function (response) {

                    $scope.listaEmbarcacion = response.data;

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

            $http.get($scope.urlAllTripulantesCapitan)
                .then(function (response) {

                    $scope.listaTripulantesCapitanes = response.data;
                    $scope.capitan = $scope.listaTripulantesCapitanes[0]._id;

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
                tripulantes: $scope.listaTripulanteIngresar
            };

            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Modificacion Exitosa", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });

            } else {
                $.notify("Revise los Campos", "info");
            }
        } else
            $.notify("Seleccione una Embacacion", "info");
    }

    $scope.cargarTripulantes = function () {

        //console.log($scope.seleccionTripulanteAux);
        //console.log($scope.seleccionTripulante);
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

            $scope.selecEmbarJS = JSON.parse($scope.seleccionEmbarcacion);

            $scope.id = $scope.selecEmbarJS._id;
            $scope.nombreEmbarcacion = $scope.selecEmbarJS.nombre_embarcacion;
            $scope.numeroMatricula = $scope.selecEmbarJS.num_matricula;
            $scope.esloraTotal = $scope.selecEmbarJS.eslora_total;
            $scope.manga = $scope.selecEmbarJS.manga;
            $scope.puntual = $scope.selecEmbarJS.puntual;
            $scope.calado = $scope.selecEmbarJS.calado;
            $scope.fechaConstruccion = $scope.selecEmbarJS.fecha_construccion.toString();
            $scope.propietario = $scope.selecEmbarJS.propietario;
            $scope.propulsion = $scope.selecEmbarJS.propulsion;
            $scope.tipoCombustible = $scope.selecEmbarJS.tipo_combustible;
            $scope.tonelajeBruto = $scope.selecEmbarJS.tonelaje_bruto;
            $scope.capacidadCarga = $scope.selecEmbarJS.capacidad_carga;
            $scope.tipoEmbarcacion = $scope.selecEmbarJS.tipo_embarcacion;
            $scope.capitan = $scope.selecEmbarJS.capitan_embarcacion;
            $scope.propietario = $scope.selecEmbarJS.propietario;
            $scope.fechaConstruccion = $scope.selecEmbarJS.fecha_construccion;

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