app.controller('ControllerLogin', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.urlBuscarUsuario;
    $scope.urlBuscarTipoUsuario;

    $scope.nombreUsuario;
    $scope.password;

    $scope.iniciar = function () {

        $scope.url = myProvider.getUrlBuscarUsuario();
        $scope.urlBuscarTipoUsuario = myProvider.getUrlBuscarTipoUsuario();

        $scope.nombreUsuario = "";
        $scope.password = "";

    }

    $scope.buscarSeleccionPuerto = function () {

        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

}]);