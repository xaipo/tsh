app.controller('ControllerOrdenServicioModificar', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.urlModificar;
    $scope.urlAllCliente;
    $scope.urlAllPuerto;
    $scope.urlAllCombustible;
    $scope.urlModificarCombustible;
    $scope.urlAllEmbarcacion;
    $scope.urlAllTripulante;
    $scope.urlAllContratoRecepcion;
    $scope.urlAllVehiculo;
    $scope.urlAllMaterialPetreo;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoTripulante;
    $scope.urlAllOrdenServicio;
    $scope.urlMatPetreo;
    $scope.urlMatPetreoModificar;
    $scope.urlVehiculo;
    $scope.urlVehiculoModificar;
    $scope.urlBuscarClienteId;
    $scope.urlBuscarCombustibleId;
    $scope.urlBuscarTipoCombustibleId;

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
    $scope.seleccionTripulante;
    $scope.seleccionMatPetreo;
    $scope.seleccionMatPetreoNueva;
    $scope.seleccionVehiculo;
    $scope.seleccionConsumoCombustible;
    $scope.seleccionTransporteCombustible;
    $scope.seleccionOrdenServicio;
    $scope.seleccionOrdenServicioLista;


    //$scope.busqueda;
    $scope.listaEmbarcacion = [];
    $scope.listaCliente = [];
    $scope.listaMaterialPetreo = [];
    $scope.listaVehiculo = [];
    $scope.listaPuerto = [];
    $scope.listaTipoCombustibleConsumo = [];
    $scope.listaCombustibleConsumoSelect = [];
    $scope.listaCombustibleConsumoIngresar = [];
    $scope.listaTipoCombustibleTransporte = [];
    $scope.listaCombustibleTransporteSelect = [];
    $scope.listaCombustibleTransporteIngresar = [];
    $scope.listaTripulante = [];
    $scope.listaContratoRecepcion = [];
    $scope.listaTripulanteSelect = [];
    $scope.listaTransporteCombutible = [];
    $scope.listaConsumoCombustible = [];
    $scope.listaTripulanteViaje = [];
    $scope.listaOrdenServicio = [];

    // Lista de Antes

    $scope.listMatPetreo = [];
    $scope.listaVehi = [];
    $scope.listaTrip = [];
    $scope.objMat = {};
    $scope.objVehi = {};

    // Listas para modificar
    $scope.listaMatPetreoNueva = [];
    $scope.listaVehiNueva = [];
    $scope.listaTripNueva = [];
    $scope.listMatPetreoEliminar = [];
    $scope.listaVehiEliminar = [];
    $scope.listaTripEliminar = [];

    // Dimenciones Listas
    $scope.dimVe;
    $scope.dimMatPet;
    $scope.dimTrip;

    //verificar las lista de combustibles xq solo carga los tipos...

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoOrdenServicio();
        $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
        $scope.urlAllCliente = myProvider.getUrlAllClientes();
        $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo()


        $scope.urlAllPuerto = myProvider.getUrlAllPuerto();

        $scope.urlAllCombustible = myProvider.getUrlAllCombustible();
        $scope.urlModificarCombustible = myProvider.getUrlModificarCombustible();
        $scope.urlBuscarCombustibleId = myProvider.getUrlBuscarCombustible();

        $scope.urlAllTripulante = myProvider.getUrlAllTripulante();

        $scope.urlAllContratoRecepcion = myProvider.getUrlAllContratoRecepcion();

        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $scope.urlBuscarTipoCombustibleId = myProvider.getUrlBuscarTipoCombustible();

        $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();

        $scope.urlMatPetreo = myProvider.getUrlIngresoMaterialPetreo();
        $scope.urlMatPetreoModificar = myProvider.getUrlModificarMaterialPetreo();
        $scope.urlMatPetreoBuscar = myProvider.getUrlIdMaterialPetreo();

        $scope.urlVehiculo = myProvider.getUrlIngresoVehiculo();
        $scope.urlVehiculoModificar = myProvider.getUrlModificarVehiculo();
        $scope.urlVehiculoBuscar = myProvider.getUrlIdVehiculo();

        $scope.urlAllOrdenServicio = myProvider.getUrlAllOrdenServicio();
        $scope.urlBuscarClienteId = myProvider.getUrlIdClientes();

        //$scope.busqueda;
        $scope.listaEmbarcacion = [];
        $scope.listaCliente = [];
        $scope.listaMaterialPetreo = [];
        $scope.listaVehiculo = [];
        $scope.listaPuerto = [];
        $scope.listaTipoCombustibleConsumo = [];
        $scope.listaCombustibleConsumoSelect = [];
        $scope.listaCombustibleConsumoIngresar = [];
        $scope.listaTipoCombustibleTransporte = [];
        $scope.listaCombustibleTransporteSelect = [];
        $scope.listaCombustibleTransporteIngresar = [];
        $scope.listaTripulante = [];
        $scope.listaContratoRecepcion = [];
        $scope.listaTripulanteSelect = [];
        $scope.listaTransporteCombutible = [];
        $scope.listaConsumoCombustible = [];
        $scope.listaOrdenServicio = [];

        // Lista de Antes

        $scope.listMatPetreo = [];
        $scope.listaVehi = [];
        $scope.listaCombustibleConsumo = [];
        $scope.listaCombustibleTransporte = [];
        $scope.listaTrip = [];
        $scope.objMat = {};
        $scope.objVehi = {};

        // Listas para modificar
        $scope.listaMatPetreoNueva = [];
        $scope.listaVehiNueva = [];
        $scope.listaCombustibleConsumoNueva = [];
        $scope.listaCombustibleTransporteNueva = [];
        $scope.listaTripNueva = [];
        $scope.listMatPetreoEliminar = [];
        $scope.listaVehiEliminar = [];
        $scope.listaCombustibleConsumoEliminar = [];
        $scope.listaCombustibleTransporteEliminar = [];
        $scope.listaTripEliminar = [];

        $scope.ban = true;

        $scope.estado = "1";

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

                $scope.listaTipoCombustibleConsumo = response.data;
                $scope.combustibleConsumo = $scope.listaTipoCombustibleConsumo[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaTipoCombustibleTransporte = response.data;
                $scope.combustibleTransporte = $scope.listaTipoCombustibleTransporte[1]._id;

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
                //$scope.seleccionCliente = $scope.listaCliente[0];

                $http.get($scope.urlAllOrdenServicio)
                    .then(function (response) {

                        $scope.listaOrdenServicio = response.data;

                        var n1 = $scope.listaCliente.length;
                        var n = $scope.listaOrdenServicio.length;
                        for (var i = 0; i < n; i++) {
                            for (var j = 0; j < n1; j++) {
                                if ($scope.listaOrdenServicio[i].cliente == $scope.listaCliente[j]._id) {

                                    $scope.listaOrdenServicio[i].cliente = $scope.listaCliente[j];
                                    j = n1;

                                }
                            }
                        }

                    }, function errorCallback(response) {

                        console.log(response);
                    });

            }, function errorCallback(response) {

                console.log(response);
            });

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
                data: $scope.listaMatPetreoNueva[pos]


            }).then(function successCallback(response) {

                $scope.listaMaterialPetreo.push(response.data);


            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.modificarBaseMaterialPetreo = function (pos) {
        console.log($scope.listaMaterialPetreo);

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlMatPetreoModificar,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.listaMaterialPetreo[pos]

            }).then(function successCallback(response) {

                console.log(response.data);

            }, function errorCallback(response) {


            }));

        return q.promise

    }

    $scope.ingresoVehiculos = function (pos) {

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

    $scope.modificarBaseVehiculos = function (pos) {

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlVehiculoModificar,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.listaVehiculo[pos]


            }).then(function successCallback(response) {

                console.log(response.data);


            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.modificarBaseConsumoCombustible = function (pos) {

        var obj = {
            _id: $scope.listaConsumoCombustible[pos]._id,
            tipo_combustible: $scope.listaConsumoCombustible[pos].tipo_combustible._id,
            cantidad_combustible: $scope.listaConsumoCombustible[pos].cantidad_combustible
        };
        
        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlModificarCombustible, obj)
                .then(function (response) {

                    console.log(response.data);

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarBaseTransporteCombustible = function (pos) {

        var obj = {
            _id: $scope.listaCombustibleTransporte[pos]._id,
            tipo_combustible: $scope.listaCombustibleTransporte[pos].tipo_combustible._id,
            cantidad_combustible: $scope.listaCombustibleTransporte[pos].cantidad_combustible
        };

        console.log(obj);
        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlModificarCombustible, obj)
                .then(function (response) {

                    console.log(response.data);

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarOrden = function () {

        $scope.selecCli = JSON.parse($scope.seleccionCliente);

        var q = $q.defer()

        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlModificar,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    id: $scope.id,
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

    $scope.modificarOrdenServicio = function () {

        //var dimBaseMatPetModif = $scope.listaMaterialPetreo.length;
        //for (var i = 0; i < dimBaseMatPetModif; i++) {

        //    $scope.modificarBaseMaterialPetreo(i);

        //}

        //var dimMatPet = $scope.listaMatPetreoNueva.length;

        //for (var i = 0; i < dimMatPet; i++) {

        //    $scope.ingresoMateriales(i);

        //}

        //var dimVeModif = $scope.listaVehiculo.length;
        //for (var i = 0; i < dimVeModif; i++) {

        //    $scope.modificarBaseVehiculos(i);

        //}

        //var dimVe = $scope.listaVehiculo.length;
        //for (var i = 0; i < dimVe; i++) {

        //    $scope.ingresoVehiculos(i);

        //}

        //var dimeCombusConsModif = $scope.listaConsumoCombustible.length;
        //for (var i = 0; i < dimeCombusConsModif; i++) {

        //    $scope.modificarBaseConsumoCombustible(i);

        //}

        var dimeCombusTransModif = $scope.listaCombustibleTransporte.length;
        for (var i = 0; i < dimeCombusTransModif; i++) {

            $scope.modificarBaseTransporteCombustible(i);

        }

        //var dimeCombusTrans = $scope.listaCombustibleTransporteSelect.length;
        //for (var i = 0; i < dimeCombusTrans; i++) {

        //    var obj = {
        //        tipo_combustible: $scope.listaCombustibleTransporteSelect[i].tipo_combustible._id,
        //        cantidad_combustible: $scope.listaCombustibleTransporteSelect[i].cantidad_combustible
        //    }

        //    $scope.listaCombustibleTransporteIngresar.push(obj);

        //}

        //var dimeTrip = $scope.listaTripulanteSelect.length;
        //for (var i = 0; i < dimeTrip; i++) {

        //    $scope.listaTrip.push($scope.listaTripulanteSelect[i]._id.toString());

        //}

        //$timeout(function () {

        //    $scope.ingresoOrden();

        //}, 3000, false)
    }

    $scope.cargarListasSeleccionOrdenServicio = function (orden) {

        var nMat = orden.carga_material_petreo.length;
        var listaMat = orden.carga_material_petreo;
        for (var i = 0; i < nMat; i++) {
            var mat = { id: listaMat[i] };
            $http.post($scope.urlMatPetreoBuscar, mat)
                .then(function (response) {

                    $scope.listaMaterialPetreo.push(response.data);

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

        var nVehi = orden.carga_vehiculo.length;
        var listaVehi = orden.carga_vehiculo;
        for (var i = 0; i < nVehi; i++) {

            var vehi = { id: listaVehi[i] };
            $http.post($scope.urlVehiculoBuscar, vehi)
                .then(function (response) {

                    $scope.listaVehiculo.push(response.data);

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

        var nCombCons = orden.combustible_consumo.length;
        var listaCons = orden.combustible_consumo;
        var k = 0;
        for (var i = 0; i < nCombCons; i++) {

            var combust = { id: listaCons[i] };

            $http.post($scope.urlBuscarCombustibleId, combust)
                .then(function (response) {

                    $scope.listaConsumoCombustible.push(response.data);
                    var tipCombus = {
                        id: response.data.tipo_combustible
                    }

                    $http.post($scope.urlBuscarTipoCombustibleId, tipCombus)
                        .then(function (response) {

                            $scope.listaConsumoCombustible[k++].tipo_combustible = response.data;

                        }, function errorCallback(response) {

                            console.log(response);

                        });

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

        var nCombTrans = orden.combustible_transporte.length;
        var listaTransport = orden.combustible_transporte;
        var x = 0;
        for (var i = 0; i < nCombTrans; i++) {

            var combust = {
                id: listaTransport[i]
            };

            $http.post($scope.urlBuscarCombustibleId, combust)
                .then(function (response) {

                    $scope.listaCombustibleTransporte.push(response.data);
                    var tipCombus = {
                        id: response.data.tipo_combustible
                    }

                    $http.post($scope.urlBuscarTipoCombustibleId, tipCombus)
                        .then(function (response) {

                            $scope.listaCombustibleTransporte[x++].tipo_combustible = response.data;

                        }, function errorCallback(response) {

                            console.log(response);

                        });

                }, function errorCallback(response) {

                    console.log(response);
                });
        }

        var nTrip = orden.tripulacion.length;
        var listTrip = orden.tripulacion;
        for (var i = 0; i < nTrip; i++) {
            var nTripul = $scope.listaTripulante.length;
            for (var j = 0; j < nTripul; j++) {
                if (listTrip[i] == $scope.listaTripulante[j]._id) {

                    $scope.listaTripulanteViaje.push($scope.listaTripulante[j]);
                    $scope.listaTripulante.splice(j, 1);
                    j = nTripul;

                }
            }
        }

    }

    $scope.buscarSeleccionListaOrdenServicio = function () {

        $scope.iniciar();
        if ($scope.seleccionOrdenServicioLista != '' && $scope.seleccionOrdenServicioLista != undefined) {

            $scope.selecOrdenServ = JSON.parse($scope.seleccionOrdenServicioLista);
            $scope.seleccionCliente = $scope.selecOrdenServ.cliente;
            $scope.fecha = $scope.selecOrdenServ.fecha;
            $scope.embarcacion = $scope.selecOrdenServ.embarcacion;
            $scope.puertoEmbarque = $scope.selecOrdenServ.puerto_embarque;
            $scope.puertoDesembarque = $scope.selecOrdenServ.puerto_desembarque;
            $scope.orometroInicialM1 = $scope.selecOrdenServ.orometro_inicial_m1;
            $scope.orometroInicialM2 = $scope.selecOrdenServ.orometro_inicial_m2;
            $scope.orometroFinalM1 = $scope.selecOrdenServ.orometro_final_m1;
            $scope.orometroFinalM2 = $scope.selecOrdenServ.orometro_final_m2;
            $scope.horaSalida = $scope.selecOrdenServ.hora_salida;
            $scope.horaArribo = $scope.selecOrdenServ.hora_arribo;
            $scope.observaciones = $scope.selecOrdenServ.observaciones;
            $scope.observacionMaquinista = $scope.selecOrdenServ.observacion_maquinaria;
            $scope.contratoRecepcion = $scope.selecOrdenServ.contrato_recepcion;
            $scope.nombreCapitan = $scope.selecOrdenServ.nombre_capitan;
            $scope.detalle = $scope.selecOrdenServ.detalle;
            $scope.cargarListasSeleccionOrdenServicio($scope.selecOrdenServ);

        }
    }

    $scope.cargarDatosMaterialPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "") {

            $scope.seleccionMatPetreoJS = JSON.parse($scope.seleccionMatPetreo);
            $scope.tipoMaterial = $scope.seleccionMatPetreoJS.tipo_material;
            $scope.numVolquetas = $scope.seleccionMatPetreoJS.num_volquetas;
            $scope.cantTotalM3 = $scope.seleccionMatPetreoJS.cant_total_m3;

        }

    }

    $scope.cargarDatosVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);
            $scope.descripcionVehiculo = $scope.seleccionVehiculoJS.descripcion_vehiculos;
            $scope.cantidadVehiculo = $scope.seleccionVehiculoJS.cantidad_vehiculos;

        }

    }

    $scope.cargarDatosCombustibleComsumo = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "") {

            $scope.seleccionConsumoCombJS = JSON.parse($scope.seleccionConsumoCombustible);
            $scope.combustibleConsumo = $scope.seleccionConsumoCombJS.tipo_combustible._id;
            $scope.cantidadConsumoCombustible = $scope.seleccionConsumoCombJS.cantidad_combustible;

        }

    }

    $scope.cargarDatosCombustibleTransporte = function () {

        if ($scope.seleccionTransporteCombustible != undefined && $scope.seleccionTransporteCombustible != "") {

            $scope.seleccionTransporteCombJS = JSON.parse($scope.seleccionTransporteCombustible);
            $scope.combustibleTransporte = $scope.seleccionTransporteCombJS.tipo_combustible._id;
            $scope.cantidadTransporteCombustible = $scope.seleccionTransporteCombJS.cantidad_combustible;

        }

    }

    $scope.agregarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != undefined && $scope.seleccionTripulante != "") {

            $scope.seleccionTripulanteJS = JSON.parse($scope.seleccionTripulante);
            $scope.listaTripulanteViaje.push($scope.seleccionTripulanteJS);

            var n = $scope.listaTripulante.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaTripulante[i]._id == $scope.seleccionTripulanteJS._id) {

                    $scope.listaTripulante.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionTripulante = {};

        }

    }

    $scope.quitarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != undefined && $scope.seleccionTripulante != "") {

            $scope.seleccionTripulanteJS = JSON.parse($scope.seleccionTripulante);
            $scope.listaTripulante.push($scope.seleccionTripulanteJS);

            var n = $scope.listaTripulanteViaje.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaTripulanteViaje[i]._id == $scope.seleccionTripulanteJS._id) {

                    $scope.listaTripulanteViaje.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionTripulante = {};

        }

    }

    $scope.agregarListaMatPetreo = function () {

        if ($scope.tipoMaterial != "" && $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.tipoMaterial != undefined && $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {
            var obj = {
                tipo_material: $scope.tipoMaterial,
                num_volquetas: $scope.numVolquetas,
                cant_total_m3: $scope.cantTotalM3
            };

            $scope.listaMatPetreoNueva.push(obj);
        }
        $scope.tipoMaterial = "";
        $scope.numVolquetas = "";
        $scope.cantTotalM3 = "";
    }

    $scope.modificarListaMatPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "" &&
            $scope.tipoMaterial != "" && $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.tipoMaterial != undefined && $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {

            $scope.seleccionMatPetreoJS = JSON.parse($scope.seleccionMatPetreo);
            $scope.seleccionMatPetreoJS.tipo_material = $scope.tipoMaterial;
            $scope.seleccionMatPetreoJS.num_volquetas = $scope.numVolquetas;
            $scope.seleccionMatPetreoJS.cant_total_m3 = $scope.cantTotalM3;

            var n = $scope.listaMaterialPetreo.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialPetreo[i]._id == $scope.seleccionMatPetreoJS._id) {

                    $scope.listaMaterialPetreo[i] = $scope.seleccionMatPetreoJS;
                    break;

                }
            }

            $scope.seleccionMatPetreo = {};
            $scope.tipoMaterial = "";
            $scope.numVolquetas = "";
            $scope.cantTotalM3 = "";

        }

    }

    $scope.quitarSeleccionMaterialPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "") {

            $scope.seleccionMatPetreoJS = JSON.parse($scope.seleccionMatPetreo);

            var n = $scope.listaMaterialPetreo.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaMaterialPetreo[i].tipo_material == $scope.seleccionMatPetreoJS.tipo_material) {

                    $scope.listaMaterialPetreo.splice(i, 1);
                    break;

                }
            }

            var n1 = $scope.listaMatPetreoNueva.length;
            for (var i = 0; i < n1; i++) {

                if ($scope.listaMatPetreoNueva[i].tipo_material == $scope.seleccionMatPetreoJS.tipo_material) {

                    $scope.listaMatPetreoNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionMatPetreo = {};
            $scope.tipoMaterial = "";
            $scope.numVolquetas = "";
            $scope.cantTotalM3 = "";

        }

    }

    $scope.agregarListaVehiculo = function () {

        if ($scope.cantidadVehiculo != "" && $scope.descripcionVehiculo != "" &&
            $scope.cantidadVehiculo != undefined && $scope.descripcionVehiculo != undefined) {
            var obj = {
                cantidad_vehiculos: $scope.cantidadVehiculo,
                descripcion_vehiculos: $scope.descripcionVehiculo
            };

            $scope.listaVehiNueva.push(obj);
        }

        $scope.descripcionVehiculo = "";
        $scope.cantidadVehiculo = "";

    }

    $scope.modificarListaVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "" &&
            $scope.cantidadVehiculo != "" && $scope.descripcionVehiculo != "" &&
            $scope.cantidadVehiculo != undefined && $scope.descripcionVehiculo != undefined) {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);
            $scope.seleccionVehiculoJS.descripcion_vehiculos = $scope.descripcionVehiculo;
            $scope.seleccionVehiculoJS.cantidad_vehiculos = $scope.cantidadVehiculo;

            var n = $scope.listaVehiculo.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaVehiculo[i]._id == $scope.seleccionVehiculoJS._id) {

                    $scope.listaVehiculo[i] = $scope.seleccionVehiculoJS;
                    break;

                }
            }

            $scope.seleccionMatPetreo = {};
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";

        }

    }

    $scope.quitarSeleccionVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);

            var n = $scope.listaVehiculo.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaVehiculo[i].descripcion_vehiculos == $scope.seleccionVehiculoJS.descripcion_vehiculos) {

                    $scope.listaVehiculo.splice(i, 1);
                    break;

                }
            }

            var n = $scope.listaVehiNueva.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaVehiNueva[i].descripcion_vehiculos == $scope.seleccionVehiculoJS.descripcion_vehiculos) {

                    $scope.listaVehiNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionVehiculo = {};
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";

        }

    }

    $scope.agregarListaConsumoCombustible = function () {

        if ($scope.combustibleConsumo != undefined && $scope.combustibleConsumo != "" &&
            $scope.cantidadConsumoCombustible != undefined && $scope.cantidadConsumoCombustible != "") {

            var n = $scope.listaTipoCombustibleConsumo.length;

            for (var i = 0; i < n; i++) {

                if ($scope.listaTipoCombustibleConsumo[i]._id == $scope.combustibleConsumo) {

                    var obj = {
                        tipo_combustible: $scope.listaTipoCombustibleConsumo[i],
                        cantidad_combustible: $scope.cantidadConsumoCombustible
                    }

                    $scope.listaCombustibleConsumoIngresar.push(obj);
                    break;
                }
            }


            // $scope.combustibleConsumo = {};
            $scope.cantidadConsumoCombustible = "";

        }

    }

    $scope.modificarListaConsumoCombustible = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "" &&
            $scope.combustibleConsumo != undefined && $scope.combustibleConsumo != "" &&
            $scope.cantidadConsumoCombustible != "" && $scope.cantidadConsumoCombustible != undefined) {

            $scope.seleccionCombustibleJS = JSON.parse($scope.seleccionConsumoCombustible);

            var n = $scope.listaConsumoCombustible.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaConsumoCombustible[i]._id == $scope.seleccionCombustibleJS._id) {

                    var n1 = $scope.listaTipoCombustibleConsumo.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaTipoCombustibleConsumo[j]._id == $scope.combustibleConsumo) {

                            $scope.listaConsumoCombustible[i].tipo_combustible = $scope.listaTipoCombustibleConsumo[j];
                            $scope.listaConsumoCombustible[i].cantidad_combustible = $scope.cantidadConsumoCombustible;
                            break;

                        }

                    }

                }

            }

            var nDim = $scope.listaCombustibleConsumoIngresar.length;
            for (var i = 0; i < nDim; i++) {

                if ($scope.listaCombustibleConsumoIngresar[i].tipo_combustible._id == $scope.seleccionCombustibleJS.tipo_combustible._id) {

                    var n1 = $scope.listaTipoCombustibleConsumo.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaTipoCombustibleConsumo[j]._id == $scope.combustibleConsumo) {

                            $scope.listaCombustibleConsumoIngresar[i].tipo_combustible = $scope.listaTipoCombustibleConsumo[j];
                            $scope.listaCombustibleConsumoIngresar[i].cantidad_combustible = $scope.cantidadConsumoCombustible;
                            break;

                        }

                    }

                }

            }

            //$scope.seleccionConsumoCombustible = {};
            $scope.cantidadConsumoCombustible = "";

        }

    }

    $scope.quitarSeleccionConsumoCombustible = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "") {

            $scope.seleccionConsumoCombustibleJS = JSON.parse($scope.seleccionConsumoCombustible);
            //$scope.listaTipoCombustibleConsumo.push($scope.seleccionConsumoCombustibleJS.tipo_combustible);

            var n = $scope.listaCombustibleConsumoIngresar.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleConsumoIngresar[i].tipo_combustible._id == $scope.seleccionConsumoCombustibleJS.tipo_combustible._id) {

                    $scope.listaCombustibleConsumoIngresar.splice(i, 1);
                    break;

                }
            }

            var n = $scope.listaConsumoCombustible.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaConsumoCombustible[i]._id == $scope.seleccionConsumoCombustibleJS._id) {

                    $scope.listaConsumoCombustible.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionConsumoCombustible = {};
            $scope.cantidadConsumoCombustible = "";

        }

    }

    $scope.agregarListaTransporteCombustible = function () {

        if ($scope.combustibleTransporte != undefined && $scope.combustibleTransporte != "" &&
            $scope.cantidadTransporteCombustible != undefined && $scope.cantidadTransporteCombustible != "") {

            var n = $scope.listaTipoCombustibleTransporte.length;

            for (var i = 0; i < n; i++) {

                if ($scope.listaTipoCombustibleTransporte[i]._id == $scope.combustibleTransporte) {
                    var obj = {
                        tipo_combustible: $scope.listaTipoCombustibleTransporte[i],
                        cantidad_combustible: $scope.cantidadTransporteCombustible
                    }

                    $scope.listaCombustibleTransporteIngresar.push(obj);
                    break;
                }
            }

            //$scope.combustibleTransporte = {};
            $scope.cantidadTransporteCombustible = "";

        }

    }

    $scope.modificarListaTransporteCombustible = function () {

        if ($scope.seleccionTransporteCombustible != undefined && $scope.seleccionTransporteCombustible != "" &&
            $scope.combustibleTransporte != undefined && $scope.combustibleTransporte != "" &&
            $scope.cantidadTransporteCombustible != "" && $scope.cantidadTransporteCombustible != undefined) {

            $scope.seleccionCombustibleJS = JSON.parse($scope.seleccionTransporteCombustible);

            var n = $scope.listaCombustibleTransporte.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleTransporte[i]._id == $scope.seleccionCombustibleJS._id) {

                    var n1 = $scope.listaTipoCombustibleTransporte.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaTipoCombustibleTransporte[j]._id == $scope.combustibleTransporte) {

                            $scope.listaCombustibleTransporte[i].tipo_combustible = $scope.listaTipoCombustibleTransporte[j];
                            $scope.listaCombustibleTransporte[i].cantidad_combustible = $scope.cantidadTransporteCombustible;
                            break;

                        }

                    }

                }

            }

            var nDim = $scope.listaCombustibleTransporteIngresar.length;
            for (var i = 0; i < nDim; i++) {

                if ($scope.listaCombustibleTransporteIngresar[i].tipo_combustible._id == $scope.seleccionCombustibleJS.tipo_combustible._id) {

                    var n1 = $scope.listaTipoCombustibleConsumo.length;
                    for (var j = 0; j < n1; j++) {

                        if ($scope.listaTipoCombustibleTransporte[j]._id == $scope.combustibleTransporte) {

                            $scope.listaCombustibleTransporteIngresar[i].tipo_combustible = $scope.listaTipoCombustibleTransporte[j];
                            $scope.listaCombustibleTransporteIngresar[i].cantidad_combustible = $scope.cantidadTransporteCombustible;
                            break;

                        }

                    }

                }

            }

            //$scope.seleccionConsumoCombustible = {};
            $scope.cantidadTransporteCombustible = "";

        }

    }

    $scope.quitarSeleccionTrasnsporteCombustible = function () {

        if ($scope.seleccionTransporteCombustible != undefined && $scope.seleccionTransporteCombustible != "") {

            $scope.seleccionTransporteCombustibleJS = JSON.parse($scope.seleccionTransporteCombustible);

            var n = $scope.listaCombustibleTransporteIngresar.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleTransporteIngresar[i].tipo_combustible._id == $scope.seleccionTransporteCombustibleJS.tipo_combustible._id) {

                    $scope.listaCombustibleTransporteIngresar.splice(i, 1);
                    break;
                }
            }

            var n = $scope.listaCombustibleTransporte.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleTransporte[i]._id == $scope.seleccionTransporteCombustibleJS._id) {

                    $scope.listaCombustibleTransporte.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionTransporteCombustible = {};
            $scope.cantidadTransporteCombustible = "";

        }

    }

}]);