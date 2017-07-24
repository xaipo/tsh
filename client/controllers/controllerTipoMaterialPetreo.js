app.controller('ControllerTipoMaterialPetreo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoMaterial;

    $scope.descripcionTipoMaterial;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoMaterial;

    $scope.busqueda;
    $scope.listaTipoMaterial;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoMaterialPetreo();
            $scope.urlModificar = myProvider.getUrlModificarTipoMaterialPetreo();
            $scope.urlAllTipoMaterial = myProvider.getUrlAllTipoMaterialPetreo();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.descripcionTipoMaterial = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionTipoMaterial = "";

            $scope.busqueda = "";
            $scope.listaTipoMaterial;
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoMaterial)
                .then(function (response) {

                    $scope.listaTipoMaterial = response.data;

                    var n = $scope.listaTipoMaterial.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoMaterial[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoMaterial[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTipoMaterial[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoMaterial = function () {

        var obj = {
            descripcion_tipo_material: $scope.descripcionTipoMaterial,
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

    $scope.modificarTipoMaterial = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_material: $scope.descripcionTipoMaterial,
            estado: $scope.estado
        };

        if ($scope.seleccionTipoMaterial != "") {
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

    $scope.buscarSeleccionTipoMaterial = function () {

        if ($scope.seleccionTipoMaterial != '' && $scope.seleccionTipoMaterial != undefined) {

            $scope.selecTipoMaterial = $scope.seleccionTipoMaterial;
            $scope.id = $scope.selecTipoMaterial._id;
            $scope.descripcionTipoMaterial = $scope.selecTipoMaterial.descripcion_tipo_material;
            $scope.estado = $scope.selecTipoMaterial.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTipoMaterial = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionTipoMaterial();

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
    if (obj.descripcion_tipo_material == "") {

        return false;

    } else {
        return true;
    }
}