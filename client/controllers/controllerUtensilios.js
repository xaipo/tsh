app.controller('ControllerUtensilio', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllUtensilio;
    console.log($scope.url);
    $scope.descripcionUtensilio;
    $scope.stock;
    $scope.estado;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaUtensilio;
    $scope.listaEstado;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoUtensilio();
        $scope.urlModificar = myProvider.getUrlModificarUtensilio();
        $scope.urlAllUtensilio = myProvider.getUrlAllUtensilio();
        $http.get($scope.urlAllUtensilio)
            .then(function (response) {

                $scope.listaUtensilio = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });

        $scope.listaEstado = [{ id: '1', estado: 'Activado' }, { id: '2', estado: "Desactivado" }];
        $scope.estado = "1";

    }

    $scope.ingresoUtensilio = function () {
        console.log($scope.descripcionUtensilio);
        var obj = {
            descripcion_utensilio: $scope.descripcionUtensilio, stock: $scope.stock, estado: $scope.estado
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarUtensilio = function () {

        var obj = { id: $scope.id, descripcion_utensilio: $scope.descripcionUtensilio, stock: $scope.stock, estado: $scope.estado };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionUtensilio = function (aux) {

        if ($scope.seleccionUtensilio != '' && $scope.seleccionUtensilio != undefined) {

            $scope.selecUten = JSON.parse($scope.seleccionUtensilio);

            $scope.id = $scope.selecUten._id;
            $scope.descripcionUtensilio = $scope.selecUten.descripcion_utensilio;
            $scope.stock = $scope.selecUten.stock;
            $scope.estado = $scope.selecUten.estado;

        }
    }

}]);