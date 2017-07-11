app.controller('ControllerTripulante', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTripulante;
    $scope.urlAllTipoTripulante;
    $scope.urlBuscarTipoTripulante;

    $scope.nombreTripulante;
    $scope.cedulaTripulante;
    $scope.telefonoTripulante;
    $scope.tipoTripulante;

    $scope.id;
    $scope.seleccionTripulante;
    $scope.seleccionTipoTripulante;


    $scope.busqueda;
    $scope.listaTripulante;
    $scope.listaTipoTripulante;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTripulante();
            $scope.urlModificar = myProvider.getUrlModificarTripulante();
            $scope.urlAllTripulante = myProvider.getUrlAllTripulante();
            $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();
            $scope.urlBuscarTipoTripulante = myProvider.getUrlBuscarTipoTripulante();

            $scope.nombreTripulante = "";
            $scope.cedulaTripulante = "";
            $scope.telefonoTripulante = "";
            $scope.tipoTripulante = "";

            $scope.id = "";
            $scope.seleccionTripulante = "";
            $scope.seleccionTipoTripulante = "";


            $scope.busqueda = "";
            $scope.listaTripulante;
            $scope.listaTipoTripulante;

            $http.get($scope.urlAllTripulante)
                .then(function (response) {

                    $scope.listaTripulante = response.data;

                    var n = $scope.listaTripulante.length;
                    var k = 0;
                    for (var i = 0; i < n; i++) {
                        var tpTrip = {
                            id: $scope.listaTripulante[i].tipo_tripulante
                        }
                        
                        $http.post($scope.urlBuscarTipoTripulante, tpTrip)
                            .then(function (response) {

                                $scope.listaTripulante[k++].tipo_tripulante = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });
                    }
                }, function errorCallback(response) {

                    console.log(response);
                });


            $http.get($scope.urlAllTipoTripulante)
                .then(function (response) {

                    $scope.listaTipoTripulante = response.data;
                    $scope.tipoTripulante = $scope.listaTipoTripulante[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    } else {
        window.location = "../login.html"
    }
    $scope.ingresoTripulante = function () {

        var obj = {
            nombre_tripulante: $scope.nombreTripulante,
            cedula_tripulante: $scope.cedulaTripulante,
            telefono_tripulante: $scope.telefonoTripulante,
            tipo_tripulante: $scope.tipoTripulante
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


    $scope.modificarTripulante = function () {

        var obj = {
            id: $scope.id, nombre_tripulante: $scope.nombreTripulante,
            cedula_tripulante: $scope.cedulaTripulante,
            telefono_tripulante: $scope.telefonoTripulante,
            tipo_tripulante: $scope.tipoTripulante
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

    $scope.buscarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != '' && $scope.seleccionTripulante != undefined) {

            $scope.selecTrip = $scope.seleccionTripulante;

            $scope.id = $scope.selecTrip._id;
            $scope.nombreTripulante = $scope.selecTrip.nombre_tripulante;
            $scope.cedulaTripulante = $scope.selecTrip.cedula_tripulante;
            $scope.telefonoTripulante = $scope.selecTrip.telefono_tripulante;
            $scope.tipoTripulante = $scope.selecTrip.tipo_tripulante._id;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }


    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTripulante = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaTripulante();

    }

}]);

function validarCamposVacios(obj) {

    if (obj.nombre_tripulante == "" || obj.cedula_tripulante == "" ||
        obj.telefono_tripulante == "" || obj.tipo_tripulante == "") {

        return false;

    } else {
        return true;
    }
}
