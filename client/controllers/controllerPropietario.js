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
    $scope.seleccionPropietario;

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

    $scope.buscarSeleccionPropietario = function () {

        if ($scope.seleccionPropietario != '' && $scope.seleccionPropietario != undefined) {

            $scope.selecProp = JSON.parse($scope.seleccionPropietario);

            $scope.id = $scope.selecProp._id;
            $scope.nombrePropietario = $scope.selecProp.nombre_propietario;
            $scope.cedulaPropietario = $scope.selecProp.cedula_propietario;
            $scope.telefonoPropietario = $scope.selecProp.telefono_propietario;
            $scope.celularPropietario = $scope.selecProp.celular_propietario;
            $scope.correoPropietario = $scope.selecProp.correo_propietario;

        }
    }


}]);