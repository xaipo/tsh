app.controller('ControllerMaterialPetreo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllMaterialPetreo;
    console.log($scope.url);
    $scope.tipoMaterial;
    $scope.numVolquetas;
    $scope.cantTotalM3;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionMaterialPetreo;

    $scope.busqueda;
    $scope.listaMaterialPetreo;
    $scope.listaTipoMaterialPetreo;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoMaterialPetreo();
            $scope.urlModificar = myProvider.getUrlModificarMaterialPetreo();
            $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $http.get($scope.urlAllMaterialPetreo)
                .then(function (response) {

                    $scope.listaMaterialPetreo = response.data;

                }), function errorCallback(response) {

                    console.log(response);
                }
        }

    } else {
        window.location = "../login.html"
    }

    $scope.ingresoMaterialPetreo = function () {

        var obj = {
            tipo_material: $scope.tipoMaterial, num_volquetas: $scope.numVolquetas,
            cant_total_m3: $scope.cantTotalM3
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarMaterialPetreo = function () {

        var obj = {
            _id: $scope.id, tipo_material: $scope.tipoMaterial,
            num_volquetas: $scope.numVolquetas,
            cant_total_m3: $scope.cantTotalM3
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.busquedaMaterialPetreo = function (aux) {

        if ($scope.seleccionMaterialPetreo != '' && $scope.seleccionMaterialPetreo != undefined) {

            $scope.selecMatPetreo = JSON.parse($scope.seleccionMaterialPetreo);

            $scope.id = $scope.selecMatPetreo._id;
            $scope.tipoMaterial = $scope.selecMatPetreo.tipo_material;
            $scope.numVolquetas = $scope.selecMatPetreo.num_volquetas;
            $scope.cantTotalM3 = $scope.selecMatPetreo.cant_total_m3;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);