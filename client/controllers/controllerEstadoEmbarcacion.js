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

    $scope.modificarEstadoEmbarcacion = function () {

        var obj = {
            id: $scope.id,
            descripcion_estado: $scope.descripcionEstado,
            estado: $scope.estado
        };

        if ($scope.seleccionEstado != "") {
            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {
                        console.log(response.data);
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

function numerosLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " (),/.-0123456789áéíóúabcdefghijklmnñopqrstuvwxyz\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo N\u00FAmeros, Letras, /.,-()", { position: "right" });
        return false;
    }
}

function validarCamposVacios(obj) {

    if (obj.descripcion_estado == "") {

        return false;

    } else {
        return true;
    }

}