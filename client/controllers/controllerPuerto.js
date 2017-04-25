app.controller('ControllerPuerto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllPurtos;
    console.log($scope.url);
    $scope.descripcionPuerto;

    $scope.busqueda;
    $scope.listaPuertos;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPuerto();
        $scope.urlAllPuertos = myProvider.getUrlAllPuerto();
        $http.get($scope.urlAllPuertos)
            .then(function (response) {

                $scope.listaPuertos = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoPuerto = function () {
        console.log($scope.descripcionPuerto);
        var obj = { descripcion_puerto: $scope.descripcionPuerto };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }


}]);