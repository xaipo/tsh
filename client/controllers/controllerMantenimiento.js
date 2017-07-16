app.controller('ControllerMantenimiento', ['$scope', '$http', 'myProvider', "$timeout", function ($scope, $http, myProvider, $timeout) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlDetalleMantenimiento;
    $scope.urlDetalleMantenimientoModificar;
    $scope.urlAllMantenimiento;
    $scope.urlModificar;
    $scope.urlAllTipoMantenimiento;
    $scope.urlAllEmbarcacion;
    $scope.urlBuscarEmbarcacion;
    $scope.urlBuscarTipoMantenimiento;
    $scope.urlBuscarDetalleMantenimiento;

    //atributos
    $scope.id = "";
    $scope.tipoMantenimiento = "";
    $scope.embarcacion = "";
    $scope.detalleMantenimiento = "";
    $scope.fechaMantenimiento = "";
    $scope.mecanico = "";

    // atributos para el detalle
    $scope.orometro = "";
    $scope.proximoOrometro = "";
    $scope.piezasCambiadasObservaciones = "";
    $scope.detalleMantObj = {};



    //Variables de seleccion
    $scope.seleccionMantenimiento = "";

    //$scope.busqueda;
    $scope.listaTipoMantenimiento;
    $scope.listaMantenimiento;
    $scope.listaDetalleMantenimiento;
    $scope.listaEmbarcacion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoMantenimiento();
            $scope.urlModificar = myProvider.getUrlModificarMantenimiento();
            $scope.urlAllMantenimiento = myProvider.getUrlAllMantenimiento();

            $scope.urlDetalleMantenimiento = myProvider.getUrlIngresoDetalleMantenimiento();
            $scope.urlDetalleMantenimientoModificar = myProvider.getUrlModificarDetalleMantenimiento();
            $scope.urlBuscarDetalleMantenimiento = myProvider.getUrlBuscarDetalleMantenimiento();

            $scope.urlAllTipoMantenimiento = myProvider.getAllTipoMantenimientoActivos();
            $scope.urlBuscarTipoMantenimiento = myProvider.getBuscarTipoMantenimiento();

            $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
            $scope.urlBuscarEmbarcacion = myProvider.getUrlBuscarEmbarcacion();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            //atributos
            $scope.id = "";
            $scope.tipoMantenimiento = "";
            $scope.embarcacion = "";
            $scope.detalleMantenimiento = "";
            $scope.fechaMantenimiento = "";
            $scope.mecanico = "";

            // atributos para el detalle
            $scope.orometro = "";
            $scope.proximoOrometro = "";
            $scope.piezasCambiadasObservaciones = "";
            $scope.detalleMantObj = {};



            //Variables de seleccion
            $scope.seleccionMantenimiento = "";

            //$scope.busqueda;
            $scope.listaTipoMantenimiento;
            $scope.listaMantenimiento;
            $scope.listaDetalleMantenimiento;
            $scope.listaEmbarcacion;

            $http.get($scope.urlAllMantenimiento)
                .then(function (response) {

                    $scope.listaMantenimiento = response.data;

                    var n = $scope.listaMantenimiento.length;
                    var k = 0;
                    var h = 0;
                    for (var i = 0; i < n; i++) {

                        var embar = {
                            id: $scope.listaMantenimiento[i].embarcacion
                        }

                        $http.post($scope.urlBuscarEmbarcacion, embar)
                            .then(function (response) {

                                $scope.listaMantenimiento[k++].embarcacion = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var tipoMant = {
                            id: $scope.listaMantenimiento[i].tipo_mantenimiento
                        }

                        $http.post($scope.urlBuscarTipoMantenimiento, tipoMant)
                            .then(function (response) {

                                $scope.listaMantenimiento[h++].tipo_mantenimiento = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                    }

                }, function errorCallback(response) {

                    console.log(response);
                });

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

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoDetalleMantenimiento = function () {

        var obj = {
            orometro: $scope.orometro,
            proximo_orometro: $scope.proximoOrometro,
            piezas_cambiadas_observaciones: $scope.piezasCambiadasObservaciones
        };
        if (validarCamposVaciosDetalle(obj)) {
            $http.post($scope.urlDetalleMantenimiento, obj)
                .then(function (response) {

                    $scope.detalleMantenimiento = response.data._id;

                }, function errorCallback(response) {

                    console.log(response);
                });
        } else {
            $.notify("Revise los Campos del Detalle", "info");
        }
    }

    $scope.modificarDetalleMantenimiento = function () {

        var obj = {
            id: $scope.detalleMantObj._id,
            orometro: $scope.orometro,
            proximo_orometro: $scope.proximoOrometro,
            piezas_cambiadas_observaciones: $scope.piezasCambiadasObservaciones
        };

        if (validarCamposVaciosDetalle(obj)) {
            $http.post($scope.urlDetalleMantenimientoModificar, obj)
                .then(function (response) {

                }, function errorCallback(response) {

                    console.log(response);
                });
        } else {
            $.notify("Revise los Campos del Detalle", "info");
        }
    }

    $scope.ingresoMantenimiento = function () {

        $scope.ingresoDetalleMantenimiento();

        $timeout(function () {

            var obj = {
                tipo_mantenimiento: $scope.tipoMantenimiento,
                embarcacion: $scope.embarcacion,
                detalle_mantenimiento: $scope.detalleMantenimiento,
                fecha_matenimiento: $scope.fechaMantenimiento,
                mecanico: $scope.mecanico
            };

            if (validarCamposVacios(obj)) {
                $http.post($scope.url, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Ingreso Correcto", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });
            } else {
                $.notify("Revise el Campo Fecha o Mecanico", "info");
            }

        }, 500, false)

    }

    $scope.modificarMantenimiento = function () {

        if ($scope.seleccionMantenimiento != "") {
            $scope.modificarDetalleMantenimiento();

            var obj = {
                id: $scope.id,
                tipo_mantenimiento: $scope.tipoMantenimiento,
                embarcacion: $scope.embarcacion,
                detalle_mantenimiento: $scope.detalleMantenimiento,
                fecha_matenimiento: $scope.fechaMantenimiento,
                mecanico: $scope.mecanico
            };

            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Modificacion Exitosa", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");
                    });
            } else {
                $.notify("Revise el Campo Fecha o Mecanico", "info");
            }
        } else
            $.notify("Seleccione un Mantenimiento", "info");
    }

    $scope.buscarSeleccionMantenimiento = function () {

        if ($scope.seleccionMantenimiento != '' && $scope.seleccionMantenimiento != undefined) {

            $scope.selectMant = JSON.parse($scope.seleccionMantenimiento);
            $scope.id = $scope.selectMant._id;
            $scope.fechaMantenimiento = $scope.selectMant.fecha_matenimiento;
            $scope.tipoMantenimiento = $scope.selectMant.tipo_mantenimiento._id;
            $scope.embarcacion = $scope.selectMant.embarcacion._id;
            $scope.mecanico = $scope.selectMant.mecanico;
            $scope.detalleMantenimiento = $scope.selectMant.detalle_mantenimiento;

            var detalleMant = {
                id: $scope.selectMant.detalle_mantenimiento
            }

            $http.post($scope.urlBuscarDetalleMantenimiento, detalleMant)
                .then(function (response) {

                    $scope.detalleMantObj = response.data;
                    $scope.orometro = $scope.detalleMantObj.orometro;
                    $scope.proximoOrometro = $scope.detalleMantObj.proximo_orometro;
                    $scope.piezasCambiadasObservaciones = $scope.detalleMantObj.piezas_cambiadas_observaciones;

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    }

    $scope.redireccion = function () {
        window.location = "../menu.html"
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);


function validarCamposVacios(obj) {
    if (obj.tipo_mantenimiento == "" || obj.embarcacion == "" || obj.detalle_mantenimiento == "" ||
        obj.fecha_matenimiento == "" || obj.mecanico == "") {
        return false;
    } else {
        return true;
    }
}

function validarCamposVaciosDetalle(obj) {
    if (obj.orometro == "" || obj.proximo_orometro == "" || obj.piezas_cambiadas_observaciones == "") {
        return false;
    } else {
        return true;
    }
}