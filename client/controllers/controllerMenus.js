app.controller('ControllerMenus', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.urlBuscarUsuario;
    $scope.urlBuscarTipoUsuario;
    $scope.urlAutenticacion;

    $scope.nombreUsuario;
    $scope.password;
    $scope.usuario;
    $scope.tipoUsuario;

    //var aux = localStorage.getItem("id_token");
    //if (aux != null) {

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

    $scope.logout = function () {

        localStorage.clear();
        window.location = "login.html";

    }

}]);