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
    $scope.inc;

    // Variables Materiales
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
        $scope.cantidadAlimento = 0;
        $scope.unidades = "";

        $scope.material = "";
        $scope.cantidadMaterial = 0;
        $scope.seleccionAlimento = "";

        $scope.id = "";
        $scope.inc = 0;
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

        var obj = {
            nombre_alimento: $scope.listaAlimentos[pos].nombre_alimento,
            cantidad_alimento: $scope.listaAlimentos[pos].cantidad_alimento,
            unidades_alimento: $scope.listaAlimentos[pos].unidades_alimento
        }
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
            material: aux.material._id,
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
            alimentos: $scope.listaAlimentosArray,
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

    $scope.cargarSeleccionListaMateriales = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialesJS = JSON.parse($scope.seleccionMaterial);
            $scope.listaMateriales.push($scope.seleccionMaterialesJS.material);
            $scope.material = $scope.seleccionMaterialesJS.material._id;
            $scope.cantidadMaterial = $scope.seleccionMaterialesJS.cantidad_material;

        }
    }

    $scope.agregarListaMateriales = function () {

        if ($scope.material != undefined && $scope.material != "" &&
            $scope.cantidadMaterial != "" && $scope.cantidadMaterial != undefined) {

            var n = $scope.listaMateriales.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaMateriales[i]._id == $scope.material) {

                    var obj = {
                        id: $scope.inc++,
                        material: $scope.listaMateriales[i],
                        cantidad_material: $scope.cantidadMaterial
                    }
                    $scope.listaMaterialSelect.push(obj);
                    $scope.listaMateriales.splice(i, 1);
                    if ($scope.listaMateriales.length != 0)
                        $scope.material = $scope.listaMateriales[0]._id;
                    $scope.cantidadMaterial = 0;
                    break;
                }
            }
        }

    }

    $scope.modificarListaMateriales = function () {

        if ($scope.material != undefined && $scope.material != "" &&
            $scope.material != undefined && $scope.material != "" &&
            $scope.cantidadMaterial != "" && $scope.cantidadMaterial != undefined) {

            $scope.seleccionMaterialesJS = JSON.parse($scope.seleccionMaterial);
            var n = $scope.listaMateriales.length;
            var n1 = $scope.listaMaterialSelect.length;
            for (var i = 0; i < n1; i++) {
                if ($scope.listaMaterialSelect[i].id == $scope.seleccionMaterialesJS.id) {
                    for (var j = 0; j < n; j++) {
                        if ($scope.listaMateriales[j]._id == $scope.material) {
                            $scope.listaMaterialSelect[i].material = $scope.listaMateriales[j];
                            $scope.listaMaterialSelect[i].cantidad_material = $scope.cantidadMaterial;
                            $scope.listaMateriales.splice(j, 1);
                            $scope.cantidadMaterial = 0;
                            if ($scope.listaMateriales.length != 0)
                                $scope.material = $scope.listaMateriales[0]._id;
                            break;
                        }
                    }
                }
            }
        }

    }

    $scope.quitarSeleccionMaterial = function () {

        if ($scope.seleccionMaterial != undefined && $scope.seleccionMaterial != "") {

            $scope.seleccionMaterialJS = JSON.parse($scope.seleccionMaterial);

            var n = $scope.listaMaterialSelect.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialSelect[i].id == $scope.seleccionMaterialJS.id) {
                    $scope.listaMaterialSelect.splice(i, 1);
                    $scope.seleccionMaterial = {};
                    $scope.cantidadMaterial = 0;
                    break;
                }
            }



        }

    }

    $scope.cargarSeleccionListaAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);
            $scope.id = $scope.seleccionAlimentoJS.id;
            $scope.nombreAlimento = $scope.seleccionAlimentoJS.nombre_alimento;
            $scope.cantidadAlimento = $scope.seleccionAlimentoJS.cantidad_alimento;
            $scope.unidades = $scope.seleccionAlimentoJS.unidades_alimento;

        }
    }

    $scope.agregarListaAlimentos = function () {

        if ($scope.nombreAlimento != "" && $scope.cantidadAlimento != "" && $scope.unidades != "" &&
            $scope.nombreAlimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidades != undefined) {
            var obj = {
                id: $scope.inc++,
                nombre_alimento: $scope.nombreAlimento,
                cantidad_alimento: $scope.cantidadAlimento,
                unidades_alimento: $scope.unidades
            }

            $scope.listaAlimentos.push(obj);
            $scope.nombreAlimento = "";
            $scope.cantidadAlimento = 0;
            $scope.unidades = "";
        }
    }

    $scope.modificarListaAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "" &&
            $scope.nombreAlimento != "" && $scope.cantidadAlimento != "" && $scope.unidades != "" &&
            $scope.nombreAlimento != undefined && $scope.cantidadAlimento != undefined && $scope.unidades != undefined) {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);
            var n = $scope.listaAlimentos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentos[i].id == $scope.seleccionAlimentoJS.id) {

                    $scope.listaAlimentos[i].nombre_alimento = $scope.nombreAlimento;
                    $scope.listaAlimentos[i].cantidad_alimento = $scope.cantidadAlimento;
                    $scope.listaAlimentos[i].unidades_alimento = $scope.unidades;
                    $scope.seleccionAlimento = {};
                    $scope.nombreAlimento = "";
                    $scope.cantidadAlimento = 0;
                    $scope.unidades = "";
                    break;
                }
            }

        }
    }

    $scope.quitarSeleccionAlimentos = function () {

        if ($scope.seleccionAlimento != undefined && $scope.seleccionAlimento != "") {

            $scope.seleccionAlimentoJS = JSON.parse($scope.seleccionAlimento);
            var n = $scope.listaAlimentos.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaAlimentos[i].id == $scope.seleccionAlimentoJS.id) {
                    $scope.listaAlimentos.splice(i, 1);
                    $scope.seleccionAlimento = {};
                    break;
                }
            }
            $scope.nombreAlimento = "";
            $scope.cantidadAlimento = 0;
            $scope.unidades = "";
        }

    }

}]);