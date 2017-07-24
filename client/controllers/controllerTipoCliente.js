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
                    if (response.data != "false") {
                        $scope.iniciar();
                        swal({
                            title: "Ingreso Exitoso!",
                            type: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    } else
                        $(document.getElementById("nombre")).notify("Ya Existe", { position: "right" });
                }, function errorCallback(response) {

                    $.notify("Error!", "error");

                });
        } else {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
    }

    $scope.modificarTipoCliente = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_cliente: $scope.descripcionTipoCliente,
            estado: $scope.estado
        };

        if ($scope.seleccionTipoCliente != "") {
            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {
                        
                        if (response.data != "false") {
                            $scope.iniciar();
                            swal({
                                title: "Modificaci\u00F3n Exitosa!",
                                type: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });
                        } else
                            $(document.getElementById("nombre")).notify("Ya Existe", { position: "right" });
                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });
            } else {
                $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
            }
        } else {
            $(document.getElementById("lista")).notify("Seleccione un Registro", { position: "left middle" });
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

// SOLO LETRAS
function soloLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo Letras", { position: "right" });
        return false;
    }
}

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_cliente == "") {

        return false;

    } else {
        return true;
    }
}