app.controller('ControllerMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoMantenimiento;
    $scope.urlAllEmbarcacion;
    $scope.urlAllDetalleMantenimiento;

    //atributos
    $scope.id;
    $scope.tipoMantenimiento;
    $scope.embarcacion;
    $scope.detalleMantenimiento;



    //$scope.seleccion;
    //$scope.seleccionEmbarcacion;

    //$scope.busqueda;
    $scope.listaTipoMantenimiento;
    $scope.listaDetalleMantenimiento;
    $scope.listaEmbarcacion;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoMantenimiento();
        $scope.urlAllTipoMantenimiento = myProvider.getAllTipoMantenimiento();
        $scope.urlAllDetalleMantenimiento = myProvider.getUrlAllDetalleMantenimiento();
        $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();

        $http.get($scope.urlAllTipoMantenimiento)
            .then(function (response) {

                $scope.listaTipoMantenimiento = response.data;
                $scope.tipoMantenimiento = $scope.listaTipoMantenimiento[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllDetalleMantenimiento)
            .then(function (response) {

                $scope.listaDetalleMantenimiento = response.data;
                $scope.detalleMantenimiento = $scope.listaDetalleMantenimiento[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllEmbarcacion)
            .then(function (response) {

                $scope.listaEmbarcacion = response.data;
                $scope.embarcacion = $scope.listaEmbarcacion[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.ingresoMantenimiento = function () {

        var obj = {
            tipo_mantenimiento: $scope.tipoMantenimiento, embarcacion: $scope.embarcacion,
            detalle_mantenimiento: $scope.detalleMantenimiento
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarMantenimiento = function () {

        var obj = {
            id: $scope.id, tipo_mantenimiento: $scope.tipoMantenimiento, embarcacion: $scope.embarcacion,
            detalle_mantenimiento: $scope.detalleMantenimiento
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionMantenimiento = function () {

        if ($scope.seleccionTipoUsuario != '' && $scope.seleccionTipoUsuario != undefined) {

            $scope.selecTipUsu = JSON.parse($scope.seleccionTipoUsuario);

            $scope.id = $scope.selecTipUsu._id;
            $scope.descripcionTipoUsuario = $scope.selecTipUsu.descripcion_tipo_usuario;

        }
    }

}]);