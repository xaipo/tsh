app.controller('ControllerTipoMaterial', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoMaterial;
    console.log($scope.url);
    $scope.descripcionTipoMaterial;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoMaterial;

    $scope.busqueda;
    $scope.listaTipoMaterial;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoMaterial();
        $scope.urlModificar = myProvider.getUrlModificarTipoMaterial();
        $scope.urlAllTipoMaterial = myProvider.getUrlAllTipoMaterial();

        $scope.id = "";
        $scope.seleccion = "";
        $scope.seleccionTipoMaterial = "";

        $scope.busqueda = "";
        $scope.listaTipoMaterial;

        $http.get($scope.urlAllTipoMaterial)
            .then(function (response) {

                $scope.listaTipoMaterial = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoTipoMaterial = function () {
        console.log($scope.descripcionTipoMaterial);
        var obj = {
            descripcion_tipo_material: $scope.descripcionTipoMaterial
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoMaterial = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_material: $scope.descripcionTipoMaterial
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionTipoMaterial = function () {

        if ($scope.seleccionTipoMaterial != '' && $scope.seleccionTipoMaterial != undefined) {

            $scope.selecTipoMaterial = JSON.parse($scope.seleccionTipoMaterial);
            $scope.id = $scope.selecTipoMaterial._id;
            $scope.descripcionTipoMaterial = $scope.selecTipoMaterial.descripcion_tipo_material;

        }
    }

}]);