app.controller('ControllerTipoEmbacacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoEmbarcacion;

    $scope.id;
    $scope.seleccionTipoEmbarcacion;
    $scope.descripcionTipoEmbarcacion;

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoEmbarcacion();
            $scope.urlModificar = myProvider.getUrlModificarTipoEmbarcacion();
            $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id = "";
            $scope.seleccionTipoEmbarcacion = "";
            $scope.descripcionTipoEmbarcacion = "";

            $scope.busqueda = "";
            $scope.listaTipoEmbarcacion;
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoEmbarcacion)
                .then(function (response) {

                    $scope.listaTipoEmbarcacion = response.data;

                    var n = $scope.listaTipoEmbarcacion.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoEmbarcacion[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoEmbarcacion[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTipoEmbarcacion[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoEmbarcacion = function () {

        var obj = {
            descripcion_tipo_embarcacion: $scope.descripcionTipoEmbarcacion,
            estado: $scope.estado
        };

        if (validarCamposVacios(obj)) {
            $http.post($scope.url, obj)
                .then(function (response) {
                    if (response.data == "true") {
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

    $scope.modificarTipoEmbarcacion = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_embarcacion: $scope.descripcionTipoEmbarcacion,
            estado: $scope.estado
        };

        if ($scope.seleccionTipoEmbarcacion != "") {
            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        if (response.data == "true") {
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

    $scope.buscarSeleccionTipoEmbarcacion = function (aux) {

        if ($scope.seleccionTipoEmbarcacion != '' && $scope.seleccionTipoEmbarcacion != undefined) {

            $scope.selecTipEmb = $scope.seleccionTipoEmbarcacion;

            $scope.id = $scope.selecTipEmb._id;
            $scope.descripcionTipoEmbarcacion = $scope.selecTipEmb.descripcion_tipo_embarcacion;
            $scope.estado = $scope.selecTipEmb.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTipoEmbarcacion = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionTipoEmbarcacion();

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
    if (obj.descripcion_tipo_embarcacion == "") {

        return false;

    } else {
        return true;
    }
}