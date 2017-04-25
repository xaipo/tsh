app.controller('ControllerTipoMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlGetAllTipoMantenimiento;
    console.log($scope.url);
    $scope.descripcionTipoMantenimiento;

    $scope.busqueda;
    $scope.listaTipoMantenimiento;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoMantenimiento();
        $scope.urlGetAllTipoMantenimiento = myProvider.getAllTipoMantenimiento();
        $http.get($scope.urlGetAllTipoMantenimiento)
            .then(function (response) {

                $scope.listaTipoMantenimiento = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

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