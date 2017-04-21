app.controller('ControllerPuerto', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url = myProvider.getUrlIngresoPuerto();
    console.log($scope.url);
    $scope.descripcionPuerto;
    $scope.ingresoPuerto = function () {
        console.log($scope.descripcionPuerto);
        var obj = { descripcion_puerto: $scope.descripcionPuerto };
        $http.post($scope.url, obj)
            .then(function (response) {
                
                console.log(response);
                
            }, function errorCallback(response) {

                console.log(response);
            });

    }
}]);