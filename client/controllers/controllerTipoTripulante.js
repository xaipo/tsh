app.controller('ControllerTipoTripulante', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoTripulante;

    $scope.descripcionTipoTripulante;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoTripulante;

    $scope.busqueda;
    $scope.listaTipoUsuario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoTripulante();
            $scope.urlModificar = myProvider.getUrlModificarTipoTripulante();
            $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoTripulante();

            $scope.descripcionTipoTripulante = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionTipoTripulante = "";

            $scope.busqueda = "";
            $scope.listaTipoUsuario;

            $http.get($scope.urlAllTipoUsuario)
                .then(function (response) {

                    $scope.listaTipoTripulante = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoTripulante = function () {

        var obj = {
            descripcion_tipo_tripulante: $scope.descripcionTipoTripulante
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

    $scope.modificarTipoTripulante = function () {

        var obj = {
            id: $scope.id, descripcion_tipo_tripulante: $scope.descripcionTipoTripulante
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

    $scope.buscarSeleccionTipoTripulante = function () {

        if ($scope.seleccionTipoTripulante != '' && $scope.seleccionTipoTripulante != undefined) {

            $scope.selecTipTrip = JSON.parse($scope.seleccionTipoTripulante);

            $scope.id = $scope.selecTipTrip._id;
            $scope.descripcionTipoTripulante = $scope.selecTipTrip.descripcion_tipo_tripulante;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);


function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_tripulante == "") {

        return false;

    } else {
        return true;
    }
}