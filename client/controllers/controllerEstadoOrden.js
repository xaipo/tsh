app.controller('ControllerEstadoOrden', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllEstadoOrden;

    $scope.id;
    $scope.descripcionEstado;
    $scope.seleccion;
    $scope.seleccionEstado;

    $scope.busqueda;
    $scope.listaEstadoOrden;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoEstadoOrden();
            $scope.urlModificar = myProvider.getUrlModificarEstadoOrden();
            $scope.urlAllEstadoOrden = myProvider.getUrlAllEstadoOrden();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id = "";
            $scope.descripcionEstado = "";
            $scope.seleccion = "";
            $scope.seleccionEstado = "";

            $scope.busqueda = "";
            $scope.listaEstadoOrden;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllEstadoOrden)
                .then(function (response) {

                    $scope.listaEstadoOrden = response.data;

                    var n = $scope.listaEstadoOrden.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaEstadoOrden[i].estado == $scope.listaEstado[0].id)
                            $scope.listaEstadoOrden[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaEstadoOrden[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoEstadoOrden = function () {

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

    $scope.modificarEstadoOrden = function () {

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

    $scope.buscarSeleccionEstadoOrden = function () {

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

        $scope.buscarSeleccionEstadoOrden();

    }

}]);

function validarCamposVacios(obj) {

    if (obj.descripcion_estado == "") {

        return false;

    } else {
        return true;
    }

}