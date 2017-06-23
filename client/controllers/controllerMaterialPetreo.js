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

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoMaterialPetreo();
        $scope.urlModificar = myProvider.getUrlModificarMaterialPetreo();
        $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo();

        $http.get($scope.urlAllMaterialPetreo)
            .then(function (response) {

                $scope.listaMaterialPetreo = response.data;

            }), function errorCallback(response) {

                console.log(response);
            }

        //$http.get($scope.urlAllMaterialPetreo)
        //    .then(function (response) {

        //        $scope.listaMaterialPetreo = response.data;

        //        var n = $scope.listaMaterialPetreo.length;
        //        if (n == 0) {
        //            alert('no se encontro informacion');
        //        } else {
        //            for (var i = 0; i < n; i++) {
        //                for (var j = 0; j < 3; j++) {
        //                    if ($scope.listaMaterialPetreo[i].tipo_material == $scope.listaTipoMaterialPetreo[j].id) {
        //                        console.log("entro");
        //                        $scope.aux = $scope.listaTipoMaterialPetreo[j];
        //                        $scope.listaMaterialPetreo[i].tipo_material = $scope.aux;
        //                    }
        //                }
        //            }

        //        }
        //    }), function errorCallback(response) {

        //        console.log(response);
        //    }

        //$scope.listaTipoMaterialPetreo = [{ id: '1', tipo_material: 'Piedra' }, { id: '2', tipo_material: "Arena" },
        //{ id: '3', tipo_material: "Tierra" }];
        //$scope.tipoMaterial = "1";

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

}]);