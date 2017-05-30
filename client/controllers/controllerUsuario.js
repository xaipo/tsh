app.controller('ControllerUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllUsuario;
    $scope.urlAllTipoUsuario;
    $scope.nombreUsuario;
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

    $scope.iniciar = function () {
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

    $scope.ingresoUsuario = function () {
        console.log($scope.nombreUsuario);
        var obj = {
            nombre_usuario: $scope.nombreUsuario, cedula_usuario: $scope.cedulaUsuario,
            contrasena_usuario: $scope.contrasenaUsuario, telefono_usuario: $scope.telefonoUsuario,
            correo_usuario: $scope.correoUsuario, tipo_usuario: $scope.tipoUsuario
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });
    }


    $scope.modificarUsuario = function () {        

        var obj = {
            id: $scope.id, nombre_usuario: $scope.nombreUsuario, cedula_usuario: $scope.cedulaUsuario,
            contrasena_usuario: $scope.contrasenaUsuario, telefono_usuario: $scope.telefonoUsuario,
            correo_usuario: $scope.correoUsuario, tipo_usuario: $scope.tipoUsuario
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
            $scope.cedulaUsuario = $scope.selecUsu.cedula_usuario;
            $scope.contrasenaUsuario = $scope.selecUsu.contrasena_usuario;
            $scope.telefonoUsuario = $scope.selecUsu.telefono_usuario;
            $scope.correoUsuario = $scope.selecUsu.correo_usuario;
            $scope.tipoUsuario = $scope.selecUsu.tipo_usuario;
            console.log($scope.selecUsu);
        }
    }

}]);