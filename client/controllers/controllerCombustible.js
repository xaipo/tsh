app.controller('ControllerCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoCombustible();
    console.log($scope.url);
    $scope.tipoCombustible;
    $scope.cantidad;

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