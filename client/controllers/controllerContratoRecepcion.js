
app.controller('ControllerContratoRecepcion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllContratoRecepcion;

    $scope.descripcionContratoRecepcion;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionContratoRecepcion;

    $scope.busqueda;
    $scope.listaContratoRecepcion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoContratoRecepcion();
            $scope.urlModificar = myProvider.getUrlModificarContratoRecepcion();
            $scope.urlAllContratoRecepcion = myProvider.getUrlAllContratoRecepcion();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.descripcionContratoRecepcion = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionContratoRecepcion = "";

            $scope.busqueda = "";
            $scope.listaContratoRecepcion = [];
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllContratoRecepcion)
                .then(function (response) {

                    $scope.listaContratoRecepcion = response.data;

                    var n = $scope.listaContratoRecepcion.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaContratoRecepcion[i].estado == $scope.listaEstado[0].id)
                            $scope.listaContratoRecepcion[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaContratoRecepcion[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }
    $scope.ingresoContratoRecepcion = function () {

        var obj = {
            descripcion_contrato_recepcion: $scope.descripcionContratoRecepcion,
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

    $scope.modificarContratoRecepcion = function () {

        var obj = {
            id: $scope.id,
            descripcion_contrato_recepcion: $scope.descripcionContratoRecepcion,
            estado: $scope.estado
        };

        if ($scope.seleccionContratoRecepcion != "") {
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

    $scope.buscarSeleccionContratoRecepcion = function () {

        if ($scope.seleccionContratoRecepcion != '' && $scope.seleccionContratoRecepcion != undefined) {

            $scope.selecContRecep = $scope.seleccionContratoRecepcion;

            $scope.id = $scope.selecContRecep._id;
            $scope.descripcionContratoRecepcion = $scope.selecContRecep.descripcion_contrato_recepcion;
            $scope.estado = $scope.selecContRecep.estado.id;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionContratoRecepcion = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionContratoRecepcion();

    }

}]);

// PERMITE INGRESAR NUMEROS, LETRAS /-(),.
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

    if (obj.descripcion_contrato_recepcion == "") {

        return false;

    } else {
        return true;
    }

}