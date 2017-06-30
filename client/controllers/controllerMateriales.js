app.controller('ControllerMaterial', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllMateriales;
    $scope.descripcionMaterial;
    $scope.stock = 0;
    $scope.estado;

    $scope.id;
    $scope.seleccion;

    $scope.busqueda;
    $scope.listaMaterial;
    $scope.listaEstado;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoMateriales();
            $scope.urlModificar = myProvider.getUrlModificarMateriales();
            $scope.urlAllMateriales = myProvider.getUrlAllMateriales();

            $scope.descripcionMaterial = "";
            $scope.stock = 0;
            $scope.estado;

            $scope.id;
            $scope.seleccion;

            $scope.busqueda;
            $scope.listaMaterial;
            $scope.listaEstado;

            $http.get($scope.urlAllMateriales)
                .then(function (response) {

                    $scope.listaMaterial = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $scope.listaEstado = [{ id: '1', estado: 'Activado' }, { id: '2', estado: "Desactivado" }];
            $scope.estado = "1";

        }

    } else {
        window.location = "/login.html"
    }

    $scope.ingresoMaterial = function () {
        var obj = {
            descripcion_material: $scope.descripcionMaterial,
            stock: $scope.stock,
            estado: $scope.estado
        };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarMaterial = function () {

        var obj = { id: $scope.id, descripcion_material: $scope.descripcionMaterial, stock: $scope.stock, estado: $scope.estado };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionMaterial = function (aux) {

        if ($scope.seleccionMaterial != '' && $scope.seleccionMaterial != undefined) {

            $scope.selecMat = JSON.parse($scope.seleccionMaterial);

            $scope.id = $scope.selecMat._id;
            $scope.descripcionMaterial = $scope.selecMat.descripcion_material;
            $scope.stock = $scope.selecMat.stock;
            $scope.estado = $scope.selecMat.estado;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "/login.html"

    }

}]);