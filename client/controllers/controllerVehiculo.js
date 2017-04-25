app.controller('ControllerVehiculo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllVehiculo;
    $scope.descripcionVehiculo;
    $scope.cantidadVehiculo;

    $scope.busqueda;
    $scope.listaVehiculo;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoVehiculo();
        $scope.urlAllVehiculo = myProvider.getUrlAllVehiculo();
        $http.get($scope.urlAllVehiculo)
            .then(function (response) {

                $scope.listaVehiculo = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoVehiculo = function () {
        console.log($scope.cantidadVehiculo);
        console.log($scope.descripcionVehiculo);
        var obj = {
            cantidad_vehiculos: $scope.cantidadVehiculo, descripcion_vehiculos: $scope.descripcionVehiculo
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);