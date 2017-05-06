var app = angular.module("myApp", [])
function ApiUrl() {

    ////ejemplo a seguir
    //this.getUser = function () {
    //    return 'http://13.67.221.169:3001/api/getAllPropietario';
    //}

    // Ingreso cliente
    this.getUrlIngresoCliente = function () {
        return 'http://localhost:3000/api/saveClientes';
    }

    // Modificar cliente
    this.getUrlModificarCliente = function () {
        return 'http://localhost:3000/api/updateClientes';
    }

    // Buscar todos los Clientes
    this.getUrlAllClientes = function () {
        return 'http://localhost:3000/api/getAllClientes';
    }
    ///////////////////////////////////////////////////////

    // Ingreso Puerto
    this.getUrlIngresoPuerto = function () {
        return 'http://localhost:3000/api/savePuerto';
    }

    // Modificar Puerto
    this.getUrlModificarPuerto = function () {
        return 'http://localhost:3000/api/updatePuerto';
    }

    // Buscar todos los Puertos
    this.getUrlAllPuerto = function () {
        return 'http://localhost:3000/api/getAllPuerto';
    }
    //////////////////////////////////////////////////////

    // Ingreso tipo Usuario
    this.getUrlIngresoTipoUsuario = function () {
        return 'http://localhost:3000/api/saveTipoUsuario';
    }

    // Modificar tipo Usuario
    this.getUrlModificarTipoUsuario = function () {
        return 'http://localhost:3000/api/updateTipoUsuario';
    }

    // Busacar por ID tipo Usuario
    this.getUrlBuscarTipoUsuario = function () {
        return 'http://localhost:3000/api/getByIdTipoUsuario';
    }

    // Busacar todos los tipo Usuario
    this.getUrlAllTipoUsuario = function () {
        return 'http://localhost:3000/api/getAllTipoUsuario';
    }
    /////////////////////////////////////////////////////////

    // Ingreso Tipo Combustible
    this.getUrlIngresoTipoCombustible = function () {
        return 'http://localhost:3000/api/saveTipoCombustible';
    }

    // Modificar Tipo Combustible
    this.getUrlModificarTipoCombustible = function () {
        return 'http://localhost:3000/api/updateTipoCombustible';
    }

    // Buscar todos los Tipo Combustible
    this.getUrlAllTipoCombustible = function () {
        return 'http://localhost:3000/api/getAllTipoCombustible';
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Tipo Embarcacion
    this.getUrlIngresoTipoEmbarcacion = function () {
        return 'http://localhost:3000/api/saveTipoEmbarcacion';
    }

    // Modificar Tipo Embarcacion
    this.getUrlModificarTipoEmbarcacion = function () {
        return 'http://localhost:3000/api/updateTipoEmbarcacion';
    }

    // Buscar todos los Tipo Embarcacion
    this.getUrlAllTipoEmbarcacion = function () {
        return 'http://localhost:3000/api/getAllTipoEmbarcacion';
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Tipo Mantenimiento
    this.getUrlIngresoTipoMantenimiento = function () {
        return 'http://localhost:3000/api/saveTipoMantenimiento';
    }

    // Modificar Tipo Mantenimiento
    this.getUrlModificarTipoMantenimiento = function () {
        return 'http://localhost:3000/api/updateTipoMantenimiento';
    }

    // Buscar Todos los Tipo Mantenimiento
    this.getAllTipoMantenimiento = function () {
        return 'http://localhost:3000/api/getAllTipoMantenimiento';
    }
    ///////////////////////////////////////////////////////////////

    // Ingreso Utensilio
    this.getUrlIngresoUtensilio = function () {
        return 'http://localhost:3000/api/saveUtensilios';
    }

    // Modificar Utensilio
    this.getUrlModificarUtensilio = function () {
        return 'http://localhost:3000/api/updateUtensilios';
    }

    // Buscar todos Utensilio
    this.getUrlAllUtensilio = function () {
        return 'http://localhost:3000/api/getAllUtensilios';
    }
    /////////////////////////////////////////////////////////

    // Ingreso Propietario
    this.getUrlIngresoPropietario = function () {
        return 'http://localhost:3000/api/savePropietario';
    }

    // Modificar Propietario
    this.getUrlModificarPropietario = function () {
        return 'http://localhost:3000/api/updatePropietario';
    }

    // Buscar todos los Propietario
    this.getUrlAllPropietario = function () {
        return 'http://localhost:3000/api/getAllPropietario';
    }
    //////////////////////////////////////////////////////////

    // Ingreso Producto
    this.getUrlIngresoProducto = function () {
        return 'http://localhost:3000/api/saveProductos';
    }

    // Modificar Producto
    this.getUrlModificarProducto = function () {
        return 'http://localhost:3000/api/updateProductos';
    }

    // Buscar todos los Producto
    this.getUrlALLProducto = function () {
        return 'http://localhost:3000/api/getAllProductos';
    }
    /////////////////////////////////////////////////////////

    // Ingreso Material Petreo
    this.getUrlIngresoMaterialPetreo = function () {
        return 'http://localhost:3000/api/saveMaterialPetreo';
    }

    // Modificar Material Petreo
    this.getUrlModificarMaterialPetreo = function () {
        return 'http://localhost:3000/api/updateMaterialPetreo';
    }

    // Buscar todos Material Petreo
    this.getUrlAllMaterialPetreo = function () {
        return 'http://localhost:3000/api/getAllMaterialPetreo';
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Vehiculo
    this.getUrlIngresoVehiculo = function () {
        return 'http://localhost:3000/api/saveVehiculos';
    }

    // Modificar Vehiculo
    this.getUrlModificarVehiculo = function () {
        return 'http://localhost:3000/api/updateVehiculos';
    }

    // Buscar todos Vehiculo
    this.getUrlAllVehiculo = function () {
        return 'http://localhost:3000/api/getAllVehiculos';
    }
    ///////////////////////////////////////////////////////////

    // Ingreso Usuario
    this.getUrlIngresoUsuario = function () {
        return 'http://localhost:3000/api/saveUsuario';
    }

    // Modificar Usuario
    this.getUrlModificarUsuario = function () {
        return 'http://localhost:3000/api/updateUsuario';
    }

    // Modificar Usuario
    this.getUrlAllUsuario = function () {
        return 'http://localhost:3000/api/getAllUsuario';
    }

    ////////////////////////////////////////////////////////////

    // Ingreso Combustible
    this.getUrlIngresoCombustible = function () {
        return 'http://localhost:3000/api/saveCombustible';
    }

    // Modificar Combustible
    this.getUrlModificarCombustible = function () {
        return 'http://localhost:3000/api/updateCombustible';
    }

    ///////////////////////////////////////////////////////////

    // Ingreso Utensilios Seleccionados
    this.getUrlIngresoUtensiliosSeleccionados = function () {
        return 'http://localhost:3000/api/saveUtensiliosSeleccionados';
    }

    // Modificar Utensilios Seleccionados
    this.getUrlModificarUtensiliosSeleccionados = function () {
        return 'http://localhost:3000/api/updateUtensiliosSeleccionados';
    }

    ////////////////////////////////////////////////////////////////////////

    // Ingreso Detalle Mantenimiento
    this.getUrlIngresoDetalleMantenimiento = function () {
        return 'http://localhost:3000/api/saveDetalleMantenimiento';
    }

    // Modificar Detalle Mantenimiento
    this.getUrlModificarDetalleMantenimiento = function () {
        return 'http://localhost:3000/api/updateDetalleMantenimiento';
    }

    // buscar todos los Detalle Mantenimiento
    this.getUrlAllDetalleMantenimiento = function () {
        return 'http://localhost:3000/api/getAllDetalleMantenimiento';
    }


     //// Ingreso cliente
    //this.getUrlIngresoCliente = function () {
    //    return 'http://13.67.221.169:3001/api/saveClientes';
    //}
    //// Buscar todos los Clientes
    //this.getUrlAllClientes = function () {
    //    return 'http://13.67.221.169:3001/api/getAllClientes';
    //}

    //// Ingreso Puerto
    //this.getUrlIngresoPuerto = function () {
    //    return 'http://13.67.221.169:3001/api/savePuerto';
    //}

    //// Buscar todos los Puertos
    //this.getUrlAllPuerto = function () {
    //    return 'http://13.67.221.169:3001/api/getAllPuerto';
    //}

    //// Ingreso tipo Usuario
    //this.getUrlIngresoTipoUsuario = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoUsuario';
    //}

    //// Busacar todos los tipo Usuario
    //this.getUrlAllTipoUsuario = function () {
    //    return 'http://13.67.221.169:3001/api/getAllTipoUsuario';
    //}

    //// Ingreso Tipo Combustible
    //this.getUrlIngresoTipoCombustible = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoCombustible';
    //}

    //// Buscar todos los Tipo Combustible
    //this.getUrlAllTipoCombustible = function () {
    //    return 'http://13.67.221.169:3001/api/getAllTipoCombustible';
    //}

    //// Ingreso Tipo Embarcacion
    //this.getUrlIngresoTipoEmbarcacion = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoEmbarcacion';
    //}

    //// Buscar todos los Tipo Embarcacion
    //this.getUrlAllTipoEmbarcacion = function () {
    //    return 'http://13.67.221.169:3001/api/getAllTipoEmbarcacion';
    //}

    //// Ingreso Tipo Mantenimiento
    //this.getUrlIngresoTipoMantenimiento = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoMantenimiento';
    //}

    //// Buscar Todos los Tipo Mantenimiento
    //this.getAllTipoMantenimiento = function () {
    //    return 'http://13.67.221.169:3001/api/getAllTipoMantenimiento';
    //}

    //// Ingreso Utensilio
    //this.getUrlIngresoUtensilio = function () {
    //    return 'http://13.67.221.169:3001/api/saveUtensilios';
    //}

    //// Buscar todos Utensilio
    //this.getUrlAllUtensilio = function () {
    //    return 'http://13.67.221.169:3001/api/getAllUtensilios';
    //}

    //// Ingreso Propietario
    //this.getUrlIngresoPropietario = function () {
    //    return 'http://13.67.221.169:3001/api/savePropietario';
    //}

    //// Buscar todos los Propietario
    //this.getUrlAllPropietario = function () {
    //    return 'http://13.67.221.169:3001/api/getAllPropietario';
    //}

    //// Ingreso Producto
    //this.getUrlIngresoProducto = function () {
    //    return 'http://13.67.221.169:3001/api/saveProductos';
    //}

    //// Buscar todos los Producto
    //this.getUrlALLProducto = function () {
    //    return 'http://13.67.221.169:3001/api/getAllProductos';
    //}

    //// Ingreso Material Petreo
    //this.getUrlIngresoMaterialPetreo = function () {
    //    return 'http://13.67.221.169:3001/api/saveMaterialPetreo';
    //}

    //// Buscar todos Material Petreo
    //this.getUrlAllMaterialPetreo = function () {
    //    return 'http://13.67.221.169:3001/api/getAllMaterialPetreo';
    //}

    //// Ingreso Vehiculo
    //this.getUrlIngresoVehiculo = function () {
    //    return 'http://13.67.221.169:3001/api/saveVehiculos';
    //}

    //// Buscar todos Vehiculo
    //this.getUrlAllVehiculo = function () {
    //    return 'http://13.67.221.169:3001/api/getAllVehiculos';
    //}

    //// Ingreso Usuario
    //this.getUrlIngresoUsuario = function () {
    //    return 'http://13.67.221.169:3001/api/saveUsuario';
    //}

    //// Ingreso Combustible
    //this.getUrlIngresoCombustible = function () {
    //    return 'http://13.67.221.169:3001/api/saveCombustible';
    //}

    //// Ingreso Utensilios Seleccionados
    //this.getUrlIngresoUtensiliosSeleccionados = function () {
    //    return 'http://13.67.221.169:3001/api/saveUtensiliosSeleccionados';
    //}

    //// Ingreso Detalle Mantenimiento
    //this.getUrlIngresoDetalleMantenimiento = function () {
    //    return 'http://13.67.221.169:3001/api/saveDetalleMantenimiento';
    //}

    //// buscar todos los Detalle Mantenimiento
    //this.getUrlAllDetalleMantenimiento = function () {
    //    return 'http://13.67.221.169:3001/api/getAllDetalleMantenimiento';
    //}


}

app.factory("myProvider", function () {
    // console.log("factory function");
    return new ApiUrl();

});

