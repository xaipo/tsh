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

            $http.get($scope.urlAllTipoCombustible)
                .then(function (response) {

                    $scope.listaTipoCombustible = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoCombustible = function () {

        var obj = {
            descripcion_tipo_combustible: $scope.descripcionTipoCombustible
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
            _id: $scope.id, descripcion_tipo_combustible: $scope.descripcionTipoCombustible
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

            $scope.selecTipComb = JSON.parse($scope.seleccionTipoCombustible);

            $scope.id = $scope.selecTipComb._id;
            $scope.descripcionTipoCombustible = $scope.selecTipComb.descripcion_tipo_combustible;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_combustible == "") {

        return false;

    } else {
        return true;
    }
}