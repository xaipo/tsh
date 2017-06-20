app.controller('ControllerPedido', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.url;
    $scope.urlAlimentos;
    $scope.urlMaterialesSeleccionados;
    $scope.urlAllOrdenServicio;
    $scope.urlAllMateriales;

    // Variables Alimentos y Pedido
    $scope.observaciones;
    $scope.ordenServicio;
    $scope.nombreAlimento;
    $scope.cantidadAlimento;
    $scope.unidades;

    // Variables Utencilios
    $scope.material;
    $scope.cantidadMaterial;
    $scope.seleccionAlimento;

    $scope.id;
    $scope.seleccionPedido;
    $scope.seleccionMaterial;


    $scope.listaOrdenServicio;
    $scope.listaAlimentos = [];
    $scope.listaMateriales = [];
    $scope.listaMaterialSelect = [];
    $scope.listaMaterialesArray = [];
    $scope.listaAlimentosArray = [];

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoPedido();
        $scope.urlAlimentos = myProvider.getUrlIngresoAlimentos();
        $scope.urlMaterialesSeleccionados = myProvider.getUrlIngresoMaterialesSeleccionados();
        $scope.urlAllOrdenServicio = myProvider.getUrlAllOrdenServicio();
        $scope.urlAllMateriales = myProvider.getUrlAllMateriales();

        $scope.observaciones = "";
        $scope.ordenServicio = "";
        $scope.nombreAlimento = "";
        $scope.cantidadAlimento = "";
        $scope.unidades = "";

        $scope.materiales = "";
        $scope.cantidadMateriales = "";
        $scope.seleccionAlimento = "";

        $scope.id = "";
        $scope.seleccionPedido = "";
        $scope.seleccionMaterial = "";


        $scope.listaOrdenServicio = [];
        $scope.listaAlimentos = [];
        $scope.listaMateriales = [];
        $scope.listaMaterialSelect = [];
        $scope.listaMaterialesArray = [];
        $scope.listaAlimentosArray = [];

        $http.get($scope.urlAllMateriales)
            .then(function (response) {

                $scope.listaMateriales = response.data;
                $scope.material = $scope.listaMateriales[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });


        $http.get($scope.urlAllOrdenServicio)
            .then(function (response) {

                $scope.listaOrdenServicio = response.data;
                $scope.ordenServicio = $scope.listaOrdenServicio[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoAlimentos = function (pos) {

        var obj = $scope.listaAlimentos[pos];
        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlAlimentos, obj)
                .then(function successCallback(response) {

                    $scope.listaAlimentosArray.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoMaterialesSeleccionados = function (pos) {

        var aux = $scope.listaMaterialSelect[pos];

        var obj = {
            material: aux.materiales._id,
            cantidad_material: aux.cantidad_material
        }

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlMaterialesSeleccionados, obj)
                .then(function successCallback(response) {

                    $scope.listaMaterialesArray.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoPesidoBase = function () {

        var obj = {
            orden_servicio: $scope.ordenServicio,
            Alimentos: $scope.listaAlimentosArray,
            materiales: $scope.listaMaterialesArray,
            observaciones: $scope.observaciones
        };        

        var q = $q.defer()
        q.resolve(

            $http.post($scope.url, obj)
                .then(function successCallback(response) {

                    $scope.iniciar();
                    //console.log(response);

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoPedido = function () {

        var dimProduc = $scope.listaAlimentos.length;

        for (var i = 0; i < dimProduc; i++) {

            $scope.ingresoAlimentos(i);

        }

        var dimUtenSelect = $scope.listaMaterialSelect.length;

        for (var i = 0; i < dimUtenSelect; i++) {

            $scope.ingresoMaterialesSeleccionados(i);

        }       

        $timeout(function () {

            $scope.ingresoPesidoBase();

        }, 1000, false)

    }

    $scope.agregarListaMateriales = function () {

        if ($scope.Materiales != undefined && $scope.Materiales != "" &&
            $scope.cantidadMateriales != "" && $scope.cantidadMateriales != undefined) {

            var n = $scope.listaMateriales.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaMateriales[i]._id == $scope.Materiales) {

                    var obj = {
                        material: $scope.listaMateriales[i],
                        cantidad_material: $scope.cantidadMaterial
                    }
                    break;
                }
            }

            

            $scope.listaMaterialSelect.push(obj);

            $scope.listaMateriales.splice(pos, 1);
            $scope.Materiales = {};
            $scope.cantidadMaterial = "";

        }

    }

    $scope.quitarSeleccionMaterial = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialJS = JSON.parse($scope.seleccionMaterial);
            $scope.listaMateriales.push($scope.seleccionMaterialJS.materiales);

            var n = $scope.listaMaterialSelect.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaMaterialSelect[i].material._id == $scope.seleccionMaterialJS.Material._id) {
                    pos = i;
                    break;
                }
            }

            $scope.listaMaterialesSelect.splice(pos, 1);
            $scope.seleccionMaterial = {};

        }

    }

    $scope.agregarListaAlimentos = function () {

        if ($scope.nombreAlimento != "" && $scope.cantidadAlimento != "" && $scope.unidades != "" &&
            $scope.nombreAlimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidades != undefined) {
            var obj = {
                nombre_alimento: $scope.nombreAlimento,
                cantidad_alimento: $scope.cantidadAlimento,
                unidades_alimento: $scope.unidades
            }

            $scope.listaAlimentos.push(obj);

            $scope.nombreAlimento = "";
            $scope.cantidadAlimento = "";
            $scope.unidades = "";
        }
    }

    $scope.quitarSeleccionAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);

            var n = $scope.listaAlimentos.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentos[i].nombre_alimento == $scope.seleccionAlimentoJS.nombre_alimento) {
                    pos = i;
                    break;
                }
            }

            $scope.listaAlimentos.splice(pos, 1);
            $scope.seleccionAlimento = {};

        }

    }

}]);