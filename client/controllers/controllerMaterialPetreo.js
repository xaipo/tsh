app.controller('ControllerMaterialPetreo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllMaterialPetreo;
    console.log($scope.url);
    $scope.tipoMaterial;
    $scope.numVolquetas;
    $scope.cantTotalM3;

    $scope.busqueda;
    $scope.listaMaterialPetreo;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoMaterialPetreo();
        $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo();
        $http.get($scope.urlAllMaterialPetreo)
            .then(function (response) {

                $scope.listaMaterialPetreo = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoMaterialPetreo = function () {
        console.log($scope.tipoMaterial);
        var obj = {
            tipo_material: $scope.tipoMaterial, num_volquetas: $scope.numVolquetas,
            cant_total_m3: $scope.cantTotalM3
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);