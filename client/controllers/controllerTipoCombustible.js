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

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoCombustible)
                .then(function (response) {

                    $scope.listaTipoCombustible = response.data;
                    var n = $scope.listaTipoCombustible.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoCombustible[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoCombustible[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTipoCombustible[i].estado = $scope.listaEstado[1];
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

                    $scope.iniciar();
                    $.notify("Ingreso Correcto", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarTipoCombustible = function () {

        var obj = {
            _id: $scope.id,
            descripcion_tipo_combustible: $scope.descripcionTipoCombustible,
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

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_combustible == "") {

        return false;

    } else {
        return true;
    }
}