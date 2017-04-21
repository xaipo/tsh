app.controller('ControllerMaterialPetreo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoMaterialPetreo();
    console.log($scope.url);
    $scope.tipoMaterial;
    $scope.numVolquetas;
    $scope.cantTotalM3;

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