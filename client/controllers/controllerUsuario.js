app.controller('ControllerUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoUsuario();
    console.log($scope.url);
    $scope.nombreUsuario;
    $scope.cedulaUsuario;
    $scope.contrasenaUsuario;
    $scope.telefonoUsuario;
    $scope.correoUsuario;
    $scope.tipoUsuario;
    $scope.ingresoCliente = function () {
        console.log($scope.nombreUsuario);
        var obj = {
            nombre_usuario: $scope.nombreUsuario, cedula_usuario: $scope.cedulaUsuario, contrasena_usuario: $scope.contrasenaUsuario,
            telefono_usuario: $scope.telefonoUsuario, correo_usuario: $scope.correoUsuario, tipo_usuario: $scope.tipoUsuario
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);