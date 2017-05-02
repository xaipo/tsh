app.controller('ControllerTipoEmbacacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlGetAllTipoEmbarcacion;
    console.log($scope.url);
    $scope.id;
    $scope.descripcionTipoEmbarcacion;

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoEmbarcacion();
        $scope.urlModificar = myProvider.getUrlModificarTipoEmbarcacion();
        $scope.urlGetAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();
        $http.get($scope.urlGetAllTipoEmbarcacion)
            .then(function (response) {

                $scope.listaTipoEmbarcacion = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoTipoEmbarcacion = function () {
        console.log($scope.descripcionTipoEmbarcacion);
        var obj = { descripcion_tipo_embarcacion: $scope.descripcionTipoEmbarcacion };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoEmbarcacion = function () {

        var obj = { id: $scope.id, descripcion_tipo_embarcacion: $scope.descripcionTipoEmbarcacion };
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
        $scope.seleccion = aux.descripcion_tipo_embarcacion;
        $scope.descripcionTipoEmbarcacion = $scope.seleccion;
    }

}]);