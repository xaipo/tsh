app.controller('ControllerTipoAlimentos', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoAlimentos;


    $scope.id;
    $scope.descripcionTipoAlimento;
    $scope.seleccion;
    $scope.seleccionTipoAlimento;

    $scope.busqueda;
    $scope.listaTipoAlimentos;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoAlimentos();
            $scope.urlModificar = myProvider.getUrlModificarTipoAlimentos();
            $scope.urlAllTipoAlimentos = myProvider.getUrlALLTipoAlimentos();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.id = "";
            $scope.descripcionTipoAlimento = "";
            $scope.seleccion = "";
            $scope.seleccionTipoAlimento = "";

            $scope.busqueda;
            $scope.listaTipoAlimentos;
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activado' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoAlimentos)
                .then(function (response) {

                    $scope.listaTipoAlimentos = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoAlimentos = function () {

        var obj = {
            descripcion_tipo_alimento: $scope.descripcionTipoAlimento,
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

    $scope.modificarTipoAlimentos = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_alimento: $scope.descripcionTipoAlimento,
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

    $scope.buscarseleccionTipoAlimento = function () {

        if ($scope.seleccionTipoAlimento != '' && $scope.seleccionTipoAlimento != undefined) {

            $scope.selecTipAlim = JSON.parse($scope.seleccionTipoAlimento);
            $scope.id = $scope.selecTipAlim._id;
            $scope.descripcionTipoAlimento = $scope.selecTipAlim.descripcion_tipo_alimento;
            $scope.estado = $scope.selecTipAlim.estado;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_alimento == "") {

        return false;

    } else {
        return true;
    }
}