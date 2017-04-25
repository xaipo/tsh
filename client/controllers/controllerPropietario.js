app.controller('ControllerPropietario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllPropietario;
    console.log($scope.url);
    $scope.nombrePropietario;
    $scope.cedulaPropietario;
    $scope.telefonoPropietario;
    $scope.celularPropietario;
    $scope.correoPropietario;

    $scope.busqueda;
    $scope.listaPropietario;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPropietario();
        $scope.urlAllPropietario = myProvider.getUrlAllPropietario();
        $http.get($scope.urlAllPropietario)
            .then(function (response) {

                $scope.listaPropietario = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }
    
    $scope.ingresoPropietario = function () {
        console.log($scope.nombrePropietario);
        var obj = {
            nombre_propietario: $scope.nombrePropietario, cedula_propietario: $scope.cedulaPropietario,
            telefono_propietario: $scope.telefonoPropietario, celular_propietario: $scope.celularPropietario,
            correo_propietario: $scope.correoPropietario
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);