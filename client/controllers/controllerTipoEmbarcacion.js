app.controller('ControllerTipoEmbacacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlGetAllTipoEmbarcacion;
    console.log($scope.url);
    $scope.descripcionTipoEmbarcacion;

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPuerto();
        $scope.urlGetAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();
        $http.get($scope.urlGetAllTipoEmbarcacion)
            .then(function (response) {

                $scope.listaTipoEmbarcacion = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

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