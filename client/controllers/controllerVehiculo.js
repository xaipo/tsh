app.controller('ControllerVehiculo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoVehiculo();
    console.log($scope.url);
    $scope.descripcionVehiculo;
    $scope.cantidad;

    $scope.ingresoVehiculo = function () {
        console.log($scope.descripcionVehiculo);
        var obj = {
            cantidad: $scope.cantidad, descripcion_vehiculo: $scope.descripcionVehiculo
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);