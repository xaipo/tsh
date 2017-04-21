app.controller('ControllerUtensiliosSeleccionados', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoUtensiliosSeleccionados();
    console.log($scope.url);
    $scope.utensilios;
    $scope.cantidadUtensilios;

    $scope.ingresoUtensiliosSeleccionados = function () {
        console.log($scope.utensilios);
        var obj = {
            utensilios: $scope.utensilios, cantidad: $scope.cantidadUtensilios
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);