app.controller('ControllerPropietario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPropietario;

    $scope.nombrePropietario;
    $scope.cedulaPropietario;
    $scope.telefonoPropietario;
    $scope.celularPropietario;
    $scope.correoPropietario;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionPropietario;

    $scope.busqueda;
    $scope.listaPropietario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoPropietario();
            $scope.urlModificar = myProvider.getUrlModificarPropietario();
            $scope.urlAllPropietario = myProvider.getUrlAllPropietario();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.nombrePropietario = "";
            $scope.cedulaPropietario = "";
            $scope.telefonoPropietario = "";
            $scope.celularPropietario = "";
            $scope.correoPropietario = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionPropietario = "";

            $scope.busqueda = "";
            $scope.listaPropietario;

            $http.get($scope.urlAllPropietario)
                .then(function (response) {

                    $scope.listaPropietario = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoPropietario = function () {

        var obj = {
            nombre_propietario: $scope.nombrePropietario,
            cedula_propietario: $scope.cedulaPropietario,
            telefono_propietario: $scope.telefonoPropietario,
            celular_propietario: $scope.celularPropietario,
            correo_propietario: $scope.correoPropietario
        };

        if (validarCamposVacios(obj)) {
            if (validateEmail(obj.correo_propietario)) {
                $http.post($scope.url, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Ingreso Correcto", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });
            } else {
                $.notify("Correo Invalido!", "error");
            }
        } else {
            $.notify("Revise los Campos", "info");
        }
    }


    $scope.modificarPropietario = function () {

        var obj = {
            id: $scope.id, nombre_propietario: $scope.nombrePropietario,
            cedula_propietario: $scope.cedulaPropietario,
            telefono_propietario: $scope.telefonoPropietario,
            celular_propietario: $scope.celularPropietario,
            correo_propietario: $scope.correoPropietario
        };

        if (validarCamposVacios(obj)) {
            if (validateEmail(obj.correo_propietario)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        $.notify("Modificacion Exitosa", "success");

                    }, function errorCallback(response) {

                        $.notify("Error!", "error");
                    });
            } else {
                $.notify("Correo Invalido!", "error");
            }
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.buscarSeleccionPropietario = function () {

        if ($scope.seleccionPropietario != '' && $scope.seleccionPropietario != undefined) {

            $scope.selecProp = $scope.seleccionPropietario;

            $scope.id = $scope.selecProp._id;
            $scope.nombrePropietario = $scope.selecProp.nombre_propietario;
            $scope.cedulaPropietario = $scope.selecProp.cedula_propietario;
            $scope.telefonoPropietario = $scope.selecProp.telefono_propietario;
            $scope.celularPropietario = $scope.selecProp.celular_propietario;
            $scope.correoPropietario = $scope.selecProp.correo_propietario;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionPropietario = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionPropietario();

    }

}]);


function validarCamposVacios(obj) {

    if (obj.nombre_propietario == "" || obj.correo_propietario == "" || obj.cedula_propietario == "" ||
        obj.telefono_propietario == "" || obj.celular_propietario == "") {

        return false;

    } else {
        return true;
    }

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}