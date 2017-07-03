app.controller('ControllerUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlRegister;
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
            $scope.urlRegister = myProvider.getUrlRegister();
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

                }, function errorCallback(response) {

                    console.log(response);
                });

        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoUsuario = function () {

        const user = {
            name: $scope.nombresCompletos,
            username: $scope.nombreUsuario,
            identification_card: $scope.cedulaUsuario,
            password: $scope.contrasenaUsuario,
            phone: $scope.telefonoUsuario,
            email: $scope.correoUsuario,
            type_user: $scope.tipoUsuario
        }
        //console.log(JSON.stringify(user));
        if (!validarCamposVacios(user)) {
            alert("existen campos vacios");
        } else {
            if (!validateEmail(user.email)) {
                alert("correo invalido");
            } else {

                $http.post($scope.urlRegister, user)
                    .then(function (response) {

                        $scope.iniciar();
                        console.log(response);

                    }, function errorCallback(response) {

                        console.log(response);
                    });

            }
        }
    }

    $scope.modificarUsuario = function () {

        var obj = {
            id: $scope.id,
            name: $scope.nombresCompletos,
            username: $scope.nombreUsuario,
            identification_card: $scope.cedulaUsuario,
            password: $scope.contrasenaUsuario,
            phone: $scope.telefonoUsuario,
            email: $scope.correoUsuario,
            type_user: $scope.tipoUsuario
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
            $scope.nombreUsuario = $scope.selecUsu.username;
            $scope.nombresCompletos = $scope.selecUsu.name;
            $scope.cedulaUsuario = $scope.selecUsu.identification_card;
            $scope.contrasenaUsuario = $scope.selecUsu.password;
            $scope.telefonoUsuario = $scope.selecUsu.phone;
            $scope.correoUsuario = $scope.selecUsu.email;
            $scope.tipoUsuario = $scope.selecUsu.type_user;
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