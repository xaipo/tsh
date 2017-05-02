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
    $scope.seleccion;

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

                console.log(response);
                $scope.listaUsuario = response.data;
                console.log($scope.listaUsuario);
                for (i = 0; i < $scope.listaUsuario.length; i++) {

                    $http({

                        method: 'POST',
                        url: 'localhost:3000/api/getByIdTipoUsuario',

                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: { id: $scope.listaUsuario[i].tipo_usuario }


                    })

                        .then(function (data) {

                            console.log(data);
                            var aux = data[0];
                            //  console.log(aux);

                            $scope.listaUsuario[i].tipo_usuario = aux;

                        }).catch(function (err) {
                            console.log("error");
                        });
                }

            }, function errorCallback(response) {

                console.log(response);
            });


        $http.get($scope.urlAllTipoUsuario)
            .then(function (response) {

                $scope.listaTipoUsuario = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.ingresoCliente = function () {
        console.log($scope.nombreUsuario);
        var obj = {
            nombre_usuario: $scope.nombreUsuario, cedula_usuario: $scope.cedulaUsuario,
            contrasena_usuario: $scope.contrasenaUsuario, telefono_usuario: $scope.telefonoUsuario,
            correo_usuario: $scope.correoUsuario, tipo_usuario: $scope.tipoUsuario
        };
        $http.post($scope.url, obj)
            .then(function (response) {

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

    $scope.buscarSeleccion = function (aux) {
        $scope.id = aux._id;
        $scope.nombreUsuario = aux.nombre_usuario;
        $scope.cedulaUsuario = aux.cedula_usuario;
        $scope.contrasenaUsuario = aux.contrasena_usuario;
        $scope.telefonoUsuario = aux.telefono_usuario;
        $scope.correoUsuario = aux.correo_usuario;
        $scope.tipoUsuario = aux.tipo_usuario;
        $scope.seleccion = aux.tipo_usuario;
    }


}]);