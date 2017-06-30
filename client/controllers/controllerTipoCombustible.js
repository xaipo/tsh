app.controller('ControllerTipoCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoCombustible;
    console.log($scope.url);
    $scope.descripcionTipoCombustible;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoCombustible;

    $scope.busqueda;
    $scope.listaTipoCombustible;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoCombustible();
            $scope.urlModificar = myProvider.getUrlModificarTipoCombustible();
            $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
            $http.get($scope.urlAllTipoCombustible)
                .then(function (response) {

                    $scope.listaTipoCombustible = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "/login.html"
    }

    $scope.ingresoTipoCombustible = function () {
        console.log($scope.descripcionPuerto);
        var obj = { descripcion_tipo_combustible: $scope.descripcionTipoCombustible };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoCombustible = function () {

        var obj = { _id: $scope.id, descripcion_tipo_combustible: $scope.descripcionTipoCombustible };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {
                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionTipoCombustible = function () {

        if ($scope.seleccionTipoCombustible != '' && $scope.seleccionTipoCombustible != undefined) {

            $scope.selecTipComb = JSON.parse($scope.seleccionTipoCombustible);

            $scope.id = $scope.selecTipComb._id;
            $scope.descripcionTipoCombustible = $scope.selecTipComb.descripcion_tipo_combustible;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);