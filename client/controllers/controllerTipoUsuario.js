app.controller('ControllerTipoUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoTipoUsuario();
    console.log($scope.url);
    $scope.descripcionTipoUsuario;
    $scope.ingresoTipoUsuario = function () {
        console.log($scope.descripcionTipoUsuario);
        var obj = { descripcion_tipo_usuario: $scope.descripcionTipoUsuario };
        $http.post($scope.url, obj)
            .then(function (response) {
                
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);