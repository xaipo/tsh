app.controller('ControllerTipoTripulante', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoTripulante;
    $scope.descripcionTipoTripulante;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoTripulante;

    $scope.busqueda;
    $scope.listaTipoUsuario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoTripulante();
            $scope.urlModificar = myProvider.getUrlModificarTipoTripulante();
            $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoTripulante();
            $http.get($scope.urlAllTipoUsuario)
                .then(function (response) {

                    $scope.listaTipoTripulante = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "/login.html"
    }

    $scope.ingresoTipoTripulante = function () {
        console.log($scope.descripcionTipoTripulante);
        var obj = { descripcion_tipo_tripulante: $scope.descripcionTipoTripulante };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoTripulante = function () {

        var obj = { id: $scope.id, descripcion_tipo_tripulante: $scope.descripcionTipoTripulante };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionTipoTripulante = function () {

        if ($scope.seleccionTipoTripulante != '' && $scope.seleccionTipoTripulante != undefined) {

            $scope.selecTipTrip = JSON.parse($scope.seleccionTipoTripulante);

            $scope.id = $scope.selecTipTrip._id;
            $scope.descripcionTipoTripulante = $scope.selecTipTrip.descripcion_tipo_tripulante;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);