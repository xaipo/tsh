app.controller('ControllerCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllTiposCombustibles;
    console.log($scope.url);
    $scope.tipoCombustible;
    $scope.cantidad;

    $scope.busqueda;
    $scope.listaCombustible;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoCombustible();
        //$scope.urlAllTiposCombustibles = myProvider.urlAllTiposCombustibles();
        //$http.get($scope.urlAllTiposCombustibles)
        //    .then(function (response) {

        //        $scope.listaPuertos = response.data;

        //    }, function errorCallback(response) {

        //        console.log(response);
        //    });
    }

    $scope.ingresoCombustible = function () {
        console.log($scope.tipoCombustible);
        var obj = {
            tipo_combustible: $scope.tipoCombustible, cantidad: $scope.cantidad
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);