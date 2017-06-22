app.controller('ControllerEstadoOrden', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllEstadoOrden;

    $scope.id;
    $scope.descripcionEstado;
    $scope.seleccion;
    $scope.seleccionEstado;

    $scope.busqueda;
    $scope.listaEstadoOrden;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoEstadoOrden();
        $scope.urlModificar = myProvider.getUrlModificarEstadoOrden();
        $scope.urlAllEstadoOrden = myProvider.getUrlAllEstadoOrden();

        $scope.id = "";
        $scope.descripcionEstado = "";
        $scope.seleccion = "";
        $scope.seleccionEstado = "";

        $scope.busqueda = "";
        $scope.listaEstadoOrden;

        $http.get($scope.urlAllEstadoOrden)
            .then(function (response) {

                $scope.listaEstadoOrden = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoEstadoOrden = function () {
        var obj = {
            descripcion_estado: $scope.descripcionEstado
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarEstadoOrden = function () {

        var obj = {
            id: $scope.id,
            descripcion_estado: $scope.descripcionEstado
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionEstadoOrden = function () {

        if ($scope.seleccionEstado != '' && $scope.seleccionEstado != undefined) {

            $scope.seleccionEstadoJS = JSON.parse($scope.seleccionEstado);
            $scope.id = $scope.seleccionEstadoJS._id;
            $scope.descripcionEstado = $scope.seleccionEstadoJS.descripcion_estado;

        }
    }

}]);