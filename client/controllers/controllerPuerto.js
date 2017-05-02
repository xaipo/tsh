app.controller('ControllerPuerto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPuertos;
    console.log($scope.url);
    $scope.descripcionPuerto;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaPuertos;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPuerto();
        $scope.urlModificar = myProvider.getUrlModificarPuerto();
        $scope.urlAllPuertos = myProvider.getUrlAllPuerto();
        $http.get($scope.urlAllPuertos)
            .then(function (response) {

                $scope.listaPuertos = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoPuerto = function () {
        console.log($scope.descripcionPuerto);
        var obj = { descripcion_puerto: $scope.descripcionPuerto };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarPuerto = function () {

        var obj = { id: $scope.id, descripcion_puerto: $scope.descripcionPuerto };
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
        $scope.seleccion = aux.descripcion_puerto;
        $scope.descripcionPuerto = $scope.seleccion;
    }

}]);