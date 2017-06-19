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
    this.getUrlAllPuerto = function () {
        return (url + 'getAllPuerto');
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

    // Buscar Todos los Tipo Mantenimiento
    this.getAllTipoMantenimiento = function () {
        return (url + 'getAllTipoMantenimiento');
    }
    ///////////////////////////////////////////////////////////////

    // Ingreso Utensilio
    this.getUrlIngresoUtensilio = function () {
        return (url + 'saveUtensilios');
    }

    // Modificar Utensilio
    this.getUrlModificarUtensilio = function () {
        return (url + 'updateUtensilios');
    }

    // Buscar Utensilio
    this.getUrlBuscarUtensilio = function () {
        return (url + 'getByIdUtensilios');
    }

    // Buscar todos Utensilio
    this.getUrlAllUtensilio = function () {
        return (url + 'getAllUtensilios');
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

    // Ingreso Producto
    this.getUrlIngresoProducto = function () {
        return (url + 'saveProductos');
    }

    // Modificar Producto
    this.getUrlModificarProducto = function () {
        return (url + 'updateProductos');
    }

    // Buscar Producto
    this.getUrlBuscarProducto = function () {
        return (url + 'getByIdProductos');
    }

    // Buscar todos los Producto
    this.getUrlALLProducto = function () {
        return (url + 'getAllProductos');
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

    // Ingreso Utensilios Seleccionados
    this.getUrlIngresoUtensiliosSeleccionados = function () {
        return (url + 'saveUtensiliosSeleccionados');
    }

    // Modificar Utensilios Seleccionados
    this.getUrlModificarUtensiliosSeleccionados = function () {
        return (url + 'updateUtensiliosSeleccionados');
    }

    // Buscar Utensilios Seleccionados
    this.getUrlBuscarUtensiliosSeleccionados = function () {
        return (url + 'getByIdUtensiliosSeleccionados');
    }

    // Buscar todos Utensilios Seleccionados
    this.getUrlAllUtensiliosSeleccionados = function () {
        return (url + 'getAllUtensiliosSeleccionados');
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
    this.getUrlAllDetalleMantenimiento = function () {
        return (url + 'getAllDetalleMantenimiento');
    }

}

app.factory("myProvider", function () {
    // console.log("factory function");
    return new ApiUrl();

});

