app.controller('ControllerTipoCombustible', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoCombustible;

    $scope.descripcionTipoCombustible;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoCombustible;

    $scope.busqueda;
    $scope.listaTipoCombustible;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoCombustible();
            $scope.urlModificar = myProvider.getUrlModificarTipoCombustible();
            $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.descripcionTipoCombustible = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionTipoCombustible = "";

            $scope.busqueda = "";
            $scope.listaTipoCombustible;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "transporte" }, { id: '3', estado: "inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoCombustible)
                .then(function (response) {

                    $scope.listaTipoCombustible = response.data;
                    var n = $scope.listaTipoCombustible.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoCombustible[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoCombustible[i].estado = $scope.listaEstado[0];

                        if ($scope.listaTipoCombustible[i].estado == $scope.listaEstado[1].id)
                            $scope.listaTipoCombustible[i].estado = $scope.listaEstado[1];

                        if ($scope.listaTipoCombustible[i].estado == $scope.listaEstado[2].id)
                            $scope.listaTipoCombustible[i].estado = $scope.listaEstado[2];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoCombustible = function () {

        var obj = {
            descripcion_tipo_combustible: $scope.descripcionTipoCombustible,
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

    $scope.modificarTipoCombustible = function () {

        var obj = {
            _id: $scope.id,
            descripcion_tipo_combustible: $scope.descripcionTipoCombustible,
            estado: $scope.estado
        };

        if ($scope.seleccionTipoCombustible != "") {
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

    $scope.buscarSeleccionTipoCombustible = function () {

        if ($scope.seleccionTipoCombustible != '' && $scope.seleccionTipoCombustible != undefined) {

            $scope.selecTipComb = $scope.seleccionTipoCombustible;

            $scope.id = $scope.selecTipComb._id;
            $scope.descripcionTipoCombustible = $scope.selecTipComb.descripcion_tipo_combustible;
            $scope.estado = $scope.selecTipComb.estado.id;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTipoCombustible = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionTipoCombustible();

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
    if (obj.descripcion_tipo_combustible == "") {

        return false;

    } else {
        return true;
    }
}