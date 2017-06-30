app.controller('ControllerVehiculo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllVehiculo;
    $scope.descripcionVehiculo;
    $scope.cantidadVehiculo;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionVehiculo;

    $scope.busqueda;
    $scope.listaVehiculo;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoVehiculo();
            $scope.urlModificar = myProvider.getUrlModificarVehiculo();
            $scope.urlAllVehiculo = myProvider.getUrlAllVehiculo();

            $http.get($scope.urlAllVehiculo)
                .then(function (response) {

                    $scope.listaVehiculo = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "/login.html"
    }
    $scope.ingresoVehiculo = function () {

        //for (var i = 0; i < 500; i++) {
        var obj = {
            cantidad_vehiculos: $scope.cantidadVehiculo,
            descripcion_vehiculos: $scope.descripcionVehiculo + i
        };

        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });
        //}
    }

    $scope.modificarVehiculo = function () {

        var obj = {
            _id: $scope.id,
            cantidad_vehiculos: $scope.cantidadVehiculo,
            descripcion_vehiculos: $scope.descripcionVehiculo
        };

        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionVehiculo = function () {

        if ($scope.seleccionVehiculo != '' && $scope.seleccionVehiculo != undefined) {

            $scope.selecVehi = JSON.parse($scope.seleccionVehiculo);

            $scope.id = $scope.selecVehi._id;
            $scope.descripcionVehiculo = $scope.selecVehi.descripcion_vehiculos;
            $scope.cantidadVehiculo = $scope.selecVehi.cantidad_vehiculos;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);