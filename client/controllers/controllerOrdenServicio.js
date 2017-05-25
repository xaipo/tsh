app.controller('ControllerOrdenServicio', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

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


    //$scope.seleccion;
    $scope.seleccionTripulante = {};
    $scope.seleccionMatPetreo = {};
    $scope.seleccionVehiculo = {};


    //$scope.busqueda;
    $scope.listaEmbarcacion;
    $scope.listaCliente;
    $scope.listaMaterialPetreo = [];
    $scope.listaVehiculo = [];
    $scope.listaPuerto;
    $scope.listaCombustible;
    $scope.listaTripulante;
    $scope.listaContratoRecepcion;
    $scope.listaTripulanteSelect = [];

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

    // Bandera
    $scope.ban;

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

                $scope.listaTipoCombustible = response.data;
                $scope.tipoCombustible = $scope.listaTipoCombustible[0]._id;

                $http.get($scope.urlAllCombustible)
                    .then(function (response) {

                        $scope.listaCombustible = response.data;

                        var n = $scope.listaCombustible.length;
                        var n1 = $scope.listaTipoCombustible.length;
                        for (var i = 0; i < n; i++) {
                            for (var j = 0; j < n1; j++) {
                                if ($scope.listaCombustible[i].tipo_combustible == $scope.listaTipoCombustible[j]._id) {
                                    $scope.aux = $scope.listaTipoCombustible[j];
                                    $scope.listaCombustible[i].tipo_combustible = $scope.aux;
                                }
                            }
                            $scope.combustibleTransporte = $scope.listaCombustible[1]._id;
                            $scope.combustibleConsumo = $scope.listaCombustible[0]._id;
                        }

                    }, function errorCallback(response) {

                        console.log(response);
                    });
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

    var preparar = function (cd) {

        var dimMatPet = $scope.listaMaterialPetreo.length;

        for (var i = 0; i < dimMatPet; i++) {

            $scope.objMat = $scope.listaMaterialPetreo[i];
            var dato;
            $http.post($scope.urlMatPetreo, $scope.objMat)
                .then(function successCallback(response) {

                    $scope.listMatPetreo.push(response.data._id);

                }, function errorCallback(response) {

                    console.log(response);
                });

        }


        var dimVe = $scope.listaVehiculo.length;
        var dato;
        for (var i = 0; i < dimVe; i++) {

            $scope.objVehi = $scope.listaVehiculo[i];

            $http.post($scope.urlVehiculo, $scope.objVehi)
                .then(function successCallback(response) {

                    $scope.listaVehi.push(response.data._id);

                }), function errorCallback(response) {

                };
        }


        var dimeTrip = $scope.listaTripulanteSelect.length;

        for (var i = 0; i < dimeTrip; i++) {

            $scope.listaTrip.push($scope.listaTripulanteSelect[i]._id);

        }

        console.log("Hola");
        cd($scope.listaVehi);
    }

    var prepararIngreso = function (txt, obj) {

        $scope.selecCli = JSON.parse($scope.seleccionCliente);

        var objVar = {
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
            combustible_consumo: $scope.combustibleConsumo,
            combustible_transporte: $scope.combustibleTransporte,
            observacion_maquinaria: $scope.observacionMaquinista,
            contrato_recepcion: $scope.contratoRecepcion,
            nombre_capitan: $scope.nombreCapitan,
            tripulacion: $scope.listaTrip
        };

        console.log("Bien");

        obj(objVar);
    }

    var guardar = function (obj, cb) {

        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });
        cb("Es lo ultimo");
    }

    $scope.ingresoOrdenServicio = function () {

        preparar(function (cd) {
            console.log(cd);
            prepararIngreso(cd, function (obj) {
                console.log(obj);
                guardar(obj, function (cd) {
                    console.log(cd);
                });
            });
        });

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

        var obj = {
            tipo_material: $scope.tipoMaterial, num_volquetas: $scope.numVolquetas,
            cant_total_m3: $scope.cantTotalM3
        };

        $scope.listaMaterialPetreo.push(obj);

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

        var obj = {
            cantidad_vehiculos: $scope.cantidadVehiculo,
            descripcion_vehiculos: $scope.descripcionVehiculo
        };

        $scope.listaVehiculo.push(obj);

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



    $scope.ingresarTest = function () {



        var dimMatPet = $scope.listaMaterialPetreo.length;

        for (var i = 0; i < dimMatPet; i++) {

            $http({
                method: 'POST',
                url: $scope.urlMatPetreo,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.listaMaterialPetreo[i]


            }).then(function successCallback(response) {

                $scope.listMatPetreo.push(response.data._id);


            }, function errorCallback(response) {



            }).then(function (response) {


                console.log($scope.listMatPetreo);
                $http({
                    method: 'POST',
                    url: $scope.urlMatPetreo,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        carga_material: $scope.listMatPetreo
                    }


                }).then(function successCallback(response) {

                   console.log(response.data._id)
                 

                }, function errorCallback(response) {



                })


            });
        }




    }



    function dataService($http, $q) {
        return {
            getAll: getAll
        }

        function getAll() {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get('http://midominio.com/recursos.json')
                .success(function (data) {
                    defered.resolve(data);
                })
                .error(function (err) {
                    defered.reject(err)
                });

            return promise;
        }
    }
}]);