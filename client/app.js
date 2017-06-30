var app = angular.module("myApp", [])
function ApiUrl() {

    var url;
    //url = "http://13.67.221.169:3001/api/";
    url = "http://localhost:3000/api/";

    ////ejemplo a seguir
    //this.getUser = function () {
    //    return 'http://13.67.221.169:3001/api/getAllPropietario';
    //}

    /////////////////////////////////////////////////////////////////////////

    // Ingreso Estado Orden Servicio
    this.getUrlIngresoEstadoOrden = function () {
        return (url + 'saveEstadoOrden');
    }

    // Modificar Estado Orden Servicio
    this.getUrlModificarEstadoOrden = function () {
        return (url + 'updateEstadoOrden');
    }

    // Buscar todos los Estado Orden Servicio
    this.getUrlAllEstadoOrden = function () {
        return (url + 'getAllEstadoOrden');
    }
    //////////////////////////////////////////////////////

    // Ingreso Tipo Material Petreo
    this.getUrlIngresoTipoMaterialPetreo = function () {
        return (url + 'saveTipoMaterialPetreo');
    }

    // Modificar Tipo Material Petreo
    this.getUrlModificarTipoMaterialPetreo = function () {
        return (url + 'updateTipoMaterialPetreo');
    }

    // Buscar Tipo Material Petreo
    this.getUrlBuscarTipoMaterialPetreo = function () {
        return (url + 'getByIdTipoMaterialPetreo');
    }

    // Buscar todos los Tipo Material Petreo
    this.getUrlAllTipoMaterialPetreo = function () {
        return (url + 'getAllTipoMaterialPetreo');
    }
    //////////////////////////////////////////////////////

    //Ingreso Pedido
    this.getUrlIngresoPedido = function () {
        return (url + 'savePedido');
    }

    // Modificar Pedido
    this.getUrlModificarPedido = function () {
        return (url + 'updatePedido');
    }

    // Buscar todos los Pedido
    this.getUrlAllPedido = function () {
        return (url + 'getAllPedido');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Orden de Servicio
    this.getUrlIngresoOrdenServicio = function () {
        return (url + 'saveOrdenServicio');
    }

    // Modificar Orden de Servicio
    this.getUrlModificarOrdenServicio = function () {
        return (url + 'updateOrdenServicio');
    }

    // Buscar Orden de Servicio
    this.getUrlBuscarOrdenServicio = function () {
        return (url + 'getByIdOrdenServicio');
    }

    // Buscar todos los Orden de Servicio
    this.getUrlAllOrdenServicio = function () {
        return (url + 'getAllOrdenServicio');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Contrato Recepcion
    this.getUrlIngresoContratoRecepcion = function () {
        return (url + 'saveContratoRecepcion');
    }

    // Modificar Contrato Recepcion
    this.getUrlModificarContratoRecepcion = function () {
        return (url + 'updateContratoRecepcion');
    }

    // Buscar todos los Contrato Recepcion
    this.getUrlAllContratoRecepcion = function () {
        return (url + 'getAllContratoRecepcion');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Embarcacion
    this.getUrlIngresoEmbarcacion = function () {
        return (url + 'saveEmbarcacion');
    }

    // Modificar Embarcacion
    this.getUrlModificarEmbarcacion = function () {
        return (url + 'updateEmbarcacion');
    }

    // Buscar Embarcacion
    this.getUrlBuscarEmbarcacion = function () {
        return (url + 'getByIdEmbarcacion');
    }

    // Buscar todos los Embarcacion
    this.getUrlAllEmbarcacion = function () {
        return (url + 'getAllEmbarcacion');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Mantenimiento
    this.getUrlIngresoMantenimiento = function () {
        return (url + 'saveMantenimiento');
    }

    // Modificar Mantenimiento
    this.getUrlModificarMantenimiento = function () {
        return (url + 'updateMantenimiento');
    }

    // Buscar todos los Mantenimiento
    this.getUrlAllMantenimiento = function () {
        return (url + 'getAllMantenimiento');
    }
    ///////////////////////////////////////////////////////////

    // Ingreso cliente
    this.getUrlIngresoCliente = function () {
        return (url + 'saveClientes');
    }

    // Modificar cliente
    this.getUrlModificarCliente = function () {
        return (url + 'updateClientes');
    }

    // Buscar Cliente
    this.getUrlIdClientes = function () {
        return (url + 'getByIdClientes');
    }

    // Buscar todos los Clientes
    this.getUrlAllClientes = function () {
        return (url + 'getAllClientes');
    }

    ///////////////////////////////////////////////////////

    // Ingreso Puerto
    this.getUrlIngresoPuerto = function () {

        return (url + 'savePuerto');
    }

    // Modificar Puerto
    this.getUrlModificarPuerto = function () {
        return (url + 'updatePuerto');
    }

    // Buscar todos los Puertos

    var aux = localStorage.getItem("id_token");
    if (aux == null) {
    } else {
        this.getUrlAllPuerto = function () {
            return (url + 'getAllPuerto');
        }
    }

    //////////////////////////////////////////////////////

    // Ingreso Tripulante
    this.getUrlIngresoTripulante = function () {
        return (url + 'saveTripulante');
    }

    // Modificar Tripulante
    this.getUrlModificarTripulante = function () {
        return (url + 'updateTripulante');
    }

    // Busacar por ID Tripulante
    this.getUrlBuscarTripulante = function () {
        return (url + 'getByIdTripulante');
    }

    // Busacar Tripulantes de tipo capitan y timonel
    this.getUrlAllTripulanteCapitan = function () {
        return (url + 'getAllTripulanteCapitanes');
    }

    // Buscar todos los Tripulante
    this.getUrlAllTripulante = function () {
        return (url + 'getAllTripulante');
    }

    //////////////////////////////////////////////////////

    // Ingreso tipo Tripulante
    this.getUrlIngresoTipoTripulante = function () {
        return (url + 'saveTipoTripulante');
    }

    // Modificar tipo Tripulante
    this.getUrlModificarTipoTripulante = function () {
        return (url + 'updateTipoTripulante');
    }

    // Busacar por ID tipo Tripulante
    this.getUrlBuscarTipoTripulante = function () {
        return (url + 'getByIdTipoTripulante');
    }

    // Buscar todos los tipo Tripulante
    this.getUrlAllTipoTripulante = function () {
        return (url + 'getAllTipoTripulante');
    }

    //////////////////////////////////////////////////////

    // Ingreso tipo Usuario
    this.getUrlIngresoTipoUsuario = function () {
        return (url + 'saveTipoUsuario');
    }

    // Modificar tipo Usuario
    this.getUrlModificarTipoUsuario = function () {
        return (url + 'updateTipoUsuario');
    }

    // Buscar por ID tipo Usuario
    this.getUrlBuscarTipoUsuario = function () {
        return (url + 'getByIdTipoUsuario');
    }

    // Busacar todos los tipo Usuario
    this.getUrlAllTipoUsuario = function () {
        return (url + 'getAllTipoUsuario');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Tipo Combustible
    this.getUrlIngresoTipoCombustible = function () {
        return (url + 'saveTipoCombustible');
    }

    // Modificar Tipo Combustible
    this.getUrlModificarTipoCombustible = function () {
        return (url + 'updateTipoCombustible');
    }

    // Buscar Tipo Combustible
    this.getUrlBuscarTipoCombustible = function () {
        return (url + 'getByIdTipoCombustible');
    }

    // Buscar todos los Tipo Combustible
    this.getUrlAllTipoCombustible = function () {
        return (url + 'getAllTipoCombustible');
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Tipo Embarcacion
    this.getUrlIngresoTipoEmbarcacion = function () {
        return (url + 'saveTipoEmbarcacion');
    }

    // Modificar Tipo Embarcacion
    this.getUrlModificarTipoEmbarcacion = function () {
        return (url + 'updateTipoEmbarcacion');
    }

    // Buscar todos los Tipo Embarcacion
    this.getUrlAllTipoEmbarcacion = function () {
        return (url + 'getAllTipoEmbarcacion');
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Tipo Mantenimiento
    this.getUrlIngresoTipoMantenimiento = function () {
        return (url + 'saveTipoMantenimiento');
    }

    // Modificar Tipo Mantenimiento
    this.getUrlModificarTipoMantenimiento = function () {
        return (url + 'updateTipoMantenimiento');
    }

    // Buscar Tipo Mantenimiento
    this.getBuscarTipoMantenimiento = function () {
        return (url + 'getByIdTipoMantenimiento');
    }

    // Buscar Todos los Tipo Mantenimiento
    this.getAllTipoMantenimiento = function () {
        return (url + 'getAllTipoMantenimiento');
    }
    ///////////////////////////////////////////////////////////////

    // Ingreso Materiales
    this.getUrlIngresoMateriales = function () {
        return (url + 'saveMateriales');
    }

    // Modificar Materiales
    this.getUrlModificarMateriales = function () {
        return (url + 'updateMateriales');
    }

    // Buscar Materiales
    this.getUrlBuscarMateriales = function () {
        return (url + 'getByIdMateriales');
    }

    // Buscar todos Materiales
    this.getUrlAllMateriales = function () {
        return (url + 'getAllMateriales');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Propietario
    this.getUrlIngresoPropietario = function () {
        return (url + 'savePropietario');
    }

    // Modificar Propietario
    this.getUrlModificarPropietario = function () {
        return (url + 'updatePropietario');
    }

    // Buscar todos los Propietario
    this.getUrlAllPropietario = function () {
        return (url + 'getAllPropietario');
    }
    //////////////////////////////////////////////////////////

    // Ingreso Tipo Alimentos
    this.getUrlIngresoTipoAlimentos = function () {
        return (url + 'saveTipoAlimentos');
    }

    // Modificar Tipo Alimentos
    this.getUrlModificarTipoAlimentos = function () {
        return (url + 'updateTipoAlimentos');
    }

    // Buscar Tipo Alimentos
    this.getUrlBuscarTipoAlimentos = function () {
        return (url + 'getByIdTipoAlimentos');
    }

    // Buscar todos los Tipo Alimentos
    this.getUrlALLTipoAlimentos = function () {
        return (url + 'getAllTipoAlimentos');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Alimentos
    this.getUrlIngresoAlimentos = function () {
        return (url + 'saveAlimentos');
    }

    // Modificar Alimentos
    this.getUrlModificarAlimentos = function () {
        return (url + 'updateAlimentos');
    }

    // Buscar Alimentos
    this.getUrlBuscarAlimentos = function () {
        return (url + 'getByIdAlimentos');
    }

    // Buscar todos los Alimentos
    this.getUrlALLAlimentos = function () {
        return (url + 'getAllAlimentos');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Material Petreo
    this.getUrlIngresoMaterialPetreo = function () {
        return (url + 'saveMaterialPetreo');
    }

    // Modificar Material Petreo
    this.getUrlModificarMaterialPetreo = function () {
        return (url + 'updateMaterialPetreo');
    }

    // Buscar Material Petreo
    this.getUrlIdMaterialPetreo = function () {
        return (url + 'getByIdMaterialPetreo');
    }

    // Buscar todos Material Petreo
    this.getUrlAllMaterialPetreo = function () {
        return (url + 'getAllMaterialPetreo');
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Vehiculo
    this.getUrlIngresoVehiculo = function () {
        return (url + 'saveVehiculos');
    }

    // Modificar Vehiculo
    this.getUrlModificarVehiculo = function () {
        return (url + 'updateVehiculos');
    }

    // Buscar  Vehiculo
    this.getUrlIdVehiculo = function () {
        return (url + 'getByIdVehiculos');
    }

    // Buscar todos Vehiculo
    this.getUrlAllVehiculo = function () {
        return (url + 'getAllVehiculos');
    }
    ///////////////////////////////////////////////////////////

    // Ingreso Usuario
    this.getUrlIngresoUsuario = function () {
        return (url + 'saveUsuario');
    }

    // Modificar Usuario
    this.getUrlModificarUsuario = function () {
        return (url + 'updateUsuario');
    }

    // Buscar Usuario
    this.getUrlBuscarUsuario = function () {
        return (url + 'getByIdUsuario');
    }

    // Buscar todos los Usuario
    this.getUrlAllUsuario = function () {
        return (url + 'getAllUsuario');
    }

    ////////////////////////////////////////////////////////////

    // Ingreso Combustible
    this.getUrlIngresoCombustible = function () {
        return (url + 'saveCombustible');
    }

    // Modificar Combustible
    this.getUrlModificarCombustible = function () {
        return (url + 'updateCombustible');
    }

    // Buscar Combustible
    this.getUrlBuscarCombustible = function () {
        return (url + 'getByIdCombustible');
    }

    // Buscar todos los Combustible
    this.getUrlAllCombustible = function () {
        return (url + 'getAllCombustible');
    }

    ///////////////////////////////////////////////////////////

    // Ingreso Materiales Seleccionados
    this.getUrlIngresoMaterialesSeleccionados = function () {
        return (url + 'saveMaterialesSeleccionados');
    }

    // Modificar Materiales Seleccionados
    this.getUrlModificarMaterialesSeleccionados = function () {
        return (url + 'updateMaterialesSeleccionados');
    }

    // Buscar Materiales Seleccionados
    this.getUrlBuscarMaterialesSeleccionados = function () {
        return (url + 'getByIdMaterialesSeleccionados');
    }

    // Buscar todos Materiales Seleccionados
    this.getUrlAllMaterialesSeleccionados = function () {
        return (url + 'getAllMaterialesSeleccionados');
    }

    ////////////////////////////////////////////////////////////////////////

    // Ingreso Detalle Mantenimiento
    this.getUrlIngresoDetalleMantenimiento = function () {
        return (url + 'saveDetalleMantenimiento');
    }

    // Modificar Detalle Mantenimiento
    this.getUrlModificarDetalleMantenimiento = function () {
        return (url + 'updateDetalleMantenimiento');
    }

    // buscar todos los Detalle Mantenimiento
    this.getUrlBuscarDetalleMantenimiento = function () {
        return (url + 'getByIdDetalleMantenimiento');
    }

    // buscar todos los Detalle Mantenimiento
    this.getUrlAllDetalleMantenimiento = function () {
        return (url + 'getAllDetalleMantenimiento');
    }

}

app.factory("myProvider", function () {

    return new ApiUrl();



});