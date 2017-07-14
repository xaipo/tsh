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

            $scope.listaEstado = [{ id: '1', estado: 'Activado' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoEmbarcacion)
                .then(function (response) {

                    $scope.listaTipoEmbarcacion = response.data;

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

                    $scope.iniciar();
                    $.notify("Ingreso Correcto", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarTipoEmbarcacion = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_embarcacion: $scope.descripcionTipoEmbarcacion,
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

    $scope.buscarSeleccionTipoEmbarcacion = function (aux) {

        if ($scope.seleccionTipoEmbarcacion != '' && $scope.seleccionTipoEmbarcacion != undefined) {

            $scope.selecTipEmb = JSON.parse($scope.seleccionTipoEmbarcacion);

            $scope.id = $scope.selecTipEmb._id;
            $scope.descripcionTipoEmbarcacion = $scope.selecTipEmb.descripcion_tipo_embarcacion;
            $scope.estado = $scope.selecTipEmb.estado;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_embarcacion == "") {

        return false;

    } else {
        return true;
    }
}