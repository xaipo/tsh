app.controller('ControllerPropietario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPropietario;
    $scope.nombrePropietario;
    $scope.cedulaPropietario;
    $scope.telefonoPropietario;
    $scope.celularPropietario;
    $scope.correoPropietario;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaPropietario;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPropietario();
        $scope.urlModificar = myProvider.getUrlModificarPropietario();
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

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }


    $scope.modificarPropietario = function () {

        var obj = {
            id: $scope.id, nombre_propietario: $scope.nombrePropietario, cedula_propietario: $scope.cedulaPropietario,
            telefono_propietario: $scope.telefonoPropietario, celular_propietario: $scope.celularPropietario,
            correo_propietario: $scope.correoPropietario
        };
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
        $scope.nombrePropietario = aux.nombre_propietario;
        $scope.cedulaPropietario = aux.cedula_propietario;
        $scope.telefonoPropietario = aux.telefono_propietario;
        $scope.celularPropietario = aux.celular_propietario;
        $scope.correoPropietario = aux.correo_propietario;

    }


}]);