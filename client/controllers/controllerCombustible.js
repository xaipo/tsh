app.controller('ControllerCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllCombustible;
    $scope.urlAllTipoCombustible;

    $scope.tipoCombustible;
    $scope.cantidad;

    $scope.id
    $scope.busqueda;
    $scope.seleccionCombustible;

    $scope.listaTipoCombustible;
    $scope.listaCombustible;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoCombustible();
        $scope.urlModificar = myProvider.getUrlModificarCombustible();
        $scope.urlAllCombustible = myProvider.getUrlAllCombustible();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();

        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaTipoCombustible = response.data;
                $scope.tipoCombustible = $scope.listaTipoCombustible[0]._id;

                $http.get($scope.urlAllCombustible)
                    .then(function (response) {

                        $scope.listaCombustible = response.data;

                        var n = $scope.listaCombustible.length;
                        var n1 = $scope.listaTipoCombustible.length;
                        for (var i = 0; i < n; i++) {
                            for (var j = 0; j < n1; j++) {
                                if ($scope.listaCombustible[i].tipo_combustible == $scope.listaTipoCombustible[j]._id) {
                                    $scope.aux = $scope.listaTipoCombustible[j];
                                    $scope.listaCombustible[i].tipo_combustible = $scope.aux;
                                }
                            }
                        }

                    }, function errorCallback(response) {

                        console.log(response);
                    });

            }, function errorCallback(response) {

                console.log(response);
            });




    }

    $scope.ingresoCombustible = function () {
        console.log($scope.tipoCombustible);
        var obj = {
            tipo_combustible: $scope.tipoCombustible, cantidad_combustible: $scope.cantidad
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.modificarCombustible = function () {

        var obj = {
            id: $scope.id,
            tipo_combustible: $scope.tipoCombustible,
            cantidad_combustible: $scope.cantidad
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionCombustible = function () {

        if ($scope.seleccionCombustible != '' && $scope.seleccionCombustible != undefined) {

            $scope.selecComb = JSON.parse($scope.seleccionCombustible);

            $scope.id = $scope.selecComb._id;
            $scope.tipoCombustible = $scope.selecComb.tipo_combustible._id;
            $scope.cantidad = $scope.selecComb.cantidad_combustible;

        }
    }

}]);