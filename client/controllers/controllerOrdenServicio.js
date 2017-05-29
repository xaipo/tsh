app.controller('ControllerOrdenServicio', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllCliente;
    $scope.urlAllPuerto;
    $scope.urlAllCombustible;
    $scope.urlAllEmbarcacion;
    $scope.urlAllTripulante;
    $scope.urlAllContratoRecepcion;
    $scope.urlAllVehiculo;
    $scope.urlAllMaterialPetreo;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoTripulante;
    $scope.urlMatPetreo;
    $scope.urlVehiculo;

    //atributos
    $scope.id;
    $scope.cliente;
    $scope.detalle;
    $scope.embarcacion;
    $scope.estado;
    $scope.fecha;
    $scope.puertoEmbarque;
    $scope.puertoDesembarque;
    $scope.orometroInicialM1;
    $scope.orometroInicialM2;
    $scope.orometroFinalM1;
    $scope.orometroFinalM2;
    $scope.horaSalida;
    $scope.horaArribo;
    $scope.cargaMaterialPetreo;
    $scope.cargaVehiculo;
    $scope.observaciones;
    $scope.combustibleConsumo;
    $scope.combustibleTransporte;
    $scope.observacionMaquinista;
    $scope.contratoRecepcion;
    $scope.nombreCapitan;
    $scope.tripulacion;

    // Variable de combustible
    $scope.cantidadConsumoCombustible;
    $scope.cantidadTransporteCombustible;



    //$scope.seleccion;
    $scope.seleccionTripulante = {};
    $scope.seleccionMatPetreo = {};
    $scope.seleccionVehiculo = {};
    $scope.seleccionConsumoCombustible = {};
    $scope.seleccionTransporteCombustible = {};


    //$scope.busqueda;
    $scope.listaEmbarcacion = [];
    $scope.listaCliente = [];
    $scope.listaMaterialPetreo = [];
    $scope.listaVehiculo = [];
    $scope.listaPuerto = [];
    $scope.listaCombustibleConsumo = [];
    $scope.listaCombustibleConsumoSelect = [];
    $scope.listaCombustibleConsumoIngresar = [];
    $scope.listaCombustibleTransporte = [];
    $scope.listaCombustibleTransporteSelect = [];
    $scope.listaCombustibleTransporteIngresar = [];
    $scope.listaTripulante = [];
    $scope.listaContratoRecepcion = [];
    $scope.listaTripulanteSelect = [];
    $scope.listaTransporteCombutible = [];
    $scope.listaConsumoCombustible = [];

    // Lista de ingresos

    $scope.listMatPetreo = [];
    $scope.listaVehi = [];
    $scope.listaTrip = [];
    $scope.objMat = {};
    $scope.objVehi = {};

    // Dimenciones Listas
    $scope.dimVe;
    $scope.dimMatPet;
    $scope.dimTrip;



    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoOrdenServicio();
        $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
        $scope.urlAllCliente = myProvider.getUrlAllClientes();
        $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo();
        $scope.urlAllVehiculo = myProvider.getUrlAllVehiculo();
        $scope.urlAllPuerto = myProvider.getUrlAllPuerto();
        $scope.urlAllCombustible = myProvider.getUrlAllCombustible();
        $scope.urlAllTripulante = myProvider.getUrlAllTripulante();
        $scope.urlAllContratoRecepcion = myProvider.getUrlAllContratoRecepcion();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();
        $scope.urlMatPetreo = myProvider.getUrlIngresoMaterialPetreo();
        $scope.urlVehiculo = myProvider.getUrlIngresoVehiculo();

        $scope.ban = true;

        $scope.estado = "1";
        //$scope.listaVehi = ["1", "2"];
        //$scope.listMatPetreo = ["a", "b"];        

        $http.get($scope.urlAllContratoRecepcion)
            .then(function (response) {

                $scope.listaContratoRecepcion = response.data;
                $scope.contratoRecepcion = $scope.listaContratoRecepcion[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllTripulante)
            .then(function (response) {

                $scope.listaTripulante = response.data;
                $scope.nombreCapitan = $scope.listaTripulante[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });


        $http.get($scope.urlAllTipoTripulante)
            .then(function (response) {

                $scope.listaTipoTripulante = response.data;
                $scope.tipoTripulante = $scope.listaTipoTripulante[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaCombustibleConsumo = response.data;
                $scope.combustibleConsumo = $scope.listaCombustibleConsumo[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaCombustibleTransporte = response.data;
                $scope.combustibleTransporte = $scope.listaCombustibleTransporte[1]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllPuerto)
            .then(function (response) {

                $scope.listaPuerto = response.data;
                $scope.puertoEmbarque = $scope.listaPuerto[0]._id;
                $scope.puertoDesembarque = $scope.listaPuerto[1]._id;


            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllEmbarcacion)
            .then(function (response) {

                $scope.listaEmbarcacion = response.data;
                $scope.embarcacion = $scope.listaEmbarcacion[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllCliente)
            .then(function (response) {

                $scope.listaCliente = response.data;
                $scope.seleccionCliente = $scope.listaCliente[0];

            }, function errorCallback(response) {

                console.log(response);
            });

        //$http.get($scope.urlAllMaterialPetreo)
        //    .then(function (response) {

        //        $scope.listaMaterialPetreo = response.data;

        //    }), function errorCallback(response) {

        //        console.log(response);
        //    }

        //$http.get($scope.urlAllVehiculo)
        //    .then(function (response) {

        //        $scope.listaVehiculo = response.data;

        //    }, function errorCallback(response) {

        //        console.log(response);
        //    });

    }

    $scope.ingresoMateriales = function (pos) {

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlMatPetreo,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.listaMaterialPetreo[pos]


            }).then(function successCallback(response) {

                $scope.listMatPetreo.push(response.data._id.toString());


            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.ingresoVehiculos = function (pos) {

        $scope.objVehi = $scope.listaVehiculo[pos];

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlVehiculo,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.listaVehiculo[pos]


            }).then(function successCallback(response) {

                $scope.listaVehi.push(response.data._id.toString());


            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.ingresoOrden = function () {

        $scope.selecCli = JSON.parse($scope.seleccionCliente);

        var q = $q.defer()

        q.resolve(

            $http({
                method: 'POST',
                url: $scope.url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    cliente: $scope.selecCli._id,
                    detalle: $scope.detalle,
                    embarcacion: $scope.embarcacion,
                    estado: $scope.estado,
                    fecha: $scope.fecha,
                    puerto_embarque: $scope.puertoEmbarque,
                    puerto_desembarque: $scope.puertoDesembarque,
                    orometro_inicial_m1: $scope.orometroInicialM1,
                    orometro_inicial_m2: $scope.orometroInicialM2,
                    orometro_final_m1: $scope.orometroFinalM1,
                    orometro_final_m2: $scope.orometroFinalM2,
                    hora_salida: $scope.horaSalida,
                    hora_arribo: $scope.horaArribo,
                    carga_material_petreo: $scope.listMatPetreo,
                    carga_vehiculo: $scope.listaVehi,
                    observaciones: $scope.observaciones,
                    combustible_consumo: $scope.listaCombustibleConsumoIngresar,
                    combustible_transporte: $scope.listaCombustibleTransporteIngresar,
                    observacion_maquinaria: $scope.observacionMaquinista,
                    contrato_recepcion: $scope.contratoRecepcion,
                    nombre_capitan: $scope.nombreCapitan,
                    tripulacion: $scope.listaTrip
                }


            }).then(function successCallback(response) {

                console.log(response.data)

            }, function errorCallback(response) {


            })

        );

        console.log("Bien");

        return q.promise
    }


    $scope.ingresoOrdenServicio = function () {

        var dimMatPet = $scope.listaMaterialPetreo.length;

        for (var i = 0; i < dimMatPet; i++) {

            $scope.ingresoMateriales(i);

        }

        var dimVe = $scope.listaVehiculo.length;

        for (var i = 0; i < dimVe; i++) {

            $scope.ingresoVehiculos(i);

        }

        var dimeTrip = $scope.listaTripulanteSelect.length;

        for (var i = 0; i < dimeTrip; i++) {

            $scope.listaTrip.push($scope.listaTripulanteSelect[i]._id.toString());

        }

        var dimeCombusCons = $scope.listaCombustibleConsumoSelect.length;

        for (var i = 0; i < dimeCombusCons; i++) {

            var obj = {
                tipo_combustible: $scope.listaCombustibleConsumoSelect[i].tipo_combustible._id,
                cantidad_combustible: $scope.listaCombustibleConsumoSelect[i].cantidad_combustible
            }

            $scope.listaCombustibleConsumoIngresar.push(obj);

        }

        var dimeCombusTrans = $scope.listaCombustibleTransporteSelect.length;

        for (var i = 0; i < dimeCombusTrans; i++) {

            var obj = {
                tipo_combustible: $scope.listaCombustibleTransporteSelect[i].tipo_combustible._id,
                cantidad_combustible: $scope.listaCombustibleTransporteSelect[i].cantidad_combustible
            }

            $scope.listaCombustibleTransporteIngresar.push(obj);

        }

        $timeout(function () {

            $scope.ingresoOrden();

        }, 3000, false)
    }



    $scope.modificarOrdenServicio = function () {

        var obj = {
            id: $scope.id,
            cliente: $scope.cliente,
            detalle: $scope.detalle,
            embarcacion: $scope.embarcacion,
            estado: $scope.estado,
            fecha: $scope.fecha,
            puerto_embarque: $scope.puertoEmbarque,
            puerto_desembarque: $scope.puertoDesembarque,
            orometro_inicial_m1: $scope.orometroInicialM1,
            orometro_inicial_m2: $scope.orometroInicialM2,
            orometro_final_m1: $scope.orometroFinalM1,
            orometro_final_m2: $scope.orometroFinalM2,
            hora_salida: $scope.horaSalida,
            hora_arribo: $scope.horaArribo,
            carga_material_petreo: $scope.listaMaterialPetreo,
            carga_vehiculo: $scope.listaVehiculo,
            observaciones: $scope.observaciones,
            combustible_consumo: $scope.combustibleConsumo,
            combustible_transporte: $scope.combustibleTransporte,
            observacion_maquinaria: $scope.observacionMaquinista,
            contrato_recepcion: $scope.contratoRecepcion,
            nombre_capitan: $scope.nombreCapitan,
            tripulacion: $scope.listaTripulanteSelect
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    //$scope.buscarSeleccionOrdenServicio = function () {

    //    if ($scope.seleccionTipoUsuario != '' && $scope.seleccionTipoUsuario != undefined) {

    //        $scope.selecTipUsu = JSON.parse($scope.seleccionTipoUsuario);

    //        $scope.id = $scope.selecTipUsu._id;
    //        $scope.descripcionTipoUsuario = $scope.selecTipUsu.descripcion_tipo_usuario;

    //    }
    //}

    $scope.agregarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != undefined && $scope.seleccionTripulante != "") {

            $scope.seleccionTripulanteJS = JSON.parse($scope.seleccionTripulante);
            $scope.listaTripulanteSelect.push($scope.seleccionTripulanteJS);

            var n = $scope.listaTripulante.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaTripulante[i]._id == $scope.seleccionTripulanteJS._id) {
                    pos = i;
                    break;
                }
            }

            $scope.listaTripulante.splice(pos, 1);
            $scope.seleccionTripulante = {};

        }

    }

    $scope.quitarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != undefined && $scope.seleccionTripulante != "") {

            $scope.seleccionTripulanteJS = JSON.parse($scope.seleccionTripulante);
            $scope.listaTripulante.push($scope.seleccionTripulanteJS);

            var n = $scope.listaTripulanteSelect.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaTripulanteSelect[i]._id == $scope.seleccionTripulanteJS._id) {
                    pos = i;
                    break;
                }
            }

            $scope.listaTripulanteSelect.splice(pos, 1);
            $scope.seleccionTripulante = {};

        }

    }

    $scope.agregarListaMatPetreo = function () {

        if ($scope.tipoMaterial != "" && $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.tipoMaterial != undefined && $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {
            var obj = {
                tipo_material: $scope.tipoMaterial, num_volquetas: $scope.numVolquetas,
                cant_total_m3: $scope.cantTotalM3
            };

            $scope.listaMaterialPetreo.push(obj);
        }
    }

    $scope.quitarSeleccionMaterialPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "") {

            $scope.seleccionMatPetreoJS = JSON.parse($scope.seleccionMatPetreo);

            var n = $scope.listaMaterialPetreo.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaMaterialPetreo[i].tipo_material == $scope.seleccionMatPetreoJS.tipo_material) {
                    pos = i;
                    break;
                }
            }

            $scope.listaMaterialPetreo.splice(pos, 1);
            $scope.seleccionMatPetreo = {};

        }
    }

    $scope.agregarListaVehiculo = function () {

        if ($scope.cantidadVehiculo != "" && $scope.descripcionVehiculo != "" &&
            $scope.cantidadVehiculo != undefined && $scope.descripcionVehiculo != undefined) {
            var obj = {
                cantidad_vehiculos: $scope.cantidadVehiculo,
                descripcion_vehiculos: $scope.descripcionVehiculo
            };

            $scope.listaVehiculo.push(obj);
        }
    }

    $scope.quitarSeleccionVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);

            var n = $scope.listaVehiculo.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaVehiculo[i].descripcion_vehiculos == $scope.seleccionVehiculoJS.descripcion_vehiculos) {
                    pos = i;
                    break;
                }
            }

            $scope.listaVehiculo.splice(pos, 1);
            $scope.seleccionVehiculo = {};

        }

    }

    $scope.agregarListaConsumoCombustible = function () {

        if ($scope.combustibleConsumo != undefined && $scope.combustibleConsumo != "" &&
            $scope.cantidadConsumoCombustible != undefined && $scope.cantidadConsumoCombustible != "") {

            var n = $scope.listaCombustibleConsumo.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleConsumo[i]._id == $scope.combustibleConsumo) {
                    pos = i;
                    break;
                }
            }

            var obj = {
                tipo_combustible: $scope.listaCombustibleConsumo[pos],
                cantidad_combustible: $scope.cantidadConsumoCombustible
            }

            $scope.listaCombustibleConsumoSelect.push(obj);

            $scope.listaCombustibleConsumo.splice(pos, 1);
            $scope.combustibleConsumo = {};
            $scope.cantidadConsumoCombustible = "";

        }

    }

    $scope.quitarSeleccionConsumoCombustible = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "") {

            $scope.seleccionConsumoCombustibleJS = JSON.parse($scope.seleccionConsumoCombustible);
            $scope.listaCombustibleConsumo.push($scope.seleccionConsumoCombustibleJS.tipo_combustible);

            var n = $scope.listaCombustibleConsumoSelect.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleConsumoSelect[i].tipo_combustible._id == $scope.seleccionConsumoCombustibleJS.tipo_combustible._id) {
                    pos = i;
                    break;
                }
            }

            $scope.listaCombustibleConsumoSelect.splice(pos, 1);
            $scope.seleccionConsumoCombustible = {};

        }

    }

    $scope.agregarListaTransporteCombustible = function () {

        if ($scope.combustibleTransporte != undefined && $scope.combustibleTransporte != "" &&
            $scope.cantidadTransporteCombustible != undefined && $scope.cantidadTransporteCombustible != "") {

            console.log($scope.combustibleTransporte);
            var n = $scope.listaCombustibleTransporte.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleTransporte[i]._id == $scope.combustibleTransporte) {
                    pos = i;
                    break;
                }
            }

            var obj = {
                tipo_combustible: $scope.listaCombustibleTransporte[pos],
                cantidad_combustible: $scope.cantidadTransporteCombustible
            }

            $scope.listaCombustibleTransporteSelect.push(obj);

            $scope.listaCombustibleTransporte.splice(pos, 1);
            $scope.combustibleTransporte = {};
            $scope.cantidadTransporteCombustible = "";

        }

    }

    $scope.quitarSeleccionTrasnsporteCombustible = function () {

        if ($scope.seleccionTransporteCombustible != undefined && $scope.seleccionTransporteCombustible != "") {

            $scope.seleccionTransporteCombustibleJS = JSON.parse($scope.seleccionTransporteCombustible);
            $scope.listaCombustibleTransporte.push($scope.seleccionTransporteCombustibleJS.tipo_combustible);

            var n = $scope.listaCombustibleTransporteSelect.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleTransporteSelect[i].tipo_combustible._id == $scope.seleccionTransporteCombustibleJS.tipo_combustible._id) {
                    pos = i;
                    break;
                }
            }

            $scope.listaCombustibleTransporteSelect.splice(pos, 1);
            $scope.seleccionTransporteCombustible = {};

        }

    }

}]);