app.controller('ControllerEmbarcacionModificar', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {


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


    //Selecciones
    $scope.seleccion;
    $scope.seleccionEmbarcacion;

    //ver como filtrar la lista de tripulantes....

    $scope.iniciar = function () {
        $scope.urlModificar = myProvider.getUrlModificarEmbarcacion();
        $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
        $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();

        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $scope.urlAllPropietarios = myProvider.getUrlAllPropietario();
        $scope.urlAllTripulantes = myProvider.getUrlAllTripulante();
        $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();

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

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarEmbarcacion = function () {

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
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.cargarTripulantes = function () {

        var n = $scope.selecEmbarJS.tripulantes.length;
        var listTrip = $scope.selecEmbarJS.tripulantes;
        for (var i = 0; i < n; i++) {
            var n = $scope.listaTripulante.length;
            for (var j = 0; j < n; j++) {

                if ($scope.listaTripulante[j]._id == listTrip[i]) {
                    $scope.listaTripulanteSelect.push($scope.listaTripulante[j]);
                    $scope.listaTripulante.splice(i, 1);
                    break;
                }

            }
        }

    }

    $scope.buscarSeleccionListaEmbarcacion = function () {

        var n = $scope.listaTripulanteSelect.length;
        var listTrip = $scope.listaTripulanteSelect;
        for (var i = 0; i < n; i++) {

            $scope.listaTripulante.push($scope.listaTripulanteSelect[i]);
            $scope.listaTripulanteSelect.splice(i, 1);
            
        }

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

}]);