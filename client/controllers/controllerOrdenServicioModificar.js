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
    $scope.urlCombustible;
    $scope.urlVehiculoModificar;
    $scope.urlBuscarClienteId;
    $scope.urlBuscarCombustibleId;
    $scope.urlBuscarTipoCombustibleId;
    $scope.urlBuscarTipoMaterialPetreoId;

    //atributos
    $scope.id = "";
    $scope.cliente = "";
    $scope.detalle = "";
    $scope.embarcacion = "";
    $scope.estado = "";
    $scope.fechaEmision = "";
    $scope.fechaEntrega = "";
    $scope.puertoEmbarque = "";
    $scope.puertoDesembarque = "";
    $scope.orometroInicialM1 = "";
    $scope.orometroInicialM2 = "";
    $scope.orometroFinalM1 = "";
    $scope.orometroFinalM2 = "";
    $scope.horaSalida = "";
    $scope.horaArribo = "";
    $scope.cargaMaterialPetreo = "";
    $scope.cargaVehiculo = "";
    $scope.observaciones = "";
    $scope.combustibleConsumo = "";
    $scope.combustibleTransporte = "";
    $scope.observacionMaquinista = "";
    $scope.contratoRecepcion = "";
    $scope.capitan = "";

    // Variable de combustible
    $scope.cantidadConsumoCombustible = "";
    $scope.cantidadTransporteCombustible = "";

    // Variables horas
    $scope.horasSalida = "";
    $scope.minutosSalida = "";
    $scope.horasArribo = "";
    $scope.minutosArribo = "";


    $scope.selecCli = "";
    $scope.seleccionCliente = "";
    $scope.seleccionMatPetreo = {};
    $scope.seleccionTipoMatPetreo = {};
    $scope.seleccionMatPetreoNueva = {};
    $scope.seleccionVehiculo = {};
    $scope.seleccionConsumoCombustible = {};
    $scope.seleccionTransporteCombustible = {};
    $scope.seleccionOrdenServicio;
    $scope.seleccionOrdenServicioLista = "";


    //$scope.busqueda;
    $scope.listaEmbarcacion = [];
    $scope.listaCliente = [];
    $scope.listaMaterialPetreo = [];
    $scope.listaVehiculo = [];
    $scope.listaPuerto = [];
    $scope.listaTipoCombustibleConsumo = [];
    $scope.listaCombustibleConsumoIngresar = [];
    $scope.listaTipoCombustibleTransporte = [];
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
    $scope.listaVehiculos = [];
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
    $scope.listaTipoMaterialPetreo = [];
    $scope.listaEstadosOrden = [];

    // Dimenciones Listas
    $scope.dimVe;
    $scope.dimMatPet;
    $scope.dimTrip;
    $scope.incId;


    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.urlModificar = myProvider.getUrlModificarOrdenServicio();
            $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
            $scope.urlAllCliente = myProvider.getUrlAllClientes();
            $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo()
            
            $scope.urlAllPuerto = myProvider.getUrlAllPuerto();

            $scope.urlAllCombustible = myProvider.getUrlAllCombustible();
            $scope.urlCombustible = myProvider.getUrlIngresoCombustible();

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

            $scope.urlAllOrdenServicioEstadoProcesoViaje = myProvider.getUrlBuscarOrdenServicioEstadoViajeProceso();
            $scope.urlBuscarClienteId = myProvider.getUrlIdClientes();

            $scope.getUrlAllTripulanteCapitan = myProvider.getUrlAllTripulanteCapitan();
            $scope.urlAllEstadosOrden = myProvider.getUrlAllEstadoOrden();

            $scope.urlBuscarTipoMaterialPetreoId = myProvider.getUrlBuscarTipoMaterialPetreo();
            $scope.urlAllTipoMaterialPetreo = myProvider.getUrlAllTipoMaterialPetreo();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            //atributos
            $scope.id = "";
            $scope.cliente = "";
            $scope.detalle = "";
            $scope.embarcacion = "";
            $scope.estado = "";
            $scope.fechaEmision = "";
            $scope.fechaEntrega = "";
            $scope.puertoEmbarque = "";
            $scope.puertoDesembarque = "";
            $scope.orometroInicialM1 = "";
            $scope.orometroInicialM2 = "";
            $scope.orometroFinalM1 = "";
            $scope.orometroFinalM2 = "";
            $scope.horaSalida = "";
            $scope.horaArribo = "";
            $scope.cargaMaterialPetreo = "";
            $scope.cargaVehiculo = "";
            $scope.observaciones = "";
            $scope.combustibleConsumo = "";
            $scope.combustibleTransporte = "";
            $scope.observacionMaquinista = "";
            $scope.contratoRecepcion = "";
            $scope.capitan = "";

            // Variables horas
            $scope.horasSalida = "";
            $scope.minutosSalida = "";
            $scope.horasArribo = "";
            $scope.minutosArribo = "";

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
            $scope.listaTipoMaterialPetreo = [];
            $scope.listaEstadosOrden = [];


            $scope.selecCli = "";
            $scope.seleccionCliente = "";
            $scope.seleccionMatPetreo = {};
            $scope.seleccionTipoMatPetreo = {};
            $scope.seleccionMatPetreoNueva = {};
            $scope.seleccionVehiculo = {};
            $scope.seleccionConsumoCombustible = {};
            $scope.seleccionTransporteCombustible = {};
            $scope.seleccionOrdenServicio;
            $scope.seleccionOrdenServicioLista = "";

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

            //variable de Id generado
            $scope.incId = 0;

            $http.get($scope.getUrlAllTripulanteCapitan)
                .then(function (response) {

                    $scope.listaTripulantesCapitanes = response.data;
                    $scope.capitan = $scope.listaTripulantesCapitanes[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });


            $http.get($scope.urlAllEstadosOrden)
                .then(function (response) {

                    $scope.listaEstadosOrden = response.data;
                    $scope.estado = $scope.listaEstadosOrden[0]._id;

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoMaterialPetreo)
                .then(function (response) {

                    $scope.listaTipoMaterialPetreo = response.data;
                    $scope.seleccionTipoMatPetreo = JSON.stringify($scope.listaTipoMaterialPetreo[0]);

                }, function errorCallback(response) {

                    console.log(response);
                });

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

                    $http.get($scope.urlAllOrdenServicioEstadoProcesoViaje)
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

    } else {
        window.location = "../login.html"
    }

    $scope.imprimirOrden = function () {
        
        console.log("hola");
        
        var doc = new jsPDF('p', 'mm', [297, 210]);

        var x = 25;
        var y = 25;


        //doc.addImage(img.onload(), 'PNG', x, y - 20, 165, 25);
        doc.rect(x, y + 10, 165, 10, 'S')
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("PERIODO: ", x + 5, y + 16);
        doc.setFontType("normal");
        doc.text($scope.observaciones, x + 20, y + 16);
        doc.setFontSize(10);
        doc.setFontType("bold");
        doc.text("LISTA DE ALUMNOS ", x + 60, y + 16);
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("NIVEL: ", x + 135, y + 16);
        doc.setFontType("normal");
        doc.text($scope.observacionMaquinista, x + 145, y + 16);

        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("PARALELO: ", x + 5, y + 25);
        doc.setFontType("normal");
        doc.text($scope.detalle, x + 23, y + 25);
        doc.setFontType("bold");
        doc.text("PROFESOR: ", x + 5, y + 30);
        doc.setFontType("normal");
        doc.text("JOSE ANDRES ROALES", x + 23, y + 30);

        doc.rect(x, y + 35, 165, 220, 'S')
        doc.line(x, y + 40, x + 165, y + 40)
        doc.line(x + 15, y + 35, x + 15, y + 255)
        doc.line(x + 50, y + 35, x + 50, y + 255)
        var aun = 45;
        for (var i = 0; i < 42; i++) {

            doc.line(x, y + aun, x + 165, y + aun)
            aun = aun + 5;

        }

        doc.setFontSize(10);
        doc.setFontType("bold");
        doc.text("Num", x + 4, y + 39);
        doc.text("Cedula", x + 25, y + 39);
        doc.text("Nombre Completo", x + 55, y + 39);

        doc.setFontSize(10);
        doc.setFontType("normal");
        var z = 44;
        var num = 1;
        //for (var i = 0; i < lista.length; i++) {

        //    doc.text(num.toString(), x + 6, y + z);
        //    doc.text(lista[i].CEDULA, x + 22, y + z);
        //    doc.text(lista[i].NOMBRE, x + 55, y + z);
        //    z = z + 5;
        //    num = num + 1;

        //}

        doc.save('Listado.pdf');

    }

    $scope.iniciarListas = function () {

        //atributos
        $scope.id = "";
        $scope.cliente = "";
        $scope.detalle = "";
        //$scope.embarcacion = "";
        //$scope.estado = "";
        $scope.fechaEmision = "";
        $scope.fechaEntrega = "";
        $scope.puertoEmbarque = "";
        //$scope.puertoDesembarque = "";
        $scope.orometroInicialM1 = "";
        $scope.orometroInicialM2 = "";
        $scope.orometroFinalM1 = "";
        $scope.orometroFinalM2 = "";
        $scope.horaSalida = "";
        $scope.horaArribo = "";
        $scope.cargaMaterialPetreo = "";
        $scope.cargaVehiculo = "";
        $scope.observaciones = "";
        //$scope.combustibleConsumo = "";
        //$scope.combustibleTransporte = "";
        $scope.observacionMaquinista = "";
        //$scope.contratoRecepcion = "";
        //$scope.capitan = "";

        // Variables horas
        $scope.horasSalida = "";
        $scope.minutosSalida = "";
        $scope.horasArribo = "";
        $scope.minutosArribo = "";

        //$scope.busqueda;
        $scope.listaMaterialPetreo = [];
        $scope.listaVehiculo = [];
        $scope.listaCombustibleConsumoSelect = [];
        $scope.listaCombustibleConsumoIngresar = [];
        $scope.listaCombustibleTransporteSelect = [];
        $scope.listaCombustibleTransporteIngresar = [];
        $scope.listaTransporteCombutible = [];
        $scope.listaConsumoCombustible = [];

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
                data: {
                    tipo_material: $scope.listaMatPetreoNueva[pos].tipo_material._id,
                    num_volquetas: $scope.listaMatPetreoNueva[pos].num_volquetas,
                    cant_total_m3: $scope.listaMatPetreoNueva[pos].cant_total_m3
                }


            }).then(function successCallback(response) {

                $scope.listMatPetreo.push(response.data._id.toString());


            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.modificarBaseMaterialPetreo = function (pos) {

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlMatPetreoModificar,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    tipo_material: $scope.listaMaterialPetreo[pos].tipo_material._id,
                    num_volquetas: $scope.listaMaterialPetreo[pos].num_volquetas,
                    cant_total_m3: $scope.listaMaterialPetreo[pos].cant_total_m3
                }

            }).then(function successCallback(response) {

                //console.log(response.data);

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
                data: {
                    descripcion_vehiculos: $scope.listaVehiNueva[pos].descripcion_vehiculos,
                    cantidad_vehiculos: $scope.listaVehiNueva[pos].cantidad_vehiculos,
                    matricula: $scope.listaVehiNueva[pos].matricula
                }


            }).then(function successCallback(response) {

                $scope.listaVehiculos.push(response.data._id.toString());


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
                data: {
                    descripcion_vehiculos: $scope.listaVehiculo[pos].descripcion_vehiculos,
                    cantidad_vehiculos: $scope.listaVehiculo[pos].cantidad_vehiculos,
                    matricula: $scope.listaVehiculo[pos].matricula
                }


            }).then(function successCallback(response) {

                //console.log(response.data);


            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.ingresoConsumoCombustible = function (pos) {

        var obj = {
            tipo_combustible: $scope.listaCombustibleConsumoIngresar[pos].tipo_combustible._id,
            cantidad_combustible: $scope.listaCombustibleConsumoIngresar[pos].cantidad_combustible
        };

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlCombustible, obj)
                .then(function (response) {

                    $scope.listaCombustibleConsumo.push(response.data._id.toString());

                }, function errorCallback(response) {

                    console.log(response);
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

                    //console.log(response.data);

                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.ingresoCombustibleTransporte = function (pos) {

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlCombustible,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    tipo_combustible: $scope.listaCombustibleTransporteIngresar[pos].tipo_combustible._id,
                    cantidad_combustible: $scope.listaCombustibleTransporteIngresar[pos].cantidad_combustible
                }


            }).then(function successCallback(response) {

                $scope.listaTransporteCombutible.push(response.data._id.toString());

            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.modificarBaseTransporteCombustible = function (pos) {

        var obj = {
            _id: $scope.listaCombustibleTransporte[pos]._id,
            tipo_combustible: $scope.listaCombustibleTransporte[pos].tipo_combustible._id,
            cantidad_combustible: $scope.listaCombustibleTransporte[pos].cantidad_combustible
        };

        var q = $q.defer()
        q.resolve(

            $http.post($scope.urlModificarCombustible, obj)
                .then(function (response) {


                }, function errorCallback(response) {

                    console.log(response);
                }));

        return q.promise
    }

    $scope.modificarOrden = function () {

        $scope.selecCli = JSON.parse($scope.seleccionCliente);
        var obj = {
            id: $scope.id,
            cliente: $scope.selecCli._id,
            detalle: $scope.detalle,
            embarcacion: $scope.embarcacion,
            estado: $scope.estado,
            fecha_emision: $scope.fechaEmision,
            fecha_entrega: $scope.fechaEntrega,
            puerto_embarque: $scope.puertoEmbarque,
            puerto_desembarque: $scope.puertoDesembarque,
            orometro_inicial_m1: $scope.orometroInicialM1,
            orometro_inicial_m2: $scope.orometroInicialM2,
            orometro_final_m1: $scope.orometroFinalM1,
            orometro_final_m2: $scope.orometroFinalM2,
            hora_salida: $scope.horaSalida,
            hora_arribo: $scope.horaArribo,
            carga_material_petreo: $scope.listMatPetreo,
            carga_vehiculo: $scope.listaVehiculos,
            observaciones: $scope.observaciones,
            combustible_consumo: $scope.listaCombustibleConsumo,
            combustible_transporte: $scope.listaTransporteCombutible,
            observacion_maquinaria: $scope.observacionMaquinista,
            contrato_recepcion: $scope.contratoRecepcion,
            capitan_embarcacion: $scope.capitan
        }

        if (validarCamposVacios(obj)) {
            var q = $q.defer()
            q.resolve(

                $http({
                    method: 'POST',
                    url: $scope.urlModificar,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: obj


                }).then(function successCallback(response) {

                    $scope.iniciar();
                    $.notify("Modificacion Exitosa", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                })

            );

            return q.promise
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarOrdenServicio = function () {
        
        if ($scope.seleccionOrdenServicioLista != "") {
            if ($scope.seleccionCliente != "") {
                
                if ($scope.horasSalida < 9) {
                    var h = "0" + $scope.horasSalida.toString();
                    if ($scope.minutosSalida < 9) {
                        var min = "0" + $scope.minutosSalida.toString();
                        $scope.horaSalida = h.toString() + ":" + min.toString();
                    }
                    if ($scope.minutosSalida > 9) {
                        var min = $scope.minutosSalida.toString();
                        $scope.horaSalida = h.toString() + ":" + min.toString();
                    }
                }
                if ($scope.horasSalida > 9) {
                    var h = $scope.horasSalida;
                    if ($scope.minutosSalida < 9) {
                        var min = "0" + $scope.minutosSalida.toString();
                        $scope.horaSalida = h.toString() + ":" + min.toString();
                    }
                    if ($scope.minutosSalida > 9) {
                        var min = $scope.minutosSalida.toString();
                        $scope.horaSalida = h.toString() + ":" + min.toString();
                    }
                }
                if ($scope.horasArribo < 9) {
                    var h = "0" + $scope.horasArribo.toString();
                    if ($scope.minutosArribo < 9) {
                        var min = "0" + $scope.minutosArribo.toString();
                        $scope.horaArribo = h.toString() + ":" + min.toString();
                    }
                    if ($scope.minutosArribo > 9) {
                        var min = $scope.minutosArribo.toString();
                        $scope.horaArribo = h.toString() + ":" + min.toString();
                    }
                }
                if ($scope.horasArribo > 9) {
                    var h = $scope.horasArribo.toString();
                    if ($scope.minutosArribo < 9) {
                        var min = "0" + $scope.minutosArribo.toString();
                        $scope.horaArribo = h.toString() + ":" + min.toString();
                    }
                    if ($scope.minutosArribo > 9) {
                        var min = $scope.minutosArribo.toString();
                        $scope.horaArribo = h.toString() + ":" + min.toString();
                    }
                }

                // material petreo
                var dimBaseMatPetModif = $scope.listaMaterialPetreo.length;
                for (var i = 0; i < dimBaseMatPetModif; i++) {

                    $scope.modificarBaseMaterialPetreo(i);
                    $scope.listMatPetreo.push($scope.listaMaterialPetreo[i]._id.toString());

                }

                var dimMatPet = $scope.listaMatPetreoNueva.length;
                for (var i = 0; i < dimMatPet; i++) {

                    $scope.ingresoMateriales(i);

                }

                // lista vehiculo
                var dimVeModif = $scope.listaVehiculo.length;
                for (var i = 0; i < dimVeModif; i++) {

                    $scope.modificarBaseVehiculos(i);

                }

                var dimVe = $scope.listaVehiNueva.length;
                for (var i = 0; i < dimVe; i++) {

                    $scope.ingresoVehiculos(i);

                }

                // combustible consumo
                var dimeCombusConsModif = $scope.listaConsumoCombustible.length;
                for (var i = 0; i < dimeCombusConsModif; i++) {

                    $scope.modificarBaseConsumoCombustible(i);
                    $scope.listaCombustibleConsumo.push($scope.listaConsumoCombustible[i]._id.toString());

                }

                var dimeCombusCons = $scope.listaCombustibleConsumoIngresar.length;
                for (var i = 0; i < dimeCombusCons; i++) {

                    $scope.ingresoConsumoCombustible(i);

                }

                // combustible transporte
                var dimeCombusTransModif = $scope.listaCombustibleTransporte.length;
                for (var i = 0; i < dimeCombusTransModif; i++) {

                    $scope.modificarBaseTransporteCombustible(i);
                    $scope.listaTransporteCombutible.push($scope.listaCombustibleTransporte[i]._id.toString());

                }

                var dimeCombusTrans = $scope.listaCombustibleTransporteIngresar.length;
                for (var i = 0; i < dimeCombusTrans; i++) {

                    $scope.ingresoCombustibleTransporte(i);

                }

                //ingreso orden
                $timeout(function () {

                    $scope.modificarOrden();

                }, 1500, false)
            } else {
                $.notify("Seleccione Cliente", "info");
            }
        } else {
            $.notify("Seleccionar una Orden", "info");
        }
    }

    $scope.cargarListasSeleccionOrdenServicio = function (orden) {

        var horaSal = $scope.selecOrdenServ.hora_salida.split(":");
        var horaArrib = $scope.selecOrdenServ.hora_arribo.split(":");

        $scope.horasSalida = parseInt(horaSal[0]);
        $scope.minutosSalida = parseInt(horaSal[1]);
        $scope.horasArribo = parseInt(horaArrib[0]);
        $scope.minutosArribo = parseInt(horaArrib[1]);

        var nMat = orden.carga_material_petreo.length;
        var listaMat = orden.carga_material_petreo;
        var h = 0;
        for (var i = 0; i < nMat; i++) {
            var mat = { id: listaMat[i] };
            $http.post($scope.urlMatPetreoBuscar, mat)
                .then(function (response) {

                    $scope.listaMaterialPetreo.push(response.data);

                    var tipMat = {
                        id: response.data.tipo_material
                    }
                    $http.post($scope.urlBuscarTipoMaterialPetreoId, tipMat)
                        .then(function (response) {

                            $scope.listaMaterialPetreo[h++].tipo_material = response.data;

                        }, function errorCallback(response) {

                            console.log(response);

                        });

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
    }

    $scope.buscarSeleccionListaOrdenServicio = function () {

        $scope.iniciarListas();
        $scope.selecOrdenServ = JSON.parse($scope.seleccionOrdenServicioLista);
        
        $scope.id = $scope.selecOrdenServ._id;
        $scope.seleccionCliente = JSON.stringify($scope.selecOrdenServ.cliente);
        $scope.fechaEmision = $scope.selecOrdenServ.fecha_emision;
        $scope.fechaEntrega = $scope.selecOrdenServ.fecha_entrega;
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
        $scope.capitan = $scope.selecOrdenServ.capitan_embarcacion;
        $scope.detalle = $scope.selecOrdenServ.detalle;
        $scope.estado = $scope.selecOrdenServ.estado;
        $scope.cargarListasSeleccionOrdenServicio($scope.selecOrdenServ);
    }

    $scope.cargarDatosMaterialPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "") {

            $scope.seleccionMatPetreoJS = JSON.parse($scope.seleccionMatPetreo);
            $scope.seleccionTipoMatPetreo = JSON.stringify($scope.seleccionMatPetreoJS.tipo_material);
            $scope.numVolquetas = $scope.seleccionMatPetreoJS.num_volquetas;
            $scope.cantTotalM3 = $scope.seleccionMatPetreoJS.cant_total_m3;

        }

    }

    $scope.cargarDatosVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);
            $scope.descripcionVehiculo = $scope.seleccionVehiculoJS.descripcion_vehiculos;
            $scope.cantidadVehiculo = $scope.seleccionVehiculoJS.cantidad_vehiculos;
            $scope.matricula = $scope.seleccionVehiculoJS.matricula;

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

    $scope.agregarListaMatPetreo = function () {


        if ($scope.seleccionTipoMatPetreo != "" && $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.seleccionTipoMatPetreo != undefined && $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {
            var obj = {
                _id: $scope.incId++,
                tipo_material: JSON.parse($scope.seleccionTipoMatPetreo),
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
            $scope.seleccionTipoMatPetreo != undefined && $scope.seleccionTipoMatPetreo != "" &&
            $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {

            $scope.seleccionMatPetreoJS = JSON.parse($scope.seleccionMatPetreo);
            $scope.selectTipMatPetreoJS = JSON.parse($scope.seleccionTipoMatPetreo);

            $scope.seleccionMatPetreoJS.tipo_material = $scope.selectTipMatPetreoJS;
            $scope.seleccionMatPetreoJS.num_volquetas = $scope.numVolquetas;
            $scope.seleccionMatPetreoJS.cant_total_m3 = $scope.cantTotalM3;

            var n = $scope.listaMaterialPetreo.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialPetreo[i]._id == $scope.seleccionMatPetreoJS._id) {

                    $scope.listaMaterialPetreo[i] = $scope.seleccionMatPetreoJS;
                    break;

                }
            }

            var n = $scope.listaMatPetreoNueva.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMatPetreoNueva[i]._id == $scope.seleccionMatPetreoJS._id) {

                    $scope.listaMatPetreoNueva[i] = $scope.seleccionMatPetreoJS;
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

                if ($scope.listaMaterialPetreo[i]._id == $scope.seleccionMatPetreoJS._id) {

                    $scope.listaMaterialPetreo.splice(i, 1);
                    break;

                }
            }

            var n1 = $scope.listaMatPetreoNueva.length;
            for (var i = 0; i < n1; i++) {

                if ($scope.listaMatPetreoNueva[i]._id == $scope.seleccionMatPetreoJS._id) {

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
                _id: $scope.incId++,
                cantidad_vehiculos: $scope.cantidadVehiculo,
                descripcion_vehiculos: $scope.descripcionVehiculo,
                matricula: $scope.matricula
            };

            $scope.listaVehiNueva.push(obj);
        }

        $scope.descripcionVehiculo = "";
        $scope.cantidadVehiculo = "";
        $scope.matricula = "";

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

            var n = $scope.listaVehiNueva.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaVehiNueva[i]._id == $scope.seleccionVehiculoJS._id) {

                    $scope.listaVehiNueva[i] = $scope.seleccionVehiculoJS;
                    break;

                }
            }

            $scope.seleccionMatPetreo = {};
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";
            $scope.matricula = "";

        }

    }

    $scope.quitarSeleccionVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);

            var n = $scope.listaVehiculo.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaVehiculo[i]._id == $scope.seleccionVehiculoJS._id) {

                    $scope.listaVehiculo.splice(i, 1);
                    break;

                }
            }

            var n = $scope.listaVehiNueva.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaVehiNueva[i]._id == $scope.seleccionVehiculoJS._id) {

                    $scope.listaVehiNueva.splice(i, 1);
                    break;

                }
            }

            $scope.seleccionVehiculo = {};
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";
            $scope.matricula = "";

        }

    }

    $scope.agregarListaConsumoCombustible = function () {

        if ($scope.combustibleConsumo != undefined && $scope.combustibleConsumo != "" &&
            $scope.cantidadConsumoCombustible != undefined && $scope.cantidadConsumoCombustible != "") {

            var n = $scope.listaTipoCombustibleConsumo.length;

            for (var i = 0; i < n; i++) {

                if ($scope.listaTipoCombustibleConsumo[i]._id == $scope.combustibleConsumo) {

                    var obj = {
                        _id: $scope.incId++,
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

                if ($scope.listaCombustibleConsumoIngresar[i]._id == $scope.seleccionCombustibleJS._id) {

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

                if ($scope.listaCombustibleConsumoIngresar[i]._id == $scope.seleccionConsumoCombustibleJS._id) {

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

            //$scope.seleccionConsumoCombustible = {};
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
                        _id: $scope.incId++,
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

                if ($scope.listaCombustibleTransporteIngresar[i]._id == $scope.seleccionCombustibleJS._id) {

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

                if ($scope.listaCombustibleTransporteIngresar[i]._id == $scope.seleccionTransporteCombustibleJS._id) {

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

            //$scope.seleccionTransporteCombustible = {};
            $scope.cantidadTransporteCombustible = "";

        }

    }

    $scope.redireccion = function () {
        window.location = "../menu.html"
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {
    if (obj.seleccionCliente == "" || obj.detalle == "" || obj.embarcacion == "" || obj.estado == "" || obj.fecha_emision == "" ||
        obj.puerto_embarque == "" || obj.puerto_desembarque == "" || obj.orometro_inicial_m1 == "" || obj.orometro_inicial_m2 == "" ||
        obj.orometro_final_m1 == "" || obj.orometro_final_m2 == "" || obj.hora_salida == "" || obj.hora_arribo == "" ||
        obj.combustible_consumo == "" || obj.contrato_recepcion == "" || obj.capitan_embarcacion == "") {
        return false;
    } else {
        return true;
    }
}