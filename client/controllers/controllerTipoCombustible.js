app.controller('ControllerTipoCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoCombustible;
    console.log($scope.url);
    $scope.descripcionTipoCombustible;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaTipoCombustible;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoCombustible();
        $scope.urlModificar = myProvider.getUrlModificarTipoCombustible();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaTipoCombustible = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoTipoCombustible = function () {
        console.log($scope.descripcionPuerto);
        var obj = { descripcion_tipo_combustible: $scope.descripcionTipoCombustible };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoCombustible = function () {

        var obj = { _id: $scope.id, descripcion_tipo_combustible: $scope.descripcionTipoCombustible };
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
        $scope.seleccion = aux.descripcion_tipo_combustible;
        $scope.descripcionTipoCombustible = $scope.seleccion;
    }

}]);