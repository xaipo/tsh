app.controller('ControllerPuerto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPuertos;
    $scope.descripcionPuerto;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionPuerto;

    $scope.busqueda;
    $scope.listaPuertos;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {

            $scope.url = myProvider.getUrlIngresoPuerto();
            $scope.urlModificar = myProvider.getUrlModificarPuerto();
            $scope.urlAllPuertos = myProvider.getUrlAllPuerto();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.descripcionPuerto = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionPuerto = "";

            $scope.busqueda = "";
            $scope.listaPuertos = "";
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllPuertos)
                .then(function (response) {

                    $scope.listaPuertos = response.data;

                    var n = $scope.listaPuertos.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaPuertos[i].estado == $scope.listaEstado[0].id)
                            $scope.listaPuertos[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaPuertos[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    } else {
        window.location = "../login.html"
    }
    $scope.ingresoPuerto = function () {

        var obj = {
            descripcion_puerto: $scope.descripcionPuerto,
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

    $scope.modificarPuerto = function () {

        var obj = {
            id: $scope.id,
            descripcion_puerto: $scope.descripcionPuerto,
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

    $scope.buscarSeleccionPuerto = function () {

        if ($scope.seleccionPuerto != '' && $scope.seleccionPuerto != undefined) {

            $scope.selecPuerto = $scope.seleccionPuerto;
            $scope.id = $scope.selecPuerto._id;
            $scope.descripcionPuerto = $scope.selecPuerto.descripcion_puerto;
            $scope.estado = $scope.selecPuerto.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionPuerto = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionPuerto();

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_puerto == "") {

        return false;

    } else {
        return true;
    }
}