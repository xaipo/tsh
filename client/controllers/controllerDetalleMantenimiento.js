app.controller('ControllerDetalleMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoDetalleMantenimiento();
    console.log($scope.url);
    $scope.orometro;
    $scope.proximoOrometro;
    $scope.piezasCambiadasObservaciones;

    $scope.ingresoDetalleMantenimiento = function () {
        console.log($scope.orometro);
        var obj = {
            orometro: $scope.orometro, proximo_orometro: $scope.proximoOrometro,
            piezas_cambiadas_observaciones: $scope.piezasCambiadasObservaciones
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);