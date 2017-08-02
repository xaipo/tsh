app.controller('ControllerLogin', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.urlBuscarUsuario;
    $scope.urlBuscarTipoUsuario;
    $scope.urlAutenticacion;

    $scope.nombreUsuario;
    $scope.password;
    $scope.usuario;
    $scope.tipoUsuario;

    //var aux = localStorage.getItem("id_token");
    //if (aux == null) {

    $scope.iniciar = function () {

        $scope.nombreUsuario = "";
        $scope.password = "";

        $scope.url = myProvider.getUrlBuscarUsuario();
        $scope.urlBuscarTipoUsuario = myProvider.getUrlBuscarTipoUsuario();
        $scope.urlAutenticacion = myProvider.getUrlAutenticar();
        $scope.urlPerfil = myProvider.getUrlPerfil();
    }

    //} else {
    //    $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));

    //    if ($scope.tipoUsuario.descripcion_tipo_usuario == "administrador") {
    //        window.location = "menu.html";
    //    }

    //    if ($scope.tipoUsuario.descripcion_tipo_usuario == "timonel") {
    //        window.location = "menuTimonel.html";
    //    }

    //    if ($scope.tipoUsuario.descripcion_tipo_usuario == "maquinista") {
    //        window.location = "menuMaquinista.html";
    //    }

    //    if ($scope.tipoUsuario.descripcion_tipo_usuario == "marinero") {
    //        window.location = "menuMarinero.html";
    //    }
    //}

    $scope.login = function () {

        var aux = localStorage.getItem("id_token");
        if (aux == null) {
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
                    console.log(response.data);
                    if (response.data.success == true) {
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
                    } else {
                        $.notify("Usuario o Clave Incorrectos!! ");
                    }
                }, function errorCallback(response) {

                    $.notify(" ERROR!! ");

                });

            } else {

                $.notify("Revise los Campos!! ");
            }
        } else {

            //$scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));

            //if ($scope.tipoUsuario.descripcion_tipo_usuario == "administrador") {
            //    window.location = "menu.html";
            //}

            //if ($scope.tipoUsuario.descripcion_tipo_usuario == "timonel") {
            //    window.location = "menuTimonel.html";
            //}

            //if ($scope.tipoUsuario.descripcion_tipo_usuario == "maquinista") {
            //    window.location = "menuMaquinista.html";
            //}

            //if ($scope.tipoUsuario.descripcion_tipo_usuario == "marinero") {
            //    window.location = "menuMarinero.html";
            //}
            $.notify("Ya a iniciado Secci\u00F3n Cierre para volver ingresar!! ");
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "login.html";

    }

}]);

function validarVacios(user) {

    if (user.nombreUsuario == "" || user.password == "" || user.nombreUsuario == undefined || user.password == undefined) {

        if (user.nombreUsuario == "" || user.nombreUsuario == undefined)
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });

        if (user.password == "" || user.password == undefined)
            $(document.getElementById("psswd")).notify("Campo Vac\u00EDo", { position: "right" });

        return false;

    } else {
        return true;
    }

}