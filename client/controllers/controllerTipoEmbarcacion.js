app.controller('ControllerTipoEmbacacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoTipoEmbarcacion();
    console.log($scope.url);
    $scope.descripcionTipoEmbarcacion;
    $scope.ingresoPuerto = function () {
        console.log($scope.descripcionTipoEmbarcacion);
        var obj = { descripcion_tipo_embarcacion: $scope.descripcionTipoEmbarcacion };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);