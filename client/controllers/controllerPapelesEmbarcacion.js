app.controller('ControllerPapelesEmbarcacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPapelesEmbarcacion;
    $scope.urlAllEmbarcacion;
    $scope.urlBuscarEmbarcacion;

    $scope.embarcacion = "";
    $scope.descripcionPapelesEmbarcacion;
    $scope.fechaEmision = "";
    $scope.fechaCaducidad = "";

    $scope.id;
    $scope.seleccion;
    $scope.seleccionPapelesEmbarcacion;

    $scope.busqueda;
    $scope.listaPapelesEmbarcacion;
    $scope.listaEmbarcacion;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {

            $scope.url = myProvider.getUrlIngresoPapelesEmbarcacion();
            $scope.urlModificar = myProvider.getUrlModificarPapelesEmbarcacion();
            $scope.urlAllPapelesEmbarcacion = myProvider.getUrlAllPapelesEmbarcacion();
            $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
            $scope.urlBuscarEmbarcacion = myProvider.getUrlBuscarEmbarcacion();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.embarcacion = "";
            $scope.descripcionPapelesEmbarcacion;
            $scope.fechaEmision = "";
            $scope.fechaCaducidad = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionPapelesEmbarcacion = "";

            $scope.busqueda = "";
            $scope.listaPapelesEmbarcacion = "";
            $scope.listaEstado;
            $scope.listaEmbarcacion;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllPapelesEmbarcacion)
                .then(function (response) {

                    $scope.listaPapelesEmbarcacion = response.data;

                    var k = 0;
                    var n = $scope.listaPapelesEmbarcacion.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaPapelesEmbarcacion[i].estado == $scope.listaEstado[0].id)
                            $scope.listaPapelesEmbarcacion[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaPapelesEmbarcacion[i].estado = $scope.listaEstado[1];

                        var embar = {
                            id: $scope.listaPapelesEmbarcacion[i].embarcacion
                        }

                        $http.post($scope.urlBuscarEmbarcacion, embar)
                            .then(function (response) {

                                $scope.listaPapelesEmbarcacion[k++].embarcacion = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });

                    }

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

        }
    } else {
        window.location = "../login.html"
    }
    $scope.ingresoPapelesEmbarcacion = function () {

        var obj = {
            embarcacion: $scope.embarcacion,
            descripcion_papeles_embarcacion: $scope.descripcionPapelesEmbarcacion,
            fecha_emision: $scope.fechaEmision,
            fecha_caducidad: $scope.fechaCaducidad,
            estado: $scope.estado
        };

        if (validarCamposVacios(obj)) {
            $http.post($scope.url, obj)
                .then(function (response) {
                    if (response.data == "true") {
                        $scope.iniciar();
                        swal({
                            title: "Ingreso Exitoso!",
                            type: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    } else
                        $(document.getElementById("nombre")).notify("Ya Existe", { position: "right" });
                }, function errorCallback(response) {

                    $.notify("Error!", "error");

                });
        } else {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
    }

    $scope.modificarPapelesEmbarcacion = function () {

        var obj = {
            id: $scope.id,
            embarcacion: $scope.embarcacion,
            descripcion_papeles_embarcacion: $scope.descripcionPapelesEmbarcacion,
            fecha_emision: $scope.fechaEmision,
            fecha_caducidad: $scope.fechaCaducidad,
            estado: $scope.estado
        };

        if ($scope.seleccionPapelesEmbarcacion != "") {
            if (validarCamposVacios(obj)) {
                $http.post($scope.urlModificar, obj)
                    .then(function (response) {

                        if (response.data == "true") {
                            $scope.iniciar();
                            swal({
                                title: "Modificaci\u00F3n Exitosa!",
                                type: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });
                        } else
                            $(document.getElementById("nombre")).notify("Ya Existe", { position: "right" });
                    }, function errorCallback(response) {

                        $.notify("Error!", "error");

                    });
            } else {
                $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
            }
        } else {
            $(document.getElementById("lista")).notify("Seleccione un Registro", { position: "left middle" });
        }
    }

    $scope.buscarSeleccionPapelesEmbarcacion = function () {

        if ($scope.seleccionPapelesEmbarcacion != '' && $scope.seleccionPapelesEmbarcacion != undefined) {

            $scope.selecPapelesEmbarcacion = $scope.seleccionPapelesEmbarcacion;
            
            $scope.id = $scope.selecPapelesEmbarcacion._id;
            $scope.embarcacion = $scope.seleccionPapelesEmbarcacion.embarcacion._id;
            $scope.descripcionPapelesEmbarcacion = $scope.selecPapelesEmbarcacion.descripcion_papeles_embarcacion;
            $scope.fechaEmision = $scope.seleccionPapelesEmbarcacion.fecha_emision;
            $scope.fechaCaducidad = $scope.seleccionPapelesEmbarcacion.fecha_caducidad;
            $scope.estado = $scope.selecPapelesEmbarcacion.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionPapelesEmbarcacion = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionPapelesEmbarcacion();

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


function validarCamposVacios(obj) {
    if (obj.descripcion_papeles_embarcacion == "" || obj.fecha_caducidad == "" || obj.fecha_emision == "") {

        if (obj.descripcionPapelesEmbarcacion == "") {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.fecha_emision == "") {
            $(document.getElementById("fechaEmision")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.fecha_caducidad == "") {
            $(document.getElementById("fechaCaducidad")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        

        return false;

    } else {
        return true;
    }
}