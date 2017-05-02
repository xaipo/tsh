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

    $scope.buscarSeleccion = function (aux) {
        $scope.id = aux._id;
        $scope.seleccion = aux.descripcion_utensilio;
        $scope.descripcionUtensilio = $scope.seleccion;
        $scope.stock = aux.stock;
        $scope.estado = aux.estado;
    }

}]);