app.controller('ControllerTipoCliente', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoCliente;


    $scope.id;
    $scope.descripcionTipoCliente;
    $scope.seleccion;
    $scope.seleccionTipoCliente;

    $scope.busqueda;
    $scope.listaTipoCliente;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoCliente();
            $scope.urlModificar = myProvider.getUrlModificarTipoCliente();
            $scope.urlAllTipoCliente = myProvider.getUrlALLTipoCliente();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id = "";
            $scope.descripcionTipoCliente = "";
            $scope.seleccion = "";
            $scope.seleccionTipoCliente = "";

            $scope.busqueda;
            $scope.listaTipoCliente;
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoCliente)
                .then(function (response) {

                    $scope.listaTipoCliente = response.data;

                    var n = $scope.listaTipoCliente.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoCliente[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoCliente[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTipoCliente[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoCliente = function () {

        var obj = {
            descripcion_tipo_cliente: $scope.descripcionTipoCliente,
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

    $scope.modificarTipoCliente = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_cliente: $scope.descripcionTipoCliente,
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

    $scope.buscarseleccionTipoCliente = function () {

        if ($scope.seleccionTipoCliente != '' && $scope.seleccionTipoCliente != undefined) {

            $scope.selecTipCli = $scope.seleccionTipoCliente;
            $scope.id = $scope.selecTipCli._id;
            $scope.descripcionTipoCliente = $scope.selecTipCli.descripcion_tipo_cliente;
            $scope.estado = $scope.selecTipCli.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTipoCliente = item;
        $scope.selectedRow = index;

        $scope.buscarseleccionTipoCliente();

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_cliente == "") {

        return false;

    } else {
        return true;
    }
}