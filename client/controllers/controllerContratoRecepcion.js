
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

                    $scope.iniciar();
                    $.notify("Ingreso Correcto", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");

                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarContratoRecepcion = function () {

        var obj = {
            id: $scope.id,
            descripcion_contrato_recepcion: $scope.descripcionContratoRecepcion,
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

function validarCamposVacios(obj) {

    if (obj.descripcion_contrato_recepcion == "") {

        return false;

    } else {
        return true;
    }

}