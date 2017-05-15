app.controller('ControllerTripulante', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTripulante;
    $scope.urlAllTipoTripulante;
    $scope.urlAllTipoTipoTripulante;

    $scope.nombreTripulante;
    $scope.cedulaTripulante;
    $scope.telefonoTripulante;
    $scope.tipoTripulante;

    $scope.id;
    $scope.seleccionTripulante;
    $scope.seleccionTipoTripulante;


    $scope.busqueda;
    $scope.listaTripulante;
    $scope.listaTipoTripulante;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTripulante();
        $scope.urlModificar = myProvider.getUrlModificarTripulante();
        $scope.urlAllTripulante = myProvider.getUrlAllTripulante();
        $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();

        $http.get($scope.urlAllTripulante)
            .then(function (response) {

                $scope.listaTripulante = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });


        $http.get($scope.urlAllTipoTripulante)
            .then(function (response) {

                $scope.listaTipoTripulante = response.data;
                $scope.tipoTripulante = $scope.listaTipoTripulante[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.ingresoTripulante = function () {
        console.log($scope.nombreUsuario);
        var obj = {
            nombre_tripulante: $scope.nombreTripulante,
            cedula_tripulante: $scope.cedulaTripulante,
            telefono_tripulante: $scope.telefonoTripulante,
            tipo_tripulante: $scope.tipoTripulante
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });
    }


    $scope.modificarTripulante = function () {

        var obj = {
            id: $scope.id, nombre_tripulante: $scope.nombreTripulante,
            cedula_tripulante: $scope.cedulaTripulante,
            telefono_tripulante: $scope.telefonoTripulante,
            tipo_tripulante: $scope.tipoTripulante
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != '' && $scope.seleccionTripulante != undefined) {

            $scope.selecTrip = JSON.parse($scope.seleccionTripulante);

            $scope.id = $scope.selecTrip._id;
            $scope.nombreTripulante = $scope.selecTrip.nombre_tripulante;
            $scope.cedulaTripulante = $scope.selecTrip.cedula_tripulante;
            $scope.telefonoTripulante = $scope.selecTrip.telefono_tripulante;
            $scope.tipoTripulante = $scope.selecTrip.tipo_tripulante;

        }
    }

}]);