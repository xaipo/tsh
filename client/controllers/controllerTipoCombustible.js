app.controller('ControllerTipoCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllTipoCombustible;
    console.log($scope.url);
    $scope.descripcionTipoCombustible;

    $scope.busqueda;
    $scope.listaTipoCombustible;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoCombustible();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaTipoCombustible = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

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