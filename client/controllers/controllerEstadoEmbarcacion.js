app.controller('ControllerEstadoEmbarcacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllEstadoEmbarcacion;

    $scope.id;
    $scope.descripcionEstado;
    $scope.seleccion;
    $scope.seleccionEstado;

    $scope.busqueda;
    $scope.listaEstadoEmbarcacion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoEstadoEmbarcacion();
            $scope.urlModificar = myProvider.getUrlModificarEstadoEmbarcacion();
            $scope.urlAllEstadoEmbarcacion = myProvider.getUrlAllEstadoEmbarcacion();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id = "";
            $scope.descripcionEstado = "";
            $scope.seleccion = "";
            $scope.seleccionEstado = "";

            $scope.busqueda = "";
            $scope.listaEstadoEmbarcacion;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllEstadoEmbarcacion)
                .then(function (response) {

                    $scope.listaEstadoEmbarcacion = response.data;

                    var n = $scope.listaEstadoEmbarcacion.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaEstadoEmbarcacion[i].estado == $scope.listaEstado[0].id)
                            $scope.listaEstadoEmbarcacion[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaEstadoEmbarcacion[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoEstadoEmbarcacion = function () {

        var obj = {
            descripcion_estado: $scope.descripcionEstado,
            estado: $scope.estado
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
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarEstadoEmbarcacion = function () {

        var obj = {
            id: $scope.id,
            descripcion_estado: $scope.descripcionEstado,
            estado: $scope.estado
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
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.buscarSeleccionEstadoEmbarcacion = function () {

        if ($scope.seleccionEstado != '' && $scope.seleccionEstado != undefined) {

            $scope.seleccionEstadoJS = $scope.seleccionEstado;
            $scope.id = $scope.seleccionEstadoJS._id;
            $scope.descripcionEstado = $scope.seleccionEstadoJS.descripcion_estado;
            $scope.estado = $scope.seleccionEstadoJS.estado.id;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionEstado = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionEstadoEmbarcacion();

    }

}]);

function validarCamposVacios(obj) {

    if (obj.descripcion_estado == "") {

        return false;

    } else {
        return true;
    }

}