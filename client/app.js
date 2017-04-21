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

    // Ingreso Puerto
    this.getUrlIngresoPuerto = function () {
        return 'http://13.67.221.169:3001/api/savePuerto';
    }

    // Ingreso tipo Usuario
    this.getUrlIngresoTipoUsuario = function () {
        return 'http://13.67.221.169:3001/api/saveTipoUsuario';
    }

    //Ingreso Tipo Combustible
    this.getUrlIngresoTipoCombustible = function () {
        return 'http://13.67.221.169:3001/api/saveTipoCombustible';
    }

    //Ingreo Tipo Embarcacion
    this.getUrlIngresoTipoEmbarcacion = function () {
        return 'http://13.67.221.169:3001/api/saveTipoEmbarcacion';
    }

    //Ingreo Tipo Mantenimiento
    this.getUrlIngresoTipoMantenimiento = function () {
        return 'http://13.67.221.169:3001/api/saveTipoMantenimiento';
    }

    //Ingreo Utensilio
    this.getUrlIngresoUtensilio = function () {
        return 'http://13.67.221.169:3001/api/saveUtensilios';
    }

    //Ingreo Propietario
    this.getUrlIngresoPropietario = function () {
        return 'http://13.67.221.169:3001/api/savePropietario';
    }

    //Ingreo Producto
    this.getUrlIngresoProducto = function () {
        return 'http://13.67.221.169:3001/api/saveProductos';
    }

    //Ingreo Material Petreo
    this.getUrlIngresoMaterialPetreo = function () {
        return 'http://13.67.221.169:3001/api/saveMaterialPetreo';
    }

    //Ingreo Vehiculo
    this.getUrlIngresoVehiculo = function () {
        return 'http://13.67.221.169:3001/api/saveVehiculos';
    }

    //Ingreo Usuario
    this.getUrlIngresoUsuario = function () {
        return 'http://13.67.221.169:3001/api/saveUsuario';
    }

    //Ingreo Combustible
    this.getUrlIngresoCombustible = function () {
        return 'http://13.67.221.169:3001/api/saveCombustible';
    }

    //Ingreo Utensilios Seleccionados
    this.getUrlIngresoUtensiliosSeleccionados = function () {
        return 'http://13.67.221.169:3001/api/saveUtensiliosSeleccionados';
    }

    //Ingreo Detalle Mantenimiento
    this.getUrlIngresoDetalleMantenimiento = function () {
        return 'http://13.67.221.169:3001/api/saveDetalleMantenimiento';
    }

}

app.factory("myProvider", function () {
    // console.log("factory function");
    return new ApiUrl();

});

