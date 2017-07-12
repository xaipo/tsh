app.controller('ControllerDetalleMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllDetalleMantenimiento;
    console.log($scope.url);
    $scope.orometro;
    $scope.proximoOrometro;
    $scope.piezasCambiadasObservaciones;

    $scope.id;
    $scope.busqueda;
    $scope.seleccionMantenimiento;
    $scope.listaDetalleMantenimiento;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoDetalleMantenimiento();
            $scope.urlModificar = myProvider.getUrlModificarDetalleMantenimiento();
            $scope.urlAllDetalleMantenimiento = myProvider.getUrlAllDetalleMantenimiento();

            $http.get($scope.urlAllDetalleMantenimiento)
                .then(function (response) {

                    $scope.listaDetalleMantenimiento = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoDetalleMantenimiento = function () {
        console.log($scope.orometro);
        var obj = {
            orometro: $scope.orometro, proximo_orometro: $scope.proximoOrometro,
            piezas_cambiadas_observaciones: $scope.piezasCambiadasObservaciones
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }


    $scope.modificarMantenimiento = function () {

        var obj = {
            id: $scope.id, orometro: $scope.orometro, proximo_orometro: $scope.proximoOrometro,
            piezas_cambiadas_observaciones: $scope.piezasCambiadasObservaciones
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.busquedaDetalleMantenimiento = function () {

        if ($scope.seleccionMantenimiento != '' && $scope.seleccionMantenimiento != undefined) {

            $scope.selecMante = JSON.parse($scope.seleccionMantenimiento);

            $scope.id = $scope.selecMante._id;
            $scope.orometro = $scope.selecMante.orometro;
            $scope.proximoOrometro = $scope.selecMante.proximo_orometro;
            $scope.piezasCambiadasObservaciones = $scope.selecMante.piezas_cambiadas_observaciones;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);