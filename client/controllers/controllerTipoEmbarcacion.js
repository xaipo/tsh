app.controller('ControllerTipoEmbacacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoEmbarcacion;
    console.log($scope.url);

    $scope.id;
    $scope.seleccionTipoEmbarcacion;
    $scope.descripcionTipoEmbarcacion;

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoEmbarcacion();
            $scope.urlModificar = myProvider.getUrlModificarTipoEmbarcacion();
            $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();
            $http.get($scope.urlAllTipoEmbarcacion)
                .then(function (response) {

                    $scope.listaTipoEmbarcacion = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "/login.html"
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

    $scope.buscarSeleccionTipoEmbarcacion = function (aux) {

        if ($scope.seleccionTipoEmbarcacion != '' && $scope.seleccionTipoEmbarcacion != undefined) {

            $scope.selecTipEmb = JSON.parse($scope.seleccionTipoEmbarcacion);

            $scope.id = $scope.selecTipEmb._id;
            $scope.descripcionTipoEmbarcacion = $scope.selecTipEmb.descripcion_tipo_embarcacion;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);