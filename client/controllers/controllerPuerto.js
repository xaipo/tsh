app.controller('ControllerPuerto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPuertos;
    $scope.descripcionPuerto;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionPuerto;

    $scope.busqueda;
    $scope.listaPuertos;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
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

    } else {
        window.location = "../login.html"
    }
    $scope.ingresoPuerto = function () {

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

    $scope.buscarSeleccionPuerto = function () {

        if ($scope.seleccionPuerto != '' && $scope.seleccionPuerto != undefined) {

            $scope.selecPuerto = JSON.parse($scope.seleccionPuerto);
            $scope.id = $scope.selecPuerto._id;
            $scope.descripcionPuerto = $scope.selecPuerto.descripcion_puerto;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }
}]);