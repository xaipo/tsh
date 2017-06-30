
app.controller('ControllerContratoRecepcion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllContratoRecepcion;

    $scope.descripcionContratoRecepcion;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionContratoRecepcion;

    $scope.busqueda;
    $scope.listaContratoRecepcion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoContratoRecepcion();
            $scope.urlModificar = myProvider.getUrlModificarContratoRecepcion();
            $scope.urlAllContratoRecepcion = myProvider.getUrlAllContratoRecepcion();

            $http.get($scope.urlAllContratoRecepcion)
                .then(function (response) {

                    $scope.listaContratoRecepcion = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "/login.html"
    }
    $scope.ingresoContratoRecepcion = function () {
        var obj = { descripcion_contrato_recepcion: $scope.descripcionContratoRecepcion };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarContratoRecepcion = function () {

        var obj = { id: $scope.id, descripcion_contrato_recepcion: $scope.descripcionContratoRecepcion };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionContratoRecepcion = function () {

        if ($scope.seleccionContratoRecepcion != '' && $scope.seleccionContratoRecepcion != undefined) {

            $scope.selecContRecep = JSON.parse($scope.seleccionContratoRecepcion);

            $scope.id = $scope.selecContRecep._id;
            $scope.descripcionContratoRecepcion = $scope.selecContRecep.descripcion_contrato_recepcion;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);