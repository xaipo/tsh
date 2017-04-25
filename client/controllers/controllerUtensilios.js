app.controller('ControllerUtensilio', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlAllUtensilio;
    console.log($scope.url);
    $scope.descripcionUtensilio;
    $scope.stock;
    $scope.estado;

    $scope.busqueda;
    $scope.listaUtensilio;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoUtensilio();
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
}]);