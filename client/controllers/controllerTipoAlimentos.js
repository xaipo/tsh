app.controller('ControllerTipoAlimentos', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoAlimentos;


    $scope.id;
    $scope.descripcionTipoAlimento;
    $scope.seleccion;
    $scope.seleccionTipoAlimento;

    $scope.busqueda;
    $scope.listaTipoAlimentos;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoAlimentos();
            $scope.urlModificar = myProvider.getUrlModificarTipoAlimentos();
            $scope.urlAllTipoAlimentos = myProvider.getUrlALLTipoAlimentos();

            $scope.id = "";
            $scope.descripcionTipoAlimento = "";
            $scope.seleccion = "";
            $scope.seleccionTipoAlimento = "";

            $scope.busqueda;
            $scope.listaTipoAlimentos;

            $http.get($scope.urlAllTipoAlimentos)
                .then(function (response) {

                    $scope.listaTipoAlimentos = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoAlimentos = function () {
        console.log($scope.seleccionTipoAlimento);
        var obj = { descripcion_tipo_alimento: $scope.descripcionTipoAlimento };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoAlimentos = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_alimento: $scope.descripcionTipoAlimento
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarseleccionTipoAlimento = function () {

        if ($scope.seleccionTipoAlimento != '' && $scope.seleccionTipoAlimento != undefined) {

            $scope.selecTipAlim = JSON.parse($scope.seleccionTipoAlimento);
            $scope.id = $scope.selecTipAlim._id;
            $scope.descripcionTipoAlimento = $scope.selecTipAlim.descripcion_tipo_alimento;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);