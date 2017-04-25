app.controller('ControllerCliente', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllClientes;
    console.log($scope.url);
    $scope.nombreCliente;
    $scope.rucCliente;
    $scope.direccionCliente;
    $scope.telefonoCliente;
    $scope.correoCliente;
    $scope.tipoCliente;

    $scope.busqueda;
    $scope.listaClientes;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoCliente();
        $scope.urlAllClientes = myProvider.getUrlAllClientes();
        console.log($scope.url);
        $http.get($scope.urlAllClientes)
            .then(function (response) {

                $scope.listaClientes = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.ingresoCliente = function () {
        console.log($scope.nombreCliente);
        var obj = {
            nombre_cliente: $scope.nombreCliente, ruc_cliente: $scope.rucCliente, direccion_cliente: $scope.direccionCliente,
            telefono_cliente: $scope.telefonoCliente, correo_cliente: $scope.correoCliente, tipo_cliente: $scope.tipoCliente
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);