app.controller('ControllerEmbarcacion', ['$scope', '$http', 'myProvider', "$timeout", function ($scope, $http, myProvider, $timeout) {

    $scope.url;
    $scope.urlAllPropietarios;
    $scope.urlAllTipoUsuario;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoEmbarcacion;
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

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;
    $scope.listaTipoCombustible;
    $scope.listaPropietarios;
    $scope.listaTripulante;
    $scope.listaTripulanteSelect = [];
    $scope.listaTripulanteIngresar = [];
    $scope.listaTripulantesCapitanes;
    $scope.seleccionTripulante;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoEmbarcacion();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $scope.urlAllPropietarios = myProvider.getUrlAllPropietario();
        $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();
        $scope.urlAllTripulantes = myProvider.getUrlAllTripulante();
        $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();

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

        $scope.busqueda;
        $scope.seleccionTripulante = "";
        $scope.listaTipoEmbarcacion;
        $scope.listaTipoCombustible;
        $scope.listaPropietarios;
        $scope.listaTripulantes;
        $scope.listaTripulanteIngresar = [];
        $scope.listaTripulanteSelect = [];
        $scope.listaTripulantesCapitanes;

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

            }, function errorCallback(response) {

                console.log(response);
            });

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
            tripulantes: $scope.listaTripulanteIngresar
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();

            }, function errorCallback(response) {

                console.log(response);
            });

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

}]);