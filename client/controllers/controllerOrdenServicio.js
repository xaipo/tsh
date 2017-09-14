app.controller('ControllerOrdenServicio', ['$scope', '$http', 'myProvider', "$q", "$timeout", function ($scope, $http, myProvider, $q, $timeout) {

    $scope.url;
    $scope.urlAllCliente;
    $scope.urlAllPuerto;
    $scope.urlAllCombustible;
    $scope.urlAllTipoCombustibleTransporte;
    $scope.urlAllEmbarcacion;
    $scope.urlAllTripulante;
    $scope.urlAllContratoRecepcion;
    $scope.urlAllVehiculo;
    $scope.urlAllTipoMaterialPetreo;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoTripulante;
    $scope.urlAllOrdenServicio;
    $scope.urlMatPetreo;
    $scope.urlVehiculo;
    $scope.urlCombustible;
    $scope.urlAllEstadosOrden;
    $scope.urlEstadoEmbarcacionDisponible;
    $scope.urlAllTipoTripulantesCapitanTimonel;
    $scope.urlBuscarEstadoEmbarcacion;
    $scope.urlBuscarNumeroOrdeServicio;
    $scope.urlModificarEmbarcacionEstado;

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

    // Variable de combustible
    $scope.cantidadConsumoCombustible = "";
    $scope.cantidadTransporteCombustible = "";

    $scope.selecCli = "";
    $scope.seleccionCliente = "";
    $scope.seleccionMatPetreo = {};
    $scope.seleccionTipoMatPetreo = {};
    $scope.seleccionVehiculo = {};
    $scope.seleccionConsumoCombustible = {};
    $scope.seleccionTransporteCombustible = {};
    $scope.seleccionConsumoTipoCombustible = {};
    $scope.seleccionTransporteTipoCombustible = {};

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
    $scope.listaTripulantesCapitanes = [];
    $scope.listaContratoRecepcion = [];
    $scope.listaTransporteCombutible = [];
    $scope.listaConsumoCombustible = [];
    $scope.listaOrdenServicio = [];
    $scope.listaTipoMaterialPetreo = [];
    $scope.listaEstadosOrden = [];

    // Lista de ingresos

    $scope.listMatPetreo = [];
    $scope.listaVehi = [];
    $scope.listaCombustConsumo = [];
    $scope.listaCombustTransporte = [];
    $scope.listaTrip = [];
    $scope.objMat = {};
    $scope.objVehi = {};

    // Dimenciones Listas
    $scope.dimVe = "";
    $scope.dimMatPet = "";
    $scope.dimTrip = "";

    // menus 
    $scope.showRequeridos = true;
    $scope.showMaterialVehiculo = false;
    $scope.showCombustibles = false;


    var aux = localStorage.getItem("id_token");
    if (aux != null) {

        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoOrdenServicio();
            $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacionDisponibles();
            $scope.urlAllCliente = myProvider.getUrlAllClientesActivos();
            $scope.urlAllVehiculo = myProvider.getUrlAllVehiculo();
            $scope.urlAllPuerto = myProvider.getUrlAllPuertoActivos();
            $scope.urlAllCombustible = myProvider.getUrlAllCombustible();
            $scope.urlAllTripulanteCapitan = myProvider.getUrlAllTripulanteCapitan();
            $scope.urlAllContratoRecepcion = myProvider.getUrlAllContratoRecepcionActivos();
            $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustibleActivos();
            $scope.urlAllTipoCombustibleTransporte = myProvider.getUrlAllTipoCombustibleTransporte();
            $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();
            $scope.urlMatPetreo = myProvider.getUrlIngresoMaterialPetreo();
            $scope.urlVehiculo = myProvider.getUrlIngresoVehiculo();
            $scope.urlCombustible = myProvider.getUrlIngresoCombustible();
            $scope.urlAllEstadosOrden = myProvider.getUrlAllEstadoOrden();
            $scope.urlAllTipoMaterialPetreo = myProvider.getUrlAllTipoMaterialPetreoActivos();
            $scope.urlEstadoEmbarcacionDisponible = myProvider.getUrlAllEstadoEmbarcacionDisponible();
            $scope.urlAllTipoTripulantesCapitanTimonel = myProvider.getUrlAllTipoTripulanteCapitanTimonel();
            $scope.urlAllTripulantesCapitan = myProvider.getUrlAllTripulanteCapitan();
            $scope.urlModificarEmbarcacionEstado = myProvider.getUrlModificarEmbarcacionEstado();
            $scope.urlBuscarEstadoEmbarcacion = myProvider.getUrlBuscarDescripcionEstadoEmbarcacion();
            $scope.urlBuscarNumeroOrdeServicio = myProvider.getUrlBuscarOrdenServicioNumeroOrden();


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
            $scope.orometroInicialM1 = 0;
            $scope.orometroInicialM2 = 0;
            $scope.orometroFinalM1 = 1;
            $scope.orometroFinalM2 = 1;
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

            // Variable de combustible
            $scope.cantidadConsumoCombustible = "";
            $scope.cantidadTransporteCombustible = "";

            $scope.selecCli = "";
            $scope.seleccionCliente = "";
            $scope.seleccionMatPetreo = {};
            $scope.seleccionTipoMatPetreo = {};
            $scope.seleccionVehiculo = {};
            $scope.seleccionConsumoCombustible = {};
            $scope.seleccionTransporteCombustible = {};
            $scope.seleccionConsumoTipoCombustible = {};
            $scope.seleccionTransporteTipoCombustible = {};

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
            $scope.listaTripulantesCapitanes = [];
            $scope.listaContratoRecepcion = [];
            $scope.listaTransporteCombutible = [];
            $scope.listaConsumoCombustible = [];
            $scope.listaOrdenServicio = [];
            $scope.listaTipoMaterialPetreo = [];
            $scope.listaEstadosOrden = [];

            // Lista de ingresos

            $scope.listMatPetreo = [];
            $scope.listaVehi = [];
            $scope.listaCombustConsumo = [];
            $scope.listaCombustTransporte = [];
            $scope.listaTrip = [];
            $scope.objMat = {};
            $scope.objVehi = {};

            // Dimenciones Listas
            $scope.dimVe = "";
            $scope.dimMatPet = "";
            $scope.dimTrip = "";

            // menus 
            $scope.showRequeridos = true;
            $scope.showMaterialVehiculo = false;
            $scope.showCombustibles = false;

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
                    $scope.seleccionConsumoTipoCombustible = JSON.stringify($scope.listaCombustibleConsumo[0]);

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllTipoCombustibleTransporte)
                .then(function (response) {

                    $scope.listaCombustibleTransporte = response.data;
                    $scope.seleccionTransporteTipoCombustible = JSON.stringify($scope.listaCombustibleTransporte[1]);

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
                        idDisponible: $scope.listaEstadoEmbarcacionDisponible[0]._id
                    }

                    $http.post($scope.urlAllEmbarcacion, obj)
                        .then(function (response) {

                            $scope.listaEmbarcacion = response.data;
                            $scope.embarcacion = $scope.listaEmbarcacion[0]._id;
                            $scope.capitan = $scope.listaEmbarcacion[0].capitan_embarcacion;


                        }, function errorCallback(response) {

                            console.log(response);
                        });

                }, function errorCallback(response) {

                    console.log(response);
                });

            $http.get($scope.urlAllCliente)
                .then(function (response) {

                    $scope.listaCliente = response.data;
                    //$scope.seleccionCliente = JSON.stringify($scope.listaCliente[0]);

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

        var dimCombTrans = $scope.listaCombustibleTransporteSelect.length;
        var listTransporte = $scope.listaCombustibleTransporteSelect;
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

        var dimCombCons = $scope.listaCombustibleConsumoSelect.length;
        var listConsumo = $scope.listaCombustibleConsumoSelect;
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
        var n = $scope.listaEmbarcacion.length;
        for (var i = 0; i < n; i++) {

            if ($scope.listaEmbarcacion[i]._id == idEmbarcacion) {

                return ($scope.listaEmbarcacion[i]);

            }

        }
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
                    tipo_material: $scope.listaMaterialPetreo[pos].tipo_material._id,
                    num_volquetas: $scope.listaMaterialPetreo[pos].num_volquetas,
                    cant_total_m3: $scope.listaMaterialPetreo[pos].cant_total_m3
                }


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

    $scope.ingresoCombustibleComsumo = function (pos) {

        var q = $q.defer()
        q.resolve(

            $http({
                method: 'POST',
                url: $scope.urlCombustible,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    tipo_combustible: $scope.listaCombustibleConsumoSelect[pos].tipo_combustible._id,
                    cantidad_combustible: $scope.listaCombustibleConsumoSelect[pos].cantidad_combustible
                }


            }).then(function successCallback(response) {

                $scope.listaCombustConsumo.push(response.data._id.toString());

            }, function errorCallback(response) {


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
                    tipo_combustible: $scope.listaCombustibleTransporteSelect[pos].tipo_combustible._id,
                    cantidad_combustible: $scope.listaCombustibleTransporteSelect[pos].cantidad_combustible
                }


            }).then(function successCallback(response) {

                $scope.listaCombustTransporte.push(response.data._id.toString());

            }, function errorCallback(response) {


            }));

        return q.promise
    }

    $scope.ingresoOrden = function () {

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
            hora_salida: $scope.horaSalida,
            hora_arribo: $scope.horaArribo,
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

        if (validarCamposVacios(obj)) {
            var q = $q.defer()

            q.resolve(

                $http({
                    method: 'POST',
                    url: $scope.url,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: obj


                }).then(function successCallback(response) {

                    if (response.data == "true") {

                        $scope.imprimirOrdenServicio();

                        //if ($scope.tipoUsuario == "administador")
                        $scope.imprimirOrdenConsumo();


                        var estEmb = {
                            descripcion: "viaje"
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
                                            title: "Ingreso Exitoso!",
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
                    } else
                        $.notify("ERROR!", { position: "right" });

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                })

            );

            return q.promise
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.ingresoOrdenServicio = function () {

        if ($scope.seleccionCliente != "") {
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

            var numOrden = {
                numero_orden: $scope.numOrden
            }

            $http.post($scope.urlBuscarNumeroOrdeServicio, numOrden)
                .then(function (response) {
                    if (response.data == "" || response.data == undefined) {
                        if (validarCamposVaciosAntes(obj)) {
                            $scope.horaSalida = $scope.convertirHora($scope.horasSalida, $scope.minutosSalida);
                            $scope.horaArribo = $scope.convertirHora($scope.horasArribo, $scope.minutosArribo);

                            var dimMatPet = $scope.listaMaterialPetreo.length;

                            for (var i = 0; i < dimMatPet; i++) {

                                $scope.ingresoMateriales(i);

                            }

                            var dimVe = $scope.listaVehiculo.length;

                            for (var i = 0; i < dimVe; i++) {

                                $scope.ingresoVehiculos(i);

                            }

                            var dimeCombusCons = $scope.listaCombustibleConsumoSelect.length;

                            for (var i = 0; i < dimeCombusCons; i++) {

                                $scope.ingresoCombustibleComsumo(i);

                            }

                            var dimeCombusTrans = $scope.listaCombustibleTransporteSelect.length;

                            for (var i = 0; i < dimeCombusTrans; i++) {

                                $scope.ingresoCombustibleTransporte(i);

                            }

                            $timeout(function () {

                                $scope.ingresoOrden();

                            }, 1500, false)
                        }
                    } else {
                        swal({
                            title: "Numero de orden ya existe!",
                            type: "error",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    }
                }, function errorCallback(response) {

                    console.log(response);

                });
        } else {
            swal({
                title: "Seleccione un Cliente!",
                type: "error",
                timer: 1500,
                showConfirmButton: false
            });
        }
    }

    $scope.buscarSeleccionListaCliente = function () {

        if ($scope.seleccionCliente != undefined && $scope.seleccionCliente != "" && $scope.seleccionCliente != {}) {

            $scope.selecCli = JSON.parse($scope.seleccionCliente);


        }
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

    $scope.cargarSeleccionListaMatPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "") {

            $scope.seleccionMatPetreooJS = JSON.parse($scope.seleccionMatPetreo);
            var n = $scope.listaMaterialPetreo.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialPetreo[i].tipo_material._id == $scope.seleccionMatPetreooJS.tipo_material._id) {
                    $scope.seleccionTipoMatPetreo = JSON.stringify($scope.seleccionMatPetreooJS.tipo_material);
                    $scope.numVolquetas = $scope.seleccionMatPetreooJS.num_volquetas;
                    $scope.cantTotalM3 = $scope.seleccionMatPetreooJS.cant_total_m3;
                }
            }
        }
    }

    $scope.agregarListaMatPetreo = function () {

        if ($scope.seleccionTipoMatPetreo != "" && $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.seleccionTipoMatPetreo != undefined && $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {

            $scope.seleccionTipoMatPetreoJS = JSON.parse($scope.seleccionTipoMatPetreo);
            var obj = {
                tipo_material: $scope.seleccionTipoMatPetreoJS,
                num_volquetas: $scope.numVolquetas,
                cant_total_m3: $scope.cantTotalM3
            };

            $scope.listaMaterialPetreo.push(obj);
            //$scope.seleccionTipoMatPetreo = JSON.stringify($scope.listaTipoMaterialPetreo[0]);
            $scope.numVolquetas = "";
            $scope.cantTotalM3 = "";
        }
    }

    $scope.modificarListaMatPetreo = function () {

        if ($scope.seleccionMatPetreo != undefined && $scope.seleccionMatPetreo != "" &&
            $scope.seleccionTipoMatPetreo != "" && $scope.numVolquetas != "" && $scope.cantTotalM3 != "" &&
            $scope.seleccionTipoMatPetreo != undefined && $scope.numVolquetas != undefined && $scope.cantTotalM3 != undefined) {

            $scope.seleccionMatPetreooJS = JSON.parse($scope.seleccionMatPetreo);
            $scope.seleccionTipoMatPetreoJS = JSON.parse($scope.seleccionTipoMatPetreo);
            var n = $scope.listaMaterialPetreo.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaMaterialPetreo[i].tipo_material._id == $scope.seleccionMatPetreooJS.tipo_material._id) {
                    $scope.listaMaterialPetreo[i].tipo_material = $scope.seleccionTipoMatPetreoJS;
                    $scope.listaMaterialPetreo[i].num_volquetas = $scope.numVolquetas;
                    $scope.listaMaterialPetreo[i].cant_total_m3 = $scope.cantTotalM3;
                }
            }
            //$scope.seleccionTipoMatPetreo = JSON.stringify($scope.listaTipoMaterialPetreo[0]);
            $scope.numVolquetas = "";
            $scope.cantTotalM3 = "";
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
            //$scope.seleccionTipoMatPetreo = JSON.stringify($scope.listaTipoMaterialPetreo[0]);
            $scope.numVolquetas = "";
            $scope.cantTotalM3 = "";
        }
    }

    $scope.cargarSeleccionListaVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);
            $scope.descripcionVehiculo = $scope.seleccionVehiculoJS.descripcion_vehiculos;
            $scope.cantidadVehiculo = $scope.seleccionVehiculoJS.cantidad_vehiculos;
            $scope.matricula = $scope.seleccionVehiculoJS.matricula;
        }
    }

    $scope.agregarListaVehiculo = function () {

        if ($scope.cantidadVehiculo != "" && $scope.descripcionVehiculo != "" &&
            $scope.cantidadVehiculo != undefined && $scope.descripcionVehiculo != undefined &&
            $scope.matricula != undefined && $scope.matricula != "") {

            var obj = {
                descripcion_vehiculos: $scope.descripcionVehiculo,
                cantidad_vehiculos: $scope.cantidadVehiculo,
                matricula: $scope.matricula
            };

            $scope.listaVehiculo.push(obj);
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";
            $scope.matricula = "";
        }
    }

    $scope.modificarListaVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "" &&
            $scope.cantidadVehiculo != "" && $scope.descripcionVehiculo != "" &&
            $scope.cantidadVehiculo != undefined && $scope.descripcionVehiculo != undefined &&
            $scope.matricula != undefined && $scope.matricula != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);
            var n = $scope.listaVehiculo.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaVehiculo[i].matricula == $scope.seleccionVehiculoJS.matricula) {
                    $scope.listaVehiculo[i].descripcion_vehiculos = $scope.descripcionVehiculo;
                    $scope.listaVehiculo[i].cantidad_vehiculos = $scope.cantidadVehiculo;
                    $scope.listaVehiculo[i].matricula = $scope.matricula;
                }
            }
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";
            $scope.matricula = "";
        }
    }

    $scope.quitarSeleccionVehiculo = function () {

        if ($scope.seleccionVehiculo != undefined && $scope.seleccionVehiculo != "") {

            $scope.seleccionVehiculoJS = JSON.parse($scope.seleccionVehiculo);

            var n = $scope.listaVehiculo.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaVehiculo[i].matricula == $scope.seleccionVehiculoJS.matricula) {
                    $scope.listaVehiculo.splice(i, 1);
                    $scope.seleccionVehiculo = {};
                    break;
                }
            }
            $scope.descripcionVehiculo = "";
            $scope.cantidadVehiculo = "";
            $scope.matricula = "";
        }

    }

    $scope.cargarSeleccionListaConsumoCombustible = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "") {

            $scope.seleccionConsumoCombustibleJS = JSON.parse($scope.seleccionConsumoCombustible);
            $scope.seleccionConsumoTipoCombustible = JSON.stringify($scope.seleccionConsumoCombustibleJS.tipo_combustible);
            $scope.cantidadConsumoCombustible = $scope.seleccionConsumoCombustibleJS.cantidad_combustible;
        }
    }

    $scope.agregarListaConsumoCombustible = function () {

        if ($scope.seleccionConsumoTipoCombustible != undefined && $scope.seleccionConsumoTipoCombustible != "" &&
            $scope.cantidadConsumoCombustible != undefined && $scope.cantidadConsumoCombustible != "") {

            $scope.seleccionConsumoTipoCombustibleJS = JSON.parse($scope.seleccionConsumoTipoCombustible);
            var obj = {
                tipo_combustible: $scope.seleccionConsumoTipoCombustibleJS,
                cantidad_combustible: $scope.cantidadConsumoCombustible
            }

            $scope.listaCombustibleConsumoSelect.push(obj);
            $scope.combustibleConsumo = {};
            $scope.cantidadConsumoCombustible = "";

        }

    }

    $scope.modificarListaConsumoCombustible = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "" &&
            $scope.seleccionConsumoTipoCombustible != undefined && $scope.seleccionConsumoTipoCombustible != "" &&
            $scope.cantidadConsumoCombustible != undefined && $scope.cantidadConsumoCombustible != "") {

            $scope.seleccionConsumoCombustibleJS = JSON.parse($scope.seleccionConsumoCombustible);
            $scope.seleccionConsumoTipoCombustibleJS = JSON.parse($scope.seleccionConsumoTipoCombustible);
            var n = $scope.listaCombustibleConsumoSelect.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaCombustibleConsumoSelect[i].tipo_combustible._id == $scope.seleccionConsumoCombustibleJS.tipo_combustible._id) {
                    $scope.listaCombustibleConsumoSelect[i].tipo_combustible = $scope.seleccionConsumoTipoCombustibleJS;
                    $scope.listaCombustibleConsumoSelect[i].cantidad_combustible = $scope.cantidadConsumoCombustible;
                }
            }
            $scope.cantidadConsumoCombustible = "";
        }
    }

    $scope.quitarSeleccionConsumoCombustible = function () {

        if ($scope.seleccionConsumoCombustible != undefined && $scope.seleccionConsumoCombustible != "") {

            $scope.seleccionConsumoCombustibleJS = JSON.parse($scope.seleccionConsumoCombustible);
            $scope.listaCombustibleConsumo.push($scope.seleccionConsumoCombustibleJS.tipo_combustible);

            var n = $scope.listaCombustibleConsumoSelect.length;
            for (var i = 0; i < n; i++) {

                if ($scope.listaCombustibleConsumoSelect[i].tipo_combustible._id == $scope.seleccionConsumoCombustibleJS.tipo_combustible._id) {
                    $scope.listaCombustibleConsumoSelect.splice(i, 1);
                    $scope.seleccionConsumoCombustible = {};
                    break;
                }
            }
            $scope.cantidadConsumoCombustible = "";
        }

    }

    $scope.cargarSeleccionListaTransporteCombustible = function () {

        if ($scope.seleccionTransporteCombustible != undefined && $scope.seleccionTransporteCombustible != "") {

            $scope.seleccionTransporteCombustibleJS = JSON.parse($scope.seleccionTransporteCombustible);
            $scope.seleccionTransporteTipoCombustible = JSON.stringify($scope.seleccionTransporteCombustibleJS.tipo_combustible);
            $scope.cantidadTransporteCombustible = $scope.seleccionTransporteCombustibleJS.cantidad_combustible;
        }
    }

    $scope.agregarListaTransporteCombustible = function () {

        if ($scope.seleccionTransporteTipoCombustible != undefined && $scope.seleccionTransporteTipoCombustible != "" &&
            $scope.cantidadTransporteCombustible != undefined && $scope.cantidadTransporteCombustible != "") {

            $scope.seleccionTransporteTipoCombustibleJS = JSON.parse($scope.seleccionTransporteTipoCombustible);
            var obj = {
                tipo_combustible: $scope.seleccionTransporteTipoCombustibleJS,
                cantidad_combustible: $scope.cantidadTransporteCombustible
            }

            $scope.listaCombustibleTransporteSelect.push(obj);
            $scope.cantidadTransporteCombustible = "";

        }

    }

    $scope.modificarListaTransporteCombustible = function () {

        if ($scope.seleccionTransporteCombustible != undefined && $scope.seleccionTransporteCombustible != "" &&
            $scope.seleccionTransporteTipoCombustible != undefined && $scope.seleccionTransporteTipoCombustible != "" &&
            $scope.cantidadTransporteCombustible != undefined && $scope.cantidadTransporteCombustible != "") {

            $scope.seleccionTransporteCombustibleJS = JSON.parse($scope.seleccionTransporteCombustible);
            $scope.seleccionTransporteTipoCombustibleJS = JSON.parse($scope.seleccionTransporteTipoCombustible);
            var n = $scope.listaCombustibleTransporteSelect.length;
            for (var i = 0; i < n; i++) {
                if ($scope.listaCombustibleTransporteSelect[i].tipo_combustible._id == $scope.seleccionTransporteCombustibleJS.tipo_combustible._id) {
                    $scope.listaCombustibleTransporteSelect[i].tipo_combustible = $scope.seleccionTransporteTipoCombustibleJS;
                    $scope.listaCombustibleTransporteSelect[i].cantidad_combustible = $scope.cantidadTransporteCombustible;
                }
            }
            $scope.cantidadConsumoCombustible = "";
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

    $scope.redireccion = function () {
        window.location = "../menu.html"
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

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
    letras = " (),/.-0123456789áéíóúabcdefghijklmnñopqrstuvwxyz\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1'";
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
        obj.hora_salida == "" || obj.hora_arribo == "" || obj.contrato_recepcion == "" || obj.capitan_embarcacion == "") {

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

        return false;
    } else {
        return true;
    }
}

// VALIDAR CAMPOS VACIOS Antes 
function validarCamposVaciosAntes(obj) {

    if (obj.cliente == "" || obj.embarcacion == "" || obj.estado == "" || obj.fecha_emision == "" || obj.puerto_embarque == "" ||
        obj.puerto_desembarque == "" || obj.orometro_inicial_m1 == "" || obj.orometro_inicial_m2 == "" || /*obj.orometro_final_m1 == "" || obj.orometro_final_m2 == "" ||*/
        obj.horaSal == "" || obj.minSal == "" || obj.horaArrib == "" || obj.minArrib == "" ||
        obj.contrato_recepcion == "" || obj.capitan_embarcacion == "" || /*obj.orometro_inicial_m1 >= obj.orometro_final_m1 ||*/
        /*obj.orometro_inicial_m2 >= obj.orometro_final_m2 ||*/ obj.num_orden == "" ||
        obj.cliente == null || obj.embarcacion == null || obj.estado == null || obj.fecha_emision == null || obj.puerto_embarque == null ||
        obj.puerto_desembarque == null || obj.orometro_inicial_m1 == null || obj.orometro_inicial_m2 == null || /*obj.orometro_final_m1 == null || obj.orometro_final_m2 == null ||*/
        obj.horaSal == null || obj.minSal == null || obj.horaArrib == null || obj.minArrib == null ||
        obj.contrato_recepcion == null || obj.capitan_embarcacion == null || /*obj.orometro_inicial_m1 >= obj.orometro_final_m1 ||*/
        /*obj.orometro_inicial_m2 >= obj.orometro_final_m2 ||*/ obj.num_orden == "") {

        if (obj.cliente == "" || obj.cliente == undefined) {
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
        if (obj.num_orden == "" || obj.num_orden == null) {
            $(document.getElementById("numOrden")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        //if (obj.orometro_final_m1 == "") {
        //    $(document.getElementById("oromFin1")).notify("Campo Vac\u00EDo", { position: "right" });
        //}
        //if (obj.orometro_final_m2 == "") {
        //    $(document.getElementById("oromFin2")).notify("Campo Vac\u00EDo", { position: "right" });
        //}
        //if (obj.orometro_inicial_m1 >= obj.orometro_final_m1 && obj.orometro_inicial_m1 != "") {
        //    $(document.getElementById("oromFin1")).notify("Debe ser mayor al Inicial", { position: "right" });
        //}
        //if (obj.orometro_inicial_m2 >= obj.orometro_final_m2 && obj.orometro_inicial_m2 != "") {
        //    $(document.getElementById("oromFin2")).notify("Debe ser mayor al Inicial", { position: "right" });
        //}

        return false;
    } else {
        if (obj.orometro_final_m1 != "" || obj.orometro_final_m2 != "" || obj.orometro_final_m1 != null || obj.orometro_final_m2 != null ||
            obj.orometro_final_m1 != undefined || obj.orometro_final_m2 != undefined) {

            if (obj.orometro_inicial_m1 >= obj.orometro_final_m1 || obj.orometro_inicial_m2 >= obj.orometro_final_m2) {

                if (obj.orometro_inicial_m1 >= obj.orometro_final_m1 && obj.orometro_final_m1 != "" && obj.orometro_final_m1 != null) {
                    $(document.getElementById("oromFin1")).notify("Debe ser mayor al Inicial", { position: "right" });
                    return false;
                }

                if (obj.orometro_inicial_m2 >= obj.orometro_final_m2 && obj.orometro_final_m2 != "" && obj.orometro_final_m2 != null) {
                    $(document.getElementById("oromFin2")).notify("Debe ser mayor al Inicial", { position: "right" });
                    return false;
                }

                return true;

            } else
                return true;
        } else
            return true;
    }

}