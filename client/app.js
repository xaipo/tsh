var app = angular.module("myApp", [])
function ApiUrl() {

    ////ejemplo a seguir
    //this.getUser = function () {
    //    return 'http://13.67.221.169:3001/api/getAllPropietario';
    //}

    // Ingreso cliente
    this.getUrlIngresoCliente = function () {
        return 'http://13.67.221.169:3001/api/saveClientes';
    }
    // Buscar todos los Clientes
    this.getUrlAllClientes = function () {
        return 'http://13.67.221.169:3001/api/getAllClientes';
    }

    // Ingreso Puerto
    this.getUrlIngresoPuerto = function () {
        return 'http://13.67.221.169:3001/api/savePuerto';
    }

    // Buscar todos los Puertos
    this.getUrlAllPuerto = function () {
        return 'http://13.67.221.169:3001/api/getAllPuerto';
    }

    // Ingreso tipo Usuario
    this.getUrlIngresoTipoUsuario = function () {
        return 'http://13.67.221.169:3001/api/saveTipoUsuario';
    }

    // Busacar todos los tipo Usuario
    this.getUrlAllTipoUsuario = function () {
        return 'http://13.67.221.169:3001/api/getAllTipoUsuario';
    }

    // Ingreso Tipo Combustible
    this.getUrlIngresoTipoCombustible = function () {
        return 'http://13.67.221.169:3001/api/saveTipoCombustible';
    }

    // Buscar todos los Tipo Combustible
    this.getUrlAllTipoCombustible = function () {
        return 'http://13.67.221.169:3001/api/getAllTipoCombustible';
    }

    // Ingreso Tipo Embarcacion
    this.getUrlIngresoTipoEmbarcacion = function () {
        return 'http://13.67.221.169:3001/api/saveTipoEmbarcacion';
    }

    // Buscar todos los Tipo Embarcacion
    this.getUrlAllTipoEmbarcacion = function () {
        return 'http://13.67.221.169:3001/api/getAllTipoEmbarcacion';
    }

    // Ingreso Tipo Mantenimiento
    this.getUrlIngresoTipoMantenimiento = function () {
        return 'http://13.67.221.169:3001/api/saveTipoMantenimiento';
    }

    // Buscar Todos los Tipo Mantenimiento
    this.getAllTipoMantenimiento = function () {
        return 'http://13.67.221.169:3001/api/getAllTipoMantenimiento';
    }

    // Ingreso Utensilio
    this.getUrlIngresoUtensilio = function () {
        return 'http://13.67.221.169:3001/api/saveUtensilios';
    }

    // Buscar todos Utensilio
    this.getUrlAllUtensilio = function () {
        return 'http://13.67.221.169:3001/api/getAllUtensilios';
    }

    // Ingreso Propietario
    this.getUrlIngresoPropietario = function () {
        return 'http://13.67.221.169:3001/api/savePropietario';
    }

    // Buscar todos los Propietario
    this.getUrlAllPropietario = function () {
        return 'http://13.67.221.169:3001/api/getAllPropietario';
    }

    // Ingreso Producto
    this.getUrlIngresoProducto = function () {
        return 'http://13.67.221.169:3001/api/saveProductos';
    }

    // Buscar todos los Producto
    this.getUrlALLProducto = function () {
        return 'http://13.67.221.169:3001/api/getAllProductos';
    }

    // Ingreso Material Petreo
    this.getUrlIngresoMaterialPetreo = function () {
        return 'http://13.67.221.169:3001/api/saveMaterialPetreo';
    }

    // Buscar todos Material Petreo
    this.getUrlAllMaterialPetreo = function () {
        return 'http://13.67.221.169:3001/api/getAllMaterialPetreo';
    }

    // Ingreso Vehiculo
    this.getUrlIngresoVehiculo = function () {
        return 'http://13.67.221.169:3001/api/saveVehiculos';
    }

    // Buscar todos Vehiculo
    this.getUrlAllVehiculo = function () {
        return 'http://13.67.221.169:3001/api/getAllVehiculos';
    }

    // Ingreso Usuario
    this.getUrlIngresoUsuario = function () {
        return 'http://13.67.221.169:3001/api/saveUsuario';
    }

    // Ingreso Combustible
    this.getUrlIngresoCombustible = function () {
        return 'http://13.67.221.169:3001/api/saveCombustible';
    }

    // Ingreso Utensilios Seleccionados
    this.getUrlIngresoUtensiliosSeleccionados = function () {
        return 'http://13.67.221.169:3001/api/saveUtensiliosSeleccionados';
    }

    // Ingreso Detalle Mantenimiento
    this.getUrlIngresoDetalleMantenimiento = function () {
        return 'http://13.67.221.169:3001/api/saveDetalleMantenimiento';
    }

    // buscar todos los Detalle Mantenimiento
    this.getUrlAllDetalleMantenimiento = function () {
        return 'http://13.67.221.169:3001/api/getAllDetalleMantenimiento';
    }


    //// Ingreso cliente
    //this.getUrlIngresoCliente = function () {
    //    return 'http://13.67.221.169:3001/api/saveClientes';
    //}

    //// Ingreso Puerto
    //this.getUrlIngresoPuerto = function () {
    //    return 'http://13.67.221.169:3001/api/savePuerto';
    //}

    //// Ingreso tipo Usuario
    //this.getUrlIngresoTipoUsuario = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoUsuario';
    //}

    ////Ingreso Tipo Combustible
    //this.getUrlIngresoTipoCombustible = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoCombustible';
    //}

    ////Ingreo Tipo Embarcacion
    //this.getUrlIngresoTipoEmbarcacion = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoEmbarcacion';
    //}

    ////Ingreo Tipo Mantenimiento
    //this.getUrlIngresoTipoMantenimiento = function () {
    //    return 'http://13.67.221.169:3001/api/saveTipoMantenimiento';
    //}

    ////Ingreo Utensilio
    //this.getUrlIngresoUtensilio = function () {
    //    return 'http://13.67.221.169:3001/api/saveUtensilios';
    //}

    ////Ingreo Propietario
    //this.getUrlIngresoPropietario = function () {
    //    return 'http://13.67.221.169:3001/api/savePropietario';
    //}

    ////Ingreo Producto
    //this.getUrlIngresoProducto = function () {
    //    return 'http://13.67.221.169:3001/api/saveProductos';
    //}

    ////Ingreo Material Petreo
    //this.getUrlIngresoMaterialPetreo = function () {
    //    return 'http://13.67.221.169:3001/api/saveMaterialPetreo';
    //}

    ////Ingreo Vehiculo
    //this.getUrlIngresoVehiculo = function () {
    //    return 'http://13.67.221.169:3001/api/saveVehiculos';
    //}

    ////Ingreo Usuario
    //this.getUrlIngresoUsuario = function () {
    //    return 'http://13.67.221.169:3001/api/saveUsuario';
    //}

    ////Ingreo Combustible
    //this.getUrlIngresoCombustible = function () {
    //    return 'http://13.67.221.169:3001/api/saveCombustible';
    //}

    ////Ingreo Utensilios Seleccionados
    //this.getUrlIngresoUtensiliosSeleccionados = function () {
    //    return 'http://13.67.221.169:3001/api/saveUtensiliosSeleccionados';
    //}

    ////Ingreo Detalle Mantenimiento
    //this.getUrlIngresoDetalleMantenimiento = function () {
    //    return 'http://13.67.221.169:3001/api/saveDetalleMantenimiento';
    //}


}

app.factory("myProvider", function () {
    // console.log("factory function");
    return new ApiUrl();

});

