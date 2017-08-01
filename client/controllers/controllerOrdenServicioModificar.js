app.controller('ControllerOrdenServicioModificar', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.urlModificar;
    $scope.urlAllCliente;
    $scope.urlAllPuerto;
    $scope.urlAllCombustible;
    $scope.urlModificarCombustible;
    $scope.urlAllEmbarcacion;
    $scope.urlAllEmbarcacionBase;
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
    $scope.urlEstadoEmbarcacionDisponible;
    $scope.urlAllTipoTripulantesCapitanTimonel;
    $scope.urlAllTipoCombustibleTransporte;
    $scope.urlBuscarEstadoEmbarcacion;
    $scope.urlModificarEmbarcacionEstado;

    $scope.urlBuscarEmbarcacion;
    $scope.urlBuscarpuerto;

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
    $scope.numOrden = "";

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
    $scope.listaEmbarcacionTodas = []; // todas las embarcaiones de la base de datos
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

    // menus 
    $scope.buscar = true;
    $scope.showRequeridos = true;
    $scope.showMaterialVehiculo = false;
    $scope.showCombustibles = false;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.urlModificar = myProvider.getUrlModificarOrdenServicio();
            $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacionDisponibles();
            $scope.urlAllEmbarcacionBase = myProvider.getUrlAllEmbarcacion();
            $scope.urlAllCliente = myProvider.getUrlAllClientesActivos();
            $scope.urlAllMaterialPetreo = myProvider.getUrlAllMaterialPetreo()

            $scope.urlAllPuerto = myProvider.getUrlAllPuertoActivos();

            $scope.urlAllCombustible = myProvider.getUrlAllCombustible();
            $scope.urlCombustible = myProvider.getUrlIngresoCombustible();

            $scope.urlModificarCombustible = myProvider.getUrlModificarCombustible();
            $scope.urlBuscarCombustibleId = myProvider.getUrlBuscarCombustible();

            $scope.urlAllTripulante = myProvider.getUrlAllTripulante();

            $scope.urlAllContratoRecepcion = myProvider.getUrlAllContratoRecepcionActivos();

            $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustibleActivos();
            $scope.urlBuscarTipoCombustibleId = myProvider.getUrlBuscarTipoCombustible();

            $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();

            $scope.urlMatPetreo = myProvider.getUrlIngresoMaterialPetreo();
            $scope.urlMatPetreoModificar = myProvider.getUrlModificarMaterialPetreo();
            $scope.urlMatPetreoBuscar = myProvider.getUrlIdMaterialPetreo();

            $scope.urlVehiculo = myProvider.getUrlIngresoVehiculo();
            $scope.urlVehiculoModificar = myProvider.getUrlModificarVehiculo();
            $scope.urlVehiculoBuscar = myProvider.getUrlIdVehiculo();

            $scope.urlAllOrdenServicioEstadoProcesoViaje = myProvider.getUrlBuscarOrdenServicioEstadoViajeProceso();

            $scope.urlAllEstadosOrden = myProvider.getUrlAllEstadoOrden();

            $scope.urlBuscarTipoMaterialPetreoId = myProvider.getUrlBuscarTipoMaterialPetreo();
            $scope.urlAllTipoMaterialPetreo = myProvider.getUrlAllTipoMaterialPetreoActivos();


            $scope.urlEstadoEmbarcacionDisponible = myProvider.getUrlAllEstadoEmbarcacionDisponibleViaje();
            $scope.urlAllTipoTripulantesCapitanTimonel = myProvider.getUrlAllTipoTripulanteCapitanTimonel();
            $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();
            $scope.urlAllTipoCombustibleTransporte = myProvider.getUrlAllTipoCombustibleTransporte();

            $scope.urlBuscarEmbarcacion = myProvider.getUrlBuscarEmbarcacion();
            $scope.urlBuscarClienteId = myProvider.getUrlIdClientes();
            $scope.urlBuscarpuerto = myProvider.getUrlIdPuerto();
            $scope.urlBuscarEstadoEmbarcacion = myProvider.getUrlBuscarDescripcionEstadoEmbarcacion();
            $scope.urlModificarEmbarcacionEstado = myProvider.getUrlModificarEmbarcacionEstado();

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
            $scope.numOrden = "";

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

            // menus 
            $scope.buscar = true;
            $scope.showRequeridos = true;
            $scope.showMaterialVehiculo = false;
            $scope.showCombustibles = false;

            //variable de Id generado
            $scope.incId = 0;

            $http.get($scope.urlAllOrdenServicioEstadoProcesoViaje)
                .then(function (response) {

                    $scope.listaOrdenServicio = response.data;

                    var n = $scope.listaOrdenServicio.length;
                    var x = 0;
                    var y = 0;
                    var z = 0;
                    var k = 0;
                    for (var i = 0; i < n; i++) {

                        var cli = {
                            id: $scope.listaOrdenServicio[i].cliente
                        };
                        $http.post($scope.urlBuscarClienteId, cli)
                            .then(function (response) {

                                $scope.listaOrdenServicio[x++].cliente = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var emb = {
                            id: $scope.listaOrdenServicio[i].embarcacion
                        };
                        $http.post($scope.urlBuscarEmbarcacion, emb)
                            .then(function (response) {

                                $scope.listaOrdenServicio[y++].embarcacion = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var puertEmb = {
                            id: $scope.listaOrdenServicio[i].puerto_embarque
                        };
                        $http.post($scope.urlBuscarpuerto, puertEmb)
                            .then(function (response) {

                                $scope.listaOrdenServicio[z++].puerto_embarque = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                        var puertoDesem = {
                            id: $scope.listaOrdenServicio[i].puerto_desembarque
                        };
                        $http.post($scope.urlBuscarpuerto, puertoDesem)
                            .then(function (response) {

                                $scope.listaOrdenServicio[k++].puerto_desembarque = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                    }

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoTripulantesCapitanTimonel)
                .then(function (response) {

                    $scope.listaTipoCapitanTimonel = response.data;
                    var obj = {
                        idCapitan: $scope.listaTipoCapitanTimonel[0]._id,
                        idTimonel: $scope.listaTipoCapitanTimonel[1]._id
                    }

                    $http.post($scope.urlAllTripulantesCapitan, obj)
                        .then(function (response) {

                            $scope.listaTripulantesCapitanes = response.data;
                            $scope.capitan = $scope.listaTripulantesCapitanes[0]._id;

                        }, function errorCallback(response) {

                            console.log(response);
                        });


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

            $http.get($scope.urlAllTipoCombustibleTransporte)
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

            $http.get($scope.urlEstadoEmbarcacionDisponible)
                .then(function (response) {

                    $scope.listaEstadoEmbarcacionDisponible = response.data;

                    var obj = {
                        idDisponible: $scope.listaEstadoEmbarcacionDisponible[0]._id,
                        idViaje: $scope.listaEstadoEmbarcacionDisponible[1]._id
                    }

                    $http.post($scope.urlAllEmbarcacion, obj)
                        .then(function (response) {

                            $scope.listaEmbarcacion = response.data;
                            if ($scope.listaEmbarcacion > 0) {
                                $scope.embarcacion = $scope.listaEmbarcacion[0]._id;
                                $scope.capitan = $scope.listaEmbarcacion[0].capitan_embarcacion;
                            }

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                }, function errorCallback(response) {

                    console.log(response);
                });



            $http.get($scope.urlAllEmbarcacionBase)
                .then(function (response) {

                    $scope.listaEmbarcacionTodas = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });


            $http.get($scope.urlAllCliente)
                .then(function (response) {

                    $scope.listaCliente = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });

        }

    } else {
        window.location = "../login.html"
    }

    $scope.imprimirOrdenServicio = function () {

        var doc = new jsPDF('p', 'mm', [297, 210]);

        var x = 25;
        var y = 25;


        //doc.addImage(img.onload(), 'PNG', x, y - 20, 165, 25);
        doc.rect(x, y + 10, 165, 10, 'S')
        doc.setFontSize(8);
        //doc.setFontType("bold");
        //doc.text("PERIODO: ", x + 5, y + 16);
        //doc.setFontType("normal");
        //doc.text($scope.observaciones, x + 20, y + 16);
        doc.setFontSize(10);
        doc.setFontType("bold");
        doc.text("ORDEN DE SERVICIO ", x + 60, y + 16);

        // fecha
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("Fecha: ", x + 5, y + 25);
        doc.setFontType("normal");
        doc.text($scope.fechaEmision, x + 23, y + 25);

        var puertoEmb = $scope.buscarPuertoID($scope.puertoEmbarque); // buscar puerto.

        // Puerto embarque
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("P. Embarque: ", x + 82, y + 25);
        doc.setFontType("normal");
        doc.text(puertoEmb.descripcion_puerto, x + 110, y + 25);

        $scope.selecCli = JSON.parse($scope.seleccionCliente); // transfor un cliente a JSON.

        //numero de orden
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("No. Orden: ", x + 5, y + 30);
        doc.setFontType("normal");
        doc.text($scope.numOrden, x + 23, y + 30);

        var puertoDes = $scope.buscarPuertoID($scope.puertoDesembarque); // buscar puerto.

        //puerto desembarque
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("P. Desembarque: ", x + 82, y + 30);
        doc.setFontType("normal");
        doc.text(puertoDes.descripcion_puerto, x + 110, y + 30);

        // ruc cliente
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("RUC: ", x + 5, y + 35);
        doc.setFontType("normal");
        doc.text($scope.selecCli.ruc_cliente, x + 23, y + 35);
        console.log($scope.embarcacion);
        var embar = $scope.buscarEmbarcacion($scope.embarcacion); // buscar embarcacion.

        // Embarcación
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("embarcaci\u00F3n: ", x + 82, y + 35);
        doc.setFontType("normal");
        doc.text(embar.nombre_embarcacion, x + 110, y + 35);

        //nombres cliente
        doc.setFontType("bold");
        doc.text("Cliente: ", x + 5, y + 40);
        doc.setFontType("normal");
        doc.text($scope.selecCli.nombre_cliente, x + 23, y + 40);

        //hora salida
        doc.setFontType("bold");
        doc.text("Hora Salida: ", x + 82, y + 40);
        doc.setFontType("normal");
        doc.text($scope.convertirHora($scope.horasSalida, $scope.minutosSalida), x + 110, y + 40);

        // direccion cliente
        doc.setFontType("bold");
        doc.text("Direcci\u00F3n: ", x + 5, y + 45);
        doc.setFontType("normal");
        doc.text($scope.selecCli.direccion_cliente, x + 23, y + 45);

        doc.rect(x, y + 10, 165, 220, 'S')
        doc.rect(x, y + 50, 165, 180, 'S')
        doc.line(x, y + 50, x + 165, y + 50)
        doc.line(x + 15, y + 50, x + 15, y + 230)
        //doc.line(x + 50, y + 50, x + 50, y + 255)
        var aun = 56;
        for (var i = 0; i < 35; i++) {

            doc.line(x, y + aun, x + 165, y + aun)
            aun = aun + 5;

        }

        doc.setFontSize(10);
        doc.setFontType("bold");
        doc.text("CANT", x + 4, y + 55);
        doc.text("DETALLE", x + 80, y + 55);

        doc.setFontSize(8);
        doc.setFontType("normal");

        var dimMatPetreo = $scope.listaMaterialPetreo.length;
        var listMatPetreo = $scope.listaMaterialPetreo;
        var z = 60;
        var num = 0;
        for (var i = 0; i < dimMatPetreo; i++) {

            doc.text("Material petreo  tipo: " + listMatPetreo[i].tipo_material.descripcion_tipo_material, x + 18, y + z);
            doc.text(listMatPetreo[i].num_volquetas.toString(), x + 6, y + z);
            z = z + 5;
            num = num + 1;

        }

        var dimVehi = $scope.listaVehiculo.length;
        var listVehi = $scope.listaVehiculo;
        var z = 60 + (num * 5);
        for (var i = 0; i < dimVehi; i++) {

            doc.text("Veh\u00EDculo: " + listVehi[i].descripcion_vehiculos + " placa: " + listVehi[i].matricula, x + 18, y + z);
            doc.text(listVehi[i].cantidad_vehiculos.toString(), x + 6, y + z);
            z = z + 5;
            num = num + 1;

        }

        var dimCombTrans = $scope.listaCombustibleTransporte.length;
        var listTransporte = $scope.listaCombustibleTransporte;
        var z = 60 + (num * 5);
        for (var i = 0; i < dimCombTrans; i++) {

            doc.text(listTransporte[i].tipo_combustible.descripcion_tipo_combustible + " (galones)", x + 18, y + z);
            doc.text(listTransporte[i].cantidad_combustible.toString(), x + 6, y + z);
            z = z + 5;
            num = num + 1;

        }

        doc.save('ordenServicio.pdf');

    }

    $scope.imprimirOrdenConsumo = function () {

        var doc = new jsPDF('p', 'mm', [297, 210]);

        var x = 25;
        var y = 25;


        //doc.addImage(img.onload(), 'PNG', x, y - 20, 165, 25);
        doc.rect(x, y + 10, 165, 10, 'S')
        doc.setFontSize(8);
        //doc.setFontType("bold");
        //doc.text("PERIODO: ", x + 5, y + 16);
        //doc.setFontType("normal");
        //doc.text($scope.observaciones, x + 20, y + 16);
        doc.setFontSize(10);
        doc.setFontType("bold");
        doc.text("ORDEN DE CONSUMO ", x + 60, y + 16);

        // fecha
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("Fecha: ", x + 5, y + 25);
        doc.setFontType("normal");
        doc.text($scope.fechaEmision, x + 23, y + 25);

        var puertoEmb = $scope.buscarPuertoID($scope.puertoEmbarque); // buscar puerto.

        // Puerto embarque
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("P. Embarque: ", x + 82, y + 25);
        doc.setFontType("normal");
        doc.text(puertoEmb.descripcion_puerto, x + 110, y + 25);

        $scope.selecCli = JSON.parse($scope.seleccionCliente); // transfor un cliente a JSON.

        //numero de orden
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("No. Orden: ", x + 5, y + 30);
        doc.setFontType("normal");
        doc.text($scope.numOrden, x + 23, y + 30);

        var puertoDes = $scope.buscarPuertoID($scope.puertoDesembarque); // buscar puerto.

        //puerto desembarque
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("P. Desembarque: ", x + 82, y + 30);
        doc.setFontType("normal");
        doc.text(puertoDes.descripcion_puerto, x + 110, y + 30);

        // ruc cliente
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("RUC: ", x + 5, y + 35);
        doc.setFontType("normal");
        doc.text($scope.selecCli.ruc_cliente, x + 23, y + 35);

        var embar = $scope.buscarEmbarcacion($scope.embarcacion); // buscar embarcacion.

        // Embarcación
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text("embarcaci\u00F3n: ", x + 82, y + 35);
        doc.setFontType("normal");
        doc.text(embar.nombre_embarcacion, x + 110, y + 35);

        //nombres cliente
        doc.setFontType("bold");
        doc.text("Cliente: ", x + 5, y + 40);
        doc.setFontType("normal");
        doc.text($scope.selecCli.nombre_cliente, x + 23, y + 40);

        //hora salida
        doc.setFontType("bold");
        doc.text("Hora Salida: ", x + 82, y + 40);
        doc.setFontType("normal");
        doc.text($scope.convertirHora($scope.horasSalida, $scope.minutosSalida), x + 110, y + 40);

        // direccion cliente
        doc.setFontType("bold");
        doc.text("Direcci\u00F3n: ", x + 5, y + 45);
        doc.setFontType("normal");
        doc.text($scope.selecCli.direccion_cliente, x + 23, y + 45);

        doc.rect(x, y + 10, 165, 220, 'S')
        doc.rect(x, y + 50, 165, 180, 'S')
        doc.line(x, y + 50, x + 165, y + 50)
        doc.line(x + 15, y + 50, x + 15, y + 230)
        //doc.line(x + 50, y + 50, x + 50, y + 255)
        var aun = 56;
        for (var i = 0; i < 35; i++) {

            doc.line(x, y + aun, x + 165, y + aun)
            aun = aun + 5;

        }

        doc.setFontSize(10);
        doc.setFontType("bold");
        doc.text("CANT", x + 4, y + 55);
        doc.text("DETALLE", x + 80, y + 55);

        doc.setFontSize(8);
        doc.setFontType("normal");

        var dimMatPetreo = $scope.listaMaterialPetreo.length;
        var listMatPetreo = $scope.listaMaterialPetreo;
        var z = 60;
        var num = 0;

        var dimCombCons = $scope.listaConsumoCombustible.length;
        var listConsumo = $scope.listaConsumoCombustible;
        var z = 60 + (num * 5);
        for (var i = 0; i < dimCombCons; i++) {

            doc.text(listConsumo[i].tipo_combustible.descripcion_tipo_combustible + " (galones)", x + 18, y + z);
            doc.text(listConsumo[i].cantidad_combustible.toString(), x + 6, y + z);
            z = z + 5;
            num = num + 1;

        }

        doc.save('ordenConsumo.pdf');

    }

    $scope.buscarPuertoID = function (idPuerto) {
        var n = $scope.listaPuerto.length;
        for (var i = 0; i < n; i++) {

            if ($scope.listaPuerto[i]._id == idPuerto) {

                return ($scope.listaPuerto[i]);

            }

        }
    }

    $scope.buscarEmbarcacion = function (idEmbarcacion) {
        var n = $scope.listaEmbarcacionTodas.length;
        for (var i = 0; i < n; i++) {

            if ($scope.listaEmbarcacionTodas[i]._id == idEmbarcacion) {

                return ($scope.listaEmbarcacionTodas[i]);

            }

        }
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

    $scope.convertirHora = function (hora, minutos) {

        if (hora < 10) {
            var h = "0" + hora.toString();
            if (minutos < 10) {
                var min = "0" + minutos.toString();
                return (h.toString() + ":" + min.toString());
            }
            if (minutos > 9) {
                var min = minutos.toString();
                return (h.toString() + ":" + min.toString());
            }
        }
        if (hora > 9) {
            var h = hora;
            if (minutos < 10) {
                var min = "0" + minutos.toString();
                return (h.toString() + ":" + min.toString());
            }
            if ($scope.minutosSalida > 9) {
                var min = minutos.toString();
                return (h.toString() + ":" + min.toString());
            }
        }

    }

    $scope.prepararModificar = function () {

        $scope.selecCli = JSON.parse($scope.seleccionCliente);

        var obj = {
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
            horaSal: $scope.horasSalida.toString(),
            horaArrib: $scope.horasArribo.toString(),
            minSal: $scope.minutosSalida.toString(),
            minArrib: $scope.minutosArribo.toString(),
            carga_material_petreo: $scope.listMatPetreo,
            carga_vehiculo: $scope.listaVehi,
            observaciones: $scope.observaciones,
            combustible_consumo: $scope.listaCombustConsumo,
            combustible_transporte: $scope.listaCombustTransporte,
            observacion_maquinaria: $scope.observacionMaquinista,
            contrato_recepcion: $scope.contratoRecepcion,
            capitan_embarcacion: $scope.capitan,
            num_orden: $scope.numOrden
        }

        if (validarCamposVaciosAntes(obj)) {

            $scope.horaSalida = $scope.convertirHora($scope.horasSalida, $scope.minutosSalida);
            $scope.horaArribo = $scope.convertirHora($scope.horasArribo, $scope.minutosArribo);

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
        }
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
            capitan_embarcacion: $scope.capitan,
            num_orden: $scope.numOrden
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

                    if (response.data == "true") {

                        $scope.imprimirOrdenServicio();
                        //if ($scope.tipoUsuario == "administador")
                        $scope.imprimirOrdenConsumo();

                        var est = $scope.buscarEstadoOrden($scope.estado);

                        if (est.descripcion_estado == "entregado") {

                            var estEmb = {
                                descripcion: "disponible"
                            }

                            $http.post($scope.urlBuscarEstadoEmbarcacion, estEmb)
                                .then(function (response) {

                                    var emb = {
                                        id: $scope.embarcacion,
                                        estado: response.data._id
                                    };

                                    $http.post($scope.urlModificarEmbarcacionEstado, emb)
                                        .then(function (response) {

                                            $scope.iniciar();

                                            swal({
                                                title: "Modificaci\u00F3n Exitosa!",
                                                type: "success",
                                                timer: 1500,
                                                showConfirmButton: false
                                            });

                                        }, function errorCallback(response) {

                                            $.notify("Error!", "error");

                                        });

                                }, function errorCallback(response) {

                                    $.notify("Error!", "error");

                                });
                        } else {

                            if ($scope.selecOrdenServ.embarcacion._id == $scope.embarcacion) {

                                $scope.iniciar();
                                swal({
                                    title: "Modificaci\u00F3n Exitosa!",
                                    type: "success",
                                    timer: 1500,
                                    showConfirmButton: false
                                });

                            } else {

                                // Cambio de estado a la embarcacion que se encontraba ya asiganada en al orden.
                                var estEmbDisp = {
                                    descripcion: "disponible"
                                }

                                $http.post($scope.urlBuscarEstadoEmbarcacion, estEmbDisp)
                                    .then(function (response) {

                                        var emb = {
                                            id: $scope.selecOrdenServ.embarcacion._id,
                                            estado: response.data._id
                                        };

                                        $http.post($scope.urlModificarEmbarcacionEstado, emb)
                                            .then(function (response) {

                                                //vamos a ver
                                                //console.log(response.data);

                                            }, function errorCallback(response) {

                                                $.notify("Error!", "error");

                                            });

                                    }, function errorCallback(response) {

                                        $.notify("Error!", "error");

                                    });

                                // Cambio  de estado de la embaracaion nueva asignada a la orden.
                                var estEmbViaje = {
                                    descripcion: "viaje"
                                }

                                $http.post($scope.urlBuscarEstadoEmbarcacion, estEmbViaje)
                                    .then(function (response) {

                                        var emb = {
                                            id: $scope.embarcacion,
                                            estado: response.data._id
                                        };

                                        $http.post($scope.urlModificarEmbarcacionEstado, emb)
                                            .then(function (response) {

                                                //console.log(response.data);

                                                $scope.iniciar();

                                                swal({
                                                    title: "Modificaci\u00F3n Exitosa!",
                                                    type: "success",
                                                    timer: 1500,
                                                    showConfirmButton: false
                                                });

                                            }, function errorCallback(response) {

                                                $.notify("Error!", "error");

                                            });

                                    }, function errorCallback(response) {

                                        $.notify("Error!", "error");

                                    });

                            }

                        }
                    } else
                        $(document.getElementById("mensaje")).notify("ERROR!", { position: "right" });

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

        var est = $scope.buscarEstadoOrden($scope.estado);

        if (est.descripcion_estado == "entregado") {

            if ($scope.fechaEntrega != "" && $scope.fechaEntrega != null) {

                if ($scope.seleccionOrdenServicioLista != "") {

                    $scope.prepararModificar();

                } else {
                    $(document.getElementById("mensaje")).notify("Seleccione un Registro", { position: "left middle" });
                    swal({
                        title: "Seleccione un Registro!",
                        type: "error",
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            } else {
                $.notify("Campo fecha entrega vac\u00EDo", "error");
                $(document.getElementById("fecha1")).notify("Campo vac\u00EDo", { position: "right middle" });
                swal({
                    title: "Fecha entraga Vacio!",
                    type: "error",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        } else {

            if ($scope.seleccionOrdenServicioLista != "") {

                $scope.prepararModificar();

            } else {
                $(document.getElementById("mensaje")).notify("Seleccione un Registro", { position: "left middle" });
                swal({
                    title: "Seleccione un Registro!",
                    type: "error",
                    timer: 1500,
                    showConfirmButton: false
                });
            }

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
        $scope.selecOrdenServ = $scope.seleccionOrdenServicioLista;

        $scope.id = $scope.selecOrdenServ._id;
        $scope.seleccionCliente = JSON.stringify($scope.selecOrdenServ.cliente);
        $scope.fechaEmision = $scope.selecOrdenServ.fecha_emision;
        $scope.fechaEntrega = $scope.selecOrdenServ.fecha_entrega;
        $scope.embarcacion = $scope.selecOrdenServ.embarcacion._id;
        $scope.puertoEmbarque = $scope.selecOrdenServ.puerto_embarque._id;
        $scope.puertoDesembarque = $scope.selecOrdenServ.puerto_desembarque._id;
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
        $scope.numOrden = $scope.selecOrdenServ.num_orden;
        $scope.cargarListasSeleccionOrdenServicio($scope.selecOrdenServ);

    }

    $scope.buscarCapitan = function () {

        if ($scope.embarcacion != undefined && $scope.embarcacion != "") {

            var n = $scope.listaEmbarcacion.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaEmbarcacion[i]._id == $scope.embarcacion) {

                    $scope.capitan = $scope.listaEmbarcacion[i].capitan_embarcacion;
                    break;

                }

            }

        }
    }

    $scope.buscarEstadoOrden = function (idEstado) {

        var n = $scope.listaEstadosOrden.length;
        for (var i = 0; i < n; i++) {

            if ($scope.listaEstadosOrden[i]._id == idEstado) {

                return ($scope.listaEstadosOrden[i]);
                break;

            }

        }
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

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionOrdenServicioLista = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaOrdenServicio();

    }

}]);

// SOLO LETRAS
function soloLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo Letras", { position: "right" });
        return false;
    }
}

// PERMITE INGRESAR NUMEROS, LETRAS /-(),.
function numerosLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " (),/.-0123456789áéíóúabcdefghijklmnñopqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo N\u00FAmeros, Letras, /.,-()", { position: "right" });
        return false;
    }
}

// PERMITE INGRESAR NUMEROS, LETRAS -
function numerosLetrasSigno(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "-0123456789áéíóúabcdefghijklmnñopqrstuvwxyz\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1'";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo N\u00FAmeros, Letras, -", { position: "right" });
        return false;
    }
}

// SOLO SE INGRESAN NUMEROS
function soloNumerosCant(e, id) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = ",0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo Numeros", { position: "right" });
        return false;
    }

}

// SOLO SE INGRESAN NUMEROS
function soloNumeros(e, id) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Solo Numeros", { position: "right" });
        return false;
    }

}

// SOLO FORMATO DE FECHA
function validarFecha(e, id) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "/0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        $(document.getElementById(id)).notify("Formato: 01/12/2017", { position: "right" });
        return false;
    }

}

// VALIDAR CAMPOS VACIOS
function validarCamposVacios(obj) {
    if (obj.cliente == "" || obj.embarcacion == "" || obj.estado == "" || obj.fecha_emision == "" ||
        obj.puerto_embarque == "" || obj.puerto_desembarque == "" || obj.orometro_inicial_m1 == "" || obj.orometro_inicial_m2 == "" ||
        obj.orometro_final_m1 == "" || obj.orometro_final_m2 == "" || obj.hora_salida == "" || obj.hora_arribo == "" ||
        obj.contrato_recepcion == "" || obj.capitan_embarcacion == "") {

        if (obj.cliente == "") {
            $(document.getElementById("cliente")).notify("Seleccione Cliente", { position: "right" });
        }
        if (obj.fecha_emision == "") {
            $(document.getElementById("fecha")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_inicial_m1 == "") {
            $(document.getElementById("oromIni1")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_inicial_m2 == "") {
            $(document.getElementById("oroIni2")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_final_m1 == "") {
            $(document.getElementById("oromFin1")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_final_m2 == "") {
            $(document.getElementById("oromFin2")).notify("Campo Vac\u00EDo", { position: "right" });
        }

        return false;
    } else {
        return true;
    }
}

// VALIDAR CAMPOS VACIOS Antes 
function validarCamposVaciosAntes(obj) {

    if (obj.cliente == "" || obj.embarcacion == "" || obj.estado == "" || obj.fecha_emision == "" ||
        obj.puerto_embarque == "" || obj.puerto_desembarque == "" || obj.orometro_inicial_m1 == "" || obj.orometro_inicial_m2 == "" ||
        obj.orometro_final_m1 == "" || obj.orometro_final_m2 == "" || obj.horaSal == "" || obj.minSal == "" || obj.horaArrib == "" ||
        obj.minArrib == "" || obj.contrato_recepcion == "" || obj.capitan_embarcacion == "" ||
        obj.cliente == null || obj.embarcacion == null || obj.estado == null || obj.fecha_emision == null ||
        obj.puerto_embarque == null || obj.puerto_desembarque == null || obj.orometro_inicial_m1 == null || obj.orometro_inicial_m2 == null ||
        obj.orometro_final_m1 == null || obj.orometro_final_m2 == null || obj.horaSal == null || obj.minSal == null || obj.horaArrib == null ||
        obj.minArrib == null || obj.contrato_recepcion == null || obj.capitan_embarcacion == null ||
        obj.orometro_inicial_m1 >= obj.orometro_final_m1 || obj.orometro_inicial_m2 >= obj.orometro_final_m2 ||
        obj.orometro_inicial_m1 >= obj.orometro_final_m1 || obj.orometro_inicial_m2 >= obj.orometro_final_m2) {

        if (obj.cliente == "" || obj.cliente == undefined || obj.cliente == null) {
            $(document.getElementById("cliente")).notify("Seleccione Cliente", { position: "right" });
        }
        if (obj.fecha_emision == "" || obj.fecha_emision == null) {
            $(document.getElementById("fecha")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_inicial_m1 == "" || obj.orometro_inicial_m1 == null) {
            $(document.getElementById("oromIni1")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_inicial_m2 == "" || obj.orometro_inicial_m2 == null) {
            $(document.getElementById("oromIni2")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_final_m1 == "" || obj.orometro_final_m1 == null) {
            $(document.getElementById("oromFin1")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_final_m2 == "" || obj.orometro_final_m2 == null) {
            $(document.getElementById("oromFin2")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.horaSal == "" || obj.horaSal == null) {
            $(document.getElementById("horaSal")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.minSal == "" || obj.minSal == null) {
            $(document.getElementById("minSal")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.horaArrib == "" || obj.horaArrib == null) {
            $(document.getElementById("horaLleg")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.minArrib == "" || obj.minArrib == null) {
            $(document.getElementById("minLleg")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.orometro_inicial_m1 >= obj.orometro_final_m1) {
            $(document.getElementById("oromFin1")).notify("Debe ser mayor al Inicial", { position: "right" });
        }
        if (obj.orometro_inicial_m2 >= obj.orometro_final_m2) {
            $(document.getElementById("oromFin2")).notify("Debe ser mayor al Inicial", { position: "right" });
        }
        if (obj.orometro_inicial_m1 >= obj.orometro_final_m1) {
            $(document.getElementById("oromFin1")).notify("Debe ser mayor al Inicial", { position: "right" });
        }
        if (obj.orometro_inicial_m2 >= obj.orometro_final_m2) {
            $(document.getElementById("oromFin2")).notify("Debe ser mayor al Inicial", { position: "right" });
        }

        return false;
    } else {
        return true;
    }
}