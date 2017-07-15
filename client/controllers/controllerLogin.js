app.controller('ControllerLogin', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.urlBuscarUsuario;
    $scope.urlBuscarTipoUsuario;
    $scope.urlAutenticacion;

    $scope.nombreUsuario;
    $scope.password;
    $scope.usuario;
    $scope.tipoUsuario;

    $scope.iniciar = function () {

        $scope.nombreUsuario = "";
        $scope.password = "";

        if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {

            $scope.usuario = JSON.parse(localStorage.getItem("user"));
            $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            $.notify("Bienvenido", "success");
        }


        $scope.url = myProvider.getUrlBuscarUsuario();
        $scope.urlBuscarTipoUsuario = myProvider.getUrlBuscarTipoUsuario();
        $scope.urlAutenticacion = myProvider.getUrlAutenticar();
        $scope.urlPerfil = myProvider.getUrlPerfil();


    }

    $scope.login = function () {

        var user = {

            nombreUsuario: $scope.nombreUsuario,
            password: $scope.password

        }

        if (validarVacios(user)) {

            $http({
                method: 'POST',
                url: $scope.urlAutenticacion,
                data: {
                    username: user.nombreUsuario,
                    password: user.password
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function successCallback(response) {

                if (response.data.user.estado == "1") {
                    localStorage.setItem("id_token", response.data.token);

                    $http({
                        method: 'GET',
                        url: $scope.urlPerfil,
                        headers: {
                            'Authorization': localStorage.getItem("id_token"),
                            'Content-Type': 'application/json'
                        }

                    }).then(function successCallback(response) {

                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        var tipUsu = {
                            id: response.data.user.type_user
                        }

                        $http.post($scope.urlBuscarTipoUsuario, tipUsu)
                            .then(function (response) {

                                localStorage.setItem("tipoUser", JSON.stringify(response.data));

                                if (response.data.descripcion_tipo_usuario == "administrador") {
                                    window.location = "menu.html";
                                }

                                if (response.data.descripcion_tipo_usuario == "timonel") {
                                    window.location = "menuTimonel.html";
                                }

                                if (response.data.descripcion_tipo_usuario == "maquinista") {
                                    window.location = "menuMaquinista.html";
                                }

                                if (response.data.descripcion_tipo_usuario == "marinero") {
                                    window.location = "menuMarinero.html";
                                }

                            }, function errorCallback(response) {

                                console.log(response);

                            });

                    }, function errorCallback(response) {

                        $.notify("Usuario o Clave Incorrectos!! ");

                    });

                } else {
                    $.notify("Usuario Inactivo!! ");
                }
            }, function errorCallback(response) {

                $.notify(" ERROR!! ");

            });

        } else {

            $.notify("Revise los Campos!! ");
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "login.html";

    }

}]);

function validarVacios(user) {

    if (user.nombreUsuario == "" || user.password == "") {

        return false;

    } else {
        return true;
    }

}