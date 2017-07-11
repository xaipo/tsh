app.controller('ControllerTipoMaterialPetreo', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoMaterial;

    $scope.descripcionTipoMaterial;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoMaterial;

    $scope.busqueda;
    $scope.listaTipoMaterial;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoMaterialPetreo();
            $scope.urlModificar = myProvider.getUrlModificarTipoMaterialPetreo();
            $scope.urlAllTipoMaterial = myProvider.getUrlAllTipoMaterialPetreo();

            $scope.descripcionTipoMaterial = "";

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
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoMaterial = function () {
        console.log($scope.descripcionTipoMaterial);
        var obj = {
            descripcion_tipo_material: $scope.descripcionTipoMaterial
        };

        if (validarCamposVacios(obj)) {
            $http.post($scope.url, obj)
                .then(function (response) {

                    $scope.iniciar();
                    $.notify("Ingreso Correcto", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarTipoMaterial = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_material: $scope.descripcionTipoMaterial
        };

        if (validarCamposVacios(obj)) {
            $http.post($scope.urlModificar, obj)
                .then(function (response) {

                    $scope.iniciar();
                    $.notify("Modificacion Exitosa", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.buscarSeleccionTipoMaterial = function () {

        if ($scope.seleccionTipoMaterial != '' && $scope.seleccionTipoMaterial != undefined) {

            $scope.selecTipoMaterial = JSON.parse($scope.seleccionTipoMaterial);
            $scope.id = $scope.selecTipoMaterial._id;
            $scope.descripcionTipoMaterial = $scope.selecTipoMaterial.descripcion_tipo_material;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_material == "") {

        return false;

    } else {
        return true;
    }
}