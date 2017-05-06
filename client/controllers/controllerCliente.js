app.controller('ControllerCliente', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllClientes;
    console.log($scope.url);
    $scope.nombreCliente;
    $scope.rucCliente;
    $scope.direccionCliente;
    $scope.telefonoCliente;
    $scope.correoCliente;
    $scope.tipoCliente;

    $scope.id;
    $scope.seleccionCliente;
    $scope.seleccionTipoCliente;

    $scope.busqueda;
    $scope.listaClientes;
    $scope.listaTipoClientes;


    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoCliente();
        $scope.urlModificar = myProvider.getUrlModificarCliente();
        $scope.urlAllClientes = myProvider.getUrlAllClientes();
        
        $http.get($scope.urlAllClientes)
            .then(function (response) {

                $scope.listaClientes = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });

        $scope.listaTipoClientes = [{ id: '1', nombre: 'Preferencial' }, { id: '2', nombre: "normal" },
            { id: '3', nombre: "moroso" }];
        $scope.tipoCliente = "1";
    }

    $scope.ingresoCliente = function () {
        console.log($scope.nombreCliente);
        var obj = {
            nombre_cliente: $scope.nombreCliente, ruc_cliente: $scope.rucCliente,
            direccion_cliente: $scope.direccionCliente, telefono_cliente: $scope.telefonoCliente,
            correo_cliente: $scope.correoCliente, tipo_cliente: $scope.tipoCliente
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }


    $scope.modificarCliente = function () {

        var obj = {
            id: $scope.id, nombre_cliente: $scope.nombreCliente, ruc_cliente: $scope.rucCliente,
            direccion_cliente: $scope.direccionCliente, telefono_cliente: $scope.telefonoCliente,
            correo_cliente: $scope.correoCliente, tipo_cliente: $scope.tipoCliente
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarTipoCliente = function () {
        
        for (var i = 0; i < $scope.listaTipoClientes.length; i++){
            if ($scope.tipoCliente != '' && $scope.tipoCliente != undefined) {
                
                if ($scope.tipoCliente == $scope.listaTipoClientes[i].id) {                    
                    $scope.seleccionTipoCliente = $scope.listaTipoClientes[i];
                }

            }
        }

    }

    $scope.buscarSeleccionListaCliente = function () {

        if ($scope.seleccionCliente != '' && $scope.seleccionCliente != undefined) {

            $scope.selecCli = JSON.parse($scope.seleccionCliente);

            $scope.id = $scope.selecCli._id;
            $scope.nombreCliente = $scope.selecCli.nombre_cliente;
            $scope.rucCliente = $scope.selecCli.ruc_cliente;
            $scope.direccionCliente = $scope.selecCli.direccion_cliente;
            $scope.telefonoCliente = $scope.selecCli.telefono_cliente;
            $scope.correoCliente = $scope.selecCli.correo_cliente;
            $scope.tipoCliente = $scope.selecCli.tipo_cliente;
            console.log($scope.tipoCliente);
            //$scope.buscarTipoCliente();

        }
    }


}]);