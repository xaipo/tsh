app.controller('ControllerTipoUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllTipoUsuario;
    console.log($scope.url);
    $scope.descripcionTipoUsuario;

    $scope.busqueda;
    $scope.listaTipoUsuario;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoUsuario();
        $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoUsuario();
        $http.get($scope.urlAllTipoUsuario)
            .then(function (response) {

                $scope.listaTipoUsuario = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

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