app.controller('ControllerUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllUsuario;
    $scope.urlAllTipoUsuario;


    $scope.nombreUsuario;
    $scope.nombresCompletos;
    $scope.cedulaUsuario;
    $scope.contrasenaUsuario;
    $scope.telefonoUsuario;
    $scope.correoUsuario;
    $scope.tipoUsuario;

    $scope.id;
    $scope.seleccionUsuario;
    $scope.seleccionTipoUsuario;


    $scope.busqueda;
    $scope.listaUsuario;
    $scope.listaTipoUsuario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {

            $scope.nombreUsuario = "";
            $scope.correoUsuario = "";
            $scope.nombresCompletos = "";
            $scope.contrasenaUsuario = "";
            $scope.telefonoUsuario = "";
            $scope.tipoUsuario = "";
            $scope.cedulaUsuario = "";

            $scope.url = myProvider.getUrlIngresoUsuario();
            $scope.urlModificar = myProvider.getUrlModificarUsuario();
            $scope.urlAllUsuario = myProvider.getUrlAllUsuario();
            $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoUsuario();

            $http.get($scope.urlAllUsuario)
                .then(function (response) {

                    $scope.listaUsuario = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });


            $http.get($scope.urlAllTipoUsuario)
                .then(function (response) {

                    $scope.listaTipoUsuario = response.data;
                    $scope.tipoUsuario = $scope.listaTipoUsuario[0]._id;
                    console.log($scope.listaTipoUsuario);

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    } else {
        window.location = "../login.html"
    }
    $scope.ingresoUsuario = function () {
        //console.log($scope.nombreUsuario);
        const user = {
            nombres_completos: $scope.nombresCompletos,
            nombre_usuario: $scope.nombreUsuario,
            cedula_usuario: $scope.cedulaUsuario,
            contrasena_usuario: $scope.contrasenaUsuario,
            telefono_usuario: $scope.telefonoUsuario,
            correo_usuario: $scope.correoUsuario,
            tipo_usuario: $scope.tipoUsuario
        }
        console.log(JSON.stringify(user));
        if (!validarCamposVacios(user)) {
            alert("existen campos vacios");
        } else {
            if (!validateEmail(user.correoUsuario)) {
                alert("correo invalido");
            } else {

                var obj = {
                    nombres_completos: $scope.nombresCompletos,
                    nombre_usuario: $scope.nombreUsuario,
                    cedula_usuario: $scope.cedulaUsuario,
                    contrasena_usuario: $scope.contrasenaUsuario,
                    telefono_usuario: $scope.telefonoUsuario,
                    correo_usuario: $scope.correoUsuario,
                    tipo_usuario: $scope.tipoUsuario
                };
                $http.post($scope.url, obj)
                    .then(function (response) {

                        $scope.iniciar();
                        console.log(response);

                    }, function errorCallback(response) {

                        console.log(response);
                    });

            }
        }
        //


    }

    $scope.modificarUsuario = function () {

        var obj = {
            id: $scope.id,
            nombres_completos: $scope.nombresCompletos,
            nombre_usuario: $scope.nombreUsuario,
            cedula_usuario: $scope.cedulaUsuario,
            contrasena_usuario: $scope.contrasenaUsuario,
            telefono_usuario: $scope.telefonoUsuario,
            correo_usuario: $scope.correoUsuario,
            tipo_usuario: $scope.tipoUsuario
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionListaUsuario = function () {

        if ($scope.seleccionUsuario != '' && $scope.seleccionUsuario != undefined) {

            $scope.selecUsu = JSON.parse($scope.seleccionUsuario);

            $scope.id = $scope.selecUsu._id;
            $scope.nombreUsuario = $scope.selecUsu.nombre_usuario;
            $scope.nombresCompletos = $scope.selecUsu.nombres_completos;
            $scope.cedulaUsuario = $scope.selecUsu.cedula_usuario;
            $scope.contrasenaUsuario = $scope.selecUsu.contrasena_usuario;
            $scope.telefonoUsuario = $scope.selecUsu.telefono_usuario;
            $scope.correoUsuario = $scope.selecUsu.correo_usuario;
            $scope.tipoUsuario = $scope.selecUsu.tipo_usuario;
            console.log($scope.selecUsu);
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);


function validarCamposVacios(user) {

    if (user.nombreUsuario == "" || user.correoUsuario == "" || user.nombresCompletos == "" ||
        user.contrasenaUsuario == "" || user.cedulaUsuario == "" || user.telefonoUsuario == "" || user.tipoUsuario == "") {

        return false;

    } else {
        return true;
    }

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}