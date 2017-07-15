app.controller('ControllerCliente', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllClientes;

    $scope.nombreCliente = "";
    $scope.rucCliente = "";
    $scope.direccionCliente = "";
    $scope.telefonoCliente = "";
    $scope.correoCliente = "";
    $scope.tipoCliente = "";

    $scope.id = "";
    $scope.seleccionCliente = "";
    $scope.seleccionTipoCliente = "";

    $scope.busqueda = "";
    $scope.listaClientes = [];
    $scope.listaTipoClientes = [];


    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoCliente();
            $scope.urlModificar = myProvider.getUrlModificarCliente();
            $scope.urlAllClientes = myProvider.getUrlAllClientes();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.nombreCliente = "";
            $scope.rucCliente = "";
            $scope.direccionCliente = "";
            $scope.telefonoCliente = "";
            $scope.correoCliente = "";
            $scope.tipoCliente = "";

            $scope.id = "";
            $scope.seleccionCliente = "";
            $scope.seleccionTipoCliente = "";

            $scope.busqueda = "";
            $scope.listaClientes = [];
            $scope.listaTipoClientes = [];
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllClientes)
                .then(function (response) {

                    $scope.listaClientes = response.data;

                    var n = $scope.listaClientes.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaClientes[i].estado == $scope.listaEstado[0].id)
                            $scope.listaClientes[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaClientes[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });

            $scope.listaTipoClientes = [{ id: '1', nombre: 'Preferencial' }, { id: '2', nombre: "normal" },
            { id: '3', nombre: "moroso" }];
            $scope.tipoCliente = "1";
        }

    } else {
        window.location = "../login.html"
    }
    $scope.ingresoCliente = function () {

        var obj = {
            nombre_cliente: $scope.nombreCliente,
            ruc_cliente: $scope.rucCliente,
            direccion_cliente: $scope.direccionCliente,
            telefono_cliente: $scope.telefonoCliente,
            correo_cliente: $scope.correoCliente,
            tipo_cliente: $scope.tipoCliente,
            estado: $scope.estado
        };

        if (validarCamposVacios(obj)) {
            if (validateEmail(obj.correo_cliente)) {
                $http.post($scope.url, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Ingreso Correcto", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });
            } else {
                $.notify("Correo Invalido!", "error");
            }
        } else {
            $.notify("Revise los Campos", "info");
        }
    }
    
    $scope.modificarCliente = function () {

        var obj = {
            id: $scope.id,
            nombre_cliente: $scope.nombreCliente,
            ruc_cliente: $scope.rucCliente,
            direccion_cliente: $scope.direccionCliente,
            telefono_cliente: $scope.telefonoCliente,
            correo_cliente: $scope.correoCliente,
            tipo_cliente: $scope.tipoCliente,
            estado: $scope.estado
        };

        if (validarCamposVacios(obj)) {
            if (validateEmail(obj.correo_cliente)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Modificacion Exitosa", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");
                    });
            } else {
                $.notify("Correo Invalido!", "error");
            }
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.buscarTipoCliente = function () {

        for (var i = 0; i < $scope.listaTipoClientes.length; i++) {
            if ($scope.tipoCliente != '' && $scope.tipoCliente != undefined) {

                if ($scope.tipoCliente == $scope.listaTipoClientes[i].id) {
                    $scope.seleccionTipoCliente = $scope.listaTipoClientes[i];
                }

            }
        }

    }

    $scope.buscarSeleccionListaCliente = function () {

        if ($scope.seleccionCliente != '' && $scope.seleccionCliente != undefined) {

            $scope.selecCli = $scope.seleccionCliente;

            $scope.id = $scope.selecCli._id;
            $scope.nombreCliente = $scope.selecCli.nombre_cliente;
            $scope.rucCliente = $scope.selecCli.ruc_cliente;
            $scope.direccionCliente = $scope.selecCli.direccion_cliente;
            $scope.telefonoCliente = $scope.selecCli.telefono_cliente;
            $scope.correoCliente = $scope.selecCli.correo_cliente;
            $scope.tipoCliente = $scope.selecCli.tipo_cliente;
            $scope.estado = $scope.selecCli.estado.id;
            //$scope.buscarTipoCliente();

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionCliente = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaCliente();

    }

}]);

function validarCamposVacios(obj) {
    if (obj.nombre_cliente == "" || obj.correo_cliente == "" || obj.ruc_cliente == "" ||
        obj.direccion_cliente == "" || obj.telefono_cliente == "" || obj.tipo_cliente == "") {
        return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}