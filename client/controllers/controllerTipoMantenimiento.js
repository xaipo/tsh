app.controller('ControllerTipoMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoTipoMantenimiento();
    console.log($scope.url);
    $scope.descripcionTipoMantenimiento;
    $scope.ingresoPuerto = function () {
        console.log($scope.descripcionTipoMantenimiento);
        var obj = { descripcion_tipo_embarcacion: $scope.descripcionTipoMantenimiento };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);