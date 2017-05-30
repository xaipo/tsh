app.controller('ControllerMantenimiento', ['$scope', '$http', 'myProvider', "$timeout", function ($scope, $http, myProvider, $timeout) {

    $scope.url;
    $scope.urlDetalleMantenimiento;
    $scope.urlModificar;
    $scope.urlAllTipoMantenimiento;
    $scope.urlAllEmbarcacion;

    //atributos
    $scope.id;
    $scope.tipoMantenimiento;
    $scope.embarcacion;
    $scope.detalleMantenimiento;

    // atributos para el detalle
    $scope.orometro;
    $scope.proximoOrometro;
    $scope.piezasCambiadasObservaciones;



    //$scope.seleccion;
    //$scope.seleccionEmbarcacion;

    //$scope.busqueda;
    $scope.listaTipoMantenimiento;
    $scope.listaDetalleMantenimiento;
    $scope.listaEmbarcacion;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoMantenimiento();
        $scope.urlDetalleMantenimiento = myProvider.getUrlIngresoDetalleMantenimiento();
        $scope.urlAllTipoMantenimiento = myProvider.getAllTipoMantenimiento();
        $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();

        $http.get($scope.urlAllTipoMantenimiento)
            .then(function (response) {

                $scope.listaTipoMantenimiento = response.data;
                $scope.tipoMantenimiento = $scope.listaTipoMantenimiento[0]._id;

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


    $scope.ingresoDetalleMantenimiento = function () {

        var obj = {
            orometro: $scope.orometro, proximo_orometro: $scope.proximoOrometro,
            piezas_cambiadas_observaciones: $scope.piezasCambiadasObservaciones
        };
        $http.post($scope.urlDetalleMantenimiento, obj)
            .then(function (response) {

                $scope.detalleMantenimiento = response.data._id;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.ingresoMantenimiento = function () {

        $scope.ingresoDetalleMantenimiento();

        $timeout(function () {

            var obj = {
                tipo_mantenimiento: $scope.tipoMantenimiento, embarcacion: $scope.embarcacion,
                detalle_mantenimiento: $scope.detalleMantenimiento
            };

            console.log($scope.detalleMantenimiento);
            console.log(obj);

            $http.post($scope.url, obj)
                .then(function (response) {

                    $scope.iniciar();
                    console.log(response);

                }, function errorCallback(response) {

                    console.log(response);
                });

        }, 1000, false)

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
            console.log($scope.seleccionTipoUsuario);
            $scope.id = $scope.selecTipUsu._id;
            $scope.descripcionTipoUsuario = $scope.selecTipUsu.descripcion_tipo_usuario;

        }
    }

}]);