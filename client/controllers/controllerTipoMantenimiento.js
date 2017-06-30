app.controller('ControllerTipoMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoMantenimiento;
    console.log($scope.url);
    $scope.descripcionTipoMantenimiento;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoMantenimiento;

    $scope.busqueda;
    $scope.listaTipoMantenimiento;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoMantenimiento();
            $scope.urlModificar = myProvider.getUrlModificarTipoMantenimiento();
            $scope.urlAllTipoMantenimiento = myProvider.getAllTipoMantenimiento();
            $http.get($scope.urlAllTipoMantenimiento)
                .then(function (response) {

                    $scope.listaTipoMantenimiento = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "/login.html"
    }

    $scope.ingresoTipoMantenimiento = function () {
        console.log($scope.descripcionTipoMantenimiento);
        var obj = { descripcion_tipo_mantenimiento: $scope.descripcionTipoMantenimiento };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoMantenimiento = function () {

        var obj = { id: $scope.id, descripcion_tipo_mantenimiento: $scope.descripcionTipoMantenimiento };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionTipoMantenimiento = function () {

        if ($scope.seleccionTipoMantenimiento != '' && $scope.seleccionTipoMantenimiento != undefined) {

            $scope.selecTipMant = JSON.parse($scope.seleccionTipoMantenimiento);

            $scope.id = $scope.selecTipMant._id;
            $scope.descripcionTipoMantenimiento = $scope.selecTipMant.descripcion_tipo_mantenimiento;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);