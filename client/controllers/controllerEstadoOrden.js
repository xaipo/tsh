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

            $scope.id = "";
            $scope.descripcionEstado = "";
            $scope.seleccion = "";
            $scope.seleccionEstado = "";

            $scope.busqueda = "";
            $scope.listaEstadoOrden;

            $http.get($scope.urlAllEstadoOrden)
                .then(function (response) {

                    $scope.listaEstadoOrden = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoEstadoOrden = function () {

        var obj = {
            descripcion_estado: $scope.descripcionEstado
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

    $scope.modificarEstadoOrden = function () {

        var obj = {
            id: $scope.id,
            descripcion_estado: $scope.descripcionEstado
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

    $scope.buscarSeleccionEstadoOrden = function () {

        if ($scope.seleccionEstado != '' && $scope.seleccionEstado != undefined) {

            $scope.seleccionEstadoJS = JSON.parse($scope.seleccionEstado);
            $scope.id = $scope.seleccionEstadoJS._id;
            $scope.descripcionEstado = $scope.seleccionEstadoJS.descripcion_estado;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {

    if (obj.descripcion_estado == "") {

        return false;

    } else {
        return true;
    }

}