app.controller('ControllerLogin', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.urlBuscarUsuario;
    $scope.urlBuscarTipoUsuario;
    $scope.urlAutenticacion;

    $scope.nombreUsuario;
    $scope.password;

    $scope.iniciar = function () {

        $scope.nombreUsuario = "";
        $scope.password = "";

        $scope.url = myProvider.getUrlBuscarUsuario();
        $scope.urlBuscarTipoUsuario = myProvider.getUrlBuscarTipoUsuario();
        $scope.urlAutenticacion = myProvider.getUrlAutenticar();
        $scope.urlPerfil = myProvider.getUrlPerfil();


    }

    $scope.login = function () {

        //window.location = "menu.html";
        //this.$http.post('http://localhost:3000/users/autenticacion');

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

                localStorage.setItem("id_token", response.data.token);
                ////////////

                $http({
                    method: 'GET',
                    url: $scope.urlPerfil,
                    headers: {
                        'Authorization': localStorage.getItem("id_token"),
                        'Content-Type': 'application/json'
                    }

                }).then(function successCallback(response) {
                    console.log("autorizacion aceptada")
                    window.location = "menu.html";
                    //window.location = "users/perfil";
                }, function errorCallback(response) {

                    console.log("negada")
                });

                /////////////

            }, function errorCallback(response) {

                console.log(response.data);
            });

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