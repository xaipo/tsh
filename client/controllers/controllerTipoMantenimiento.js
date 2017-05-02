app.controller('ControllerTipoMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlGetAllTipoMantenimiento;
    console.log($scope.url);
    $scope.descripcionTipoMantenimiento;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaTipoMantenimiento;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoMantenimiento();
        $scope.urlModificar = myProvider.getUrlModificarTipoMantenimiento();
        $scope.urlGetAllTipoMantenimiento = myProvider.getAllTipoMantenimiento();
        $http.get($scope.urlGetAllTipoMantenimiento)
            .then(function (response) {

                $scope.listaTipoMantenimiento = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoTipoMantenimiento = function () {
        console.log($scope.descripcionTipoMantenimiento);
        var obj = { descripcion_tipo_mantenimiento: $scope.descripcionTipoMantenimiento };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoMantenimiento = function () {

        var obj = { id: $scope.id, descripcion_tipo_mantenimiento: $scope.descripcionTipoMantenimiento };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccion = function (aux) {
        $scope.id = aux._id;
        $scope.seleccion = aux.descripcion_tipo_mantenimiento;
        console.log($scope.seleccion);
        $scope.descripcionTipoMantenimiento = $scope.seleccion;
    }

}]);