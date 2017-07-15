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

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.descripcionTipoMaterial = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionTipoMaterial = "";

            $scope.busqueda = "";
            $scope.listaTipoMaterial;
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoMaterial)
                .then(function (response) {

                    $scope.listaTipoMaterial = response.data;

                    var n = $scope.listaTipoMaterial.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoMaterial[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoMaterial[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTipoMaterial[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoMaterial = function () {
        
        var obj = {
            descripcion_tipo_material: $scope.descripcionTipoMaterial,
            estado: $scope.estado
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
            descripcion_tipo_material: $scope.descripcionTipoMaterial,
            estado: $scope.estado
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

            $scope.selecTipoMaterial = $scope.seleccionTipoMaterial;
            $scope.id = $scope.selecTipoMaterial._id;
            $scope.descripcionTipoMaterial = $scope.selecTipoMaterial.descripcion_tipo_material;
            $scope.estado = $scope.selecTipoMaterial.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTipoMaterial = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionTipoMaterial();

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_material == "") {

        return false;

    } else {
        return true;
    }
}