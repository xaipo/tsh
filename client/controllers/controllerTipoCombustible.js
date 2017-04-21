app.controller('ControllerTipoCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoTipoCombustible();
    console.log($scope.url);
    $scope.descripcionTipoCombustible;
    $scope.ingresoTipoCombustible = function () {
        console.log($scope.descripcionPuerto);
        var obj = { descripcion_tipo_combustible: $scope.descripcionTipoCombustible };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);