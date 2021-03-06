app.controller('ControllerTripulante', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTripulante;
    $scope.urlAllTipoTripulante;
    $scope.urlBuscarTipoTripulante;

    $scope.nombreTripulante;
    $scope.cedulaTripulante;
    $scope.telefonoTripulante;
    $scope.tipoTripulante;

    $scope.id;
    $scope.seleccionTripulante;
    $scope.seleccionTipoTripulante;


    $scope.busqueda;
    $scope.listaTripulante;
    $scope.listaTipoTripulante;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTripulante();
            $scope.urlModificar = myProvider.getUrlModificarTripulante();
            $scope.urlAllTripulante = myProvider.getUrlAllTripulante();
            $scope.urlAllTipoTripulante = myProvider.getUrlAllTipoTripulante();
            $scope.urlBuscarTipoTripulante = myProvider.getUrlBuscarTipoTripulante();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.nombreTripulante = "";
            $scope.cedulaTripulante = "";
            $scope.telefonoTripulante = "";
            $scope.tipoTripulante = "";

            $scope.id = "";
            $scope.seleccionTripulante = "";
            $scope.seleccionTipoTripulante = "";


            $scope.busqueda = "";
            $scope.listaTripulante;
            $scope.listaTipoTripulante;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTripulante)
                .then(function (response) {

                    $scope.listaTripulante = response.data;

                    var n = $scope.listaTripulante.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTripulante[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTripulante[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTripulante[i].estado = $scope.listaEstado[1];
                    }

                    var k = 0;
                    for (var i = 0; i < n; i++) {
                        var tpTrip = {
                            id: $scope.listaTripulante[i].tipo_tripulante
                        }

                        $http.post($scope.urlBuscarTipoTripulante, tpTrip)
                            .then(function (response) {

                                $scope.listaTripulante[k++].tipo_tripulante = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });
                    }
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

        }
    } else {
        window.location = "../login.html"
    }
    $scope.ingresoTripulante = function () {

        var obj = {
            nombre_tripulante: $scope.nombreTripulante,
            cedula_tripulante: $scope.cedulaTripulante,
            telefono_tripulante: $scope.telefonoTripulante,
            tipo_tripulante: $scope.tipoTripulante,
            estado: $scope.estado
        };

        if (validarCamposVacios(obj)) {
            if (obj.cedula_tripulante.length == 10) {
                if (obj.telefono_tripulante.length == 10 || obj.telefono_tripulante.length == 9) {
                    if (validarRucCedula(obj.cedula_tripulante)) {

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
                                    $(document.getElementById("ruc")).notify("C\u00E9dula ya Existe", { position: "right" });

                            }, function errorCallback(response) {

                                $.notify("Error!", "error");

                            });

                    } else {

                        $(document.getElementById("ruc")).notify("C\u00E9dula Inv\u00E1lida", { position: "right" });

                    }
                } else {

                    $(document.getElementById("telefono")).notify("Tel\u00E9fono Inv\u00E1lido", { position: "right" });

                }
            } else {
                $(document.getElementById("ruc")).notify("C\u00E9dula Incompleta", { position: "right" });
            }
        } else {
            $(document.getElementById("mensaje")).notify("Revise los Campos", { position: "top right" });
        }
    }

    $scope.modificarTripulante = function () {

        var obj = {
            id: $scope.id, nombre_tripulante: $scope.nombreTripulante,
            cedula_tripulante: $scope.cedulaTripulante,
            telefono_tripulante: $scope.telefonoTripulante,
            tipo_tripulante: $scope.tipoTripulante,
            estado: $scope.estado
        };

        if ($scope.seleccionTripulante != "") {
            if (validarCamposVacios(obj)) {
                if (obj.cedula_tripulante.length == 10) {
                    if (obj.telefono_tripulante.length == 10 || obj.telefono_tripulante.length == 9) {
                        if (validarRucCedula(obj.cedula_tripulante)) {
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
                                        $(document.getElementById("ruc")).notify("C\u00E9dula ya Existe", { position: "right" });

                                }, function errorCallback(response) {

                                    $.notify("Error!", "error");
                                });

                        } else {

                            $(document.getElementById("ruc")).notify("C\u00E9dula Inv\u00E1lida", { position: "right" });

                        }
                    } else {

                        $(document.getElementById("telefono")).notify("Tel\u00E9fono Inv\u00E1lido", { position: "right" });

                    }
                } else {
                    $(document.getElementById("ruc")).notify("C\u00E9dula Incompleta", { position: "right" });
                }
            } else {
                $(document.getElementById("mensaje")).notify("Revise los Campos", { position: "top right" });
            }
        } else {
            $(document.getElementById("lista")).notify("Seleccione un Registro", { position: "left middle" });
        }
    }

    $scope.buscarSeleccionListaTripulante = function () {

        if ($scope.seleccionTripulante != '' && $scope.seleccionTripulante != undefined) {

            $scope.selecTrip = $scope.seleccionTripulante;

            $scope.id = $scope.selecTrip._id;
            $scope.nombreTripulante = $scope.selecTrip.nombre_tripulante;
            $scope.cedulaTripulante = $scope.selecTrip.cedula_tripulante;
            $scope.telefonoTripulante = $scope.selecTrip.telefono_tripulante;
            $scope.tipoTripulante = $scope.selecTrip.tipo_tripulante._id;
            $scope.estado = $scope.selecTrip.estado.id;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }
    
    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTripulante = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaTripulante();

    }

}]);

//VALIDACION DE CEDULA Y RUC
function validarRucCedula(campo) {
    numero = campo;
    var suma = 0;
    var residuo = 0;
    var pri = false;
    var pub = false;
    var nat = false;
    var modulo = 11;

    /* Aqui almacenamos los digitos de la cedula en variables. */
    d1 = numero.substring(0, 1);
    d2 = numero.substring(1, 2);
    d3 = numero.substring(2, 3);
    d4 = numero.substring(3, 4);
    d5 = numero.substring(4, 5);
    d6 = numero.substring(5, 6);
    d7 = numero.substring(6, 7);
    d8 = numero.substring(7, 8);
    d9 = numero.substring(8, 9);
    d10 = numero.substring(9, 10);

    //comparo que el numero de provincias sean los correctos (24 para ecuador).  
    if (numero.substring(0, 2) > 24) {
        return false;
    }

    /* El tercer digito es: */
    /* 9 para sociedades privadas y extranjeros */
    /* 6 para sociedades publicas */
    /* menor que 6 (0,1,2,3,4,5) para personas naturales */

    if (d3 == 7 || d3 == 8) {
        alert('El tercer d�gito ingresado es inv�lido');
        return false;
    }

    /* Solo para personas naturales (modulo 10) */
    if (d3 < 6) {
        nat = true;
        p1 = d1 * 2; if (p1 >= 10) p1 -= 9;
        p2 = d2 * 1; if (p2 >= 10) p2 -= 9;
        p3 = d3 * 2; if (p3 >= 10) p3 -= 9;
        p4 = d4 * 1; if (p4 >= 10) p4 -= 9;
        p5 = d5 * 2; if (p5 >= 10) p5 -= 9;
        p6 = d6 * 1; if (p6 >= 10) p6 -= 9;
        p7 = d7 * 2; if (p7 >= 10) p7 -= 9;
        p8 = d8 * 1; if (p8 >= 10) p8 -= 9;
        p9 = d9 * 2; if (p9 >= 10) p9 -= 9;
        modulo = 10;
    }

    /* Solo para sociedades publicas (modulo 11) */
    /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
    else if (d3 == 6) {
        pub = true;
        p1 = d1 * 3;
        p2 = d2 * 2;
        p3 = d3 * 7;
        p4 = d4 * 6;
        p5 = d5 * 5;
        p6 = d6 * 4;
        p7 = d7 * 3;
        p8 = d8 * 2;
        p9 = 0;
    }

    /* Solo para entidades privadas (modulo 11) */
    else if (d3 == 9) {
        pri = true;
        p1 = d1 * 4;
        p2 = d2 * 3;
        p3 = d3 * 2;
        p4 = d4 * 7;
        p5 = d5 * 6;
        p6 = d6 * 5;
        p7 = d7 * 4;
        p8 = d8 * 3;
        p9 = d9 * 2;
    }

    suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
    residuo = suma % modulo;

    /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
    digitoVerificador = residuo == 0 ? 0 : modulo - residuo;

    /* ahora comparamos el elemento de la posicion 10 con el dig. ver.*/
    if (pub == true) {
        if (digitoVerificador != d9) {
            alert('El ruc de la empresa del sector p�blico es incorrecto.');
            return false;
        }
        /* El ruc de las empresas del sector publico terminan con 0001*/
        if (numero.substring(9, 4) != '0001') {
            alert('El ruc de la empresa del sector p�blico debe terminar con 0001');
            return false;
        }
    }
    else if (pri == true) {
        if (digitoVerificador != d10) {
            alert('El ruc de la empresa del sector privado es incorrecto.');
            return false;
        }
        //verificar esta parte con los demas RUC
        if (numero.length > 10 && (numero.substring(13, 10) != '001' && numero.substring(13, 10) != '002' &&
            numero.substring(13, 10) != '003' && numero.substring(13, 10) != '004' && numero.substring(13, 10) != '005' &&
            numero.substring(13, 10) != '006' && numero.substring(13, 10) != '007' && numero.substring(13, 10) != '008' &&
            numero.substring(13, 10) != '009')) {
            alert('El ruc de la empresa del sector privado debe terminar con 001');
            return false;
        }
    }

    else if (nat == true) {
        if (digitoVerificador != d10) {
            //alert('El n�mero de c�dula de la persona natural es incorrecto.');
            return false;
        }

        if (numero.length > 10 && (numero.substring(13, 10) != '001' && numero.substring(13, 10) != '002' &&
            numero.substring(13, 10) != '003' && numero.substring(13, 10) != '004' && numero.substring(13, 10) != '005' &&
            numero.substring(13, 10) != '006' && numero.substring(13, 10) != '007' && numero.substring(13, 10) != '008' &&
            numero.substring(13, 10) != '009')) {
            //alert('El ruc de la persona natural debe terminar con 00*');
            return false;
        }
    }
    return true;
}

// SOLO LETRAS
function soloLetras(e, id) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " �����abcdefghijklmn�opqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
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
    letras = " (),/.-0123456789�����abcdefghijklmn�opqrstuvwxyz'\u00E1''\u00E9''\u00ED''\u00F3''\u00FA''\u00F1''\u00C1''\u00C9''\u00CD''\u00D3''\u00DA''\u00D1'";
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

function validarCamposVacios(obj) {

    if (obj.nombre_tripulante == "" || obj.cedula_tripulante == "" ||
        obj.telefono_tripulante == "" || obj.tipo_tripulante == "") {

        if (obj.nombre_tripulante == "") {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.cedula_tripulante == "") {
            $(document.getElementById("ruc")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.telefono_tripulante == "") {
            $(document.getElementById("telefono")).notify("Campo Vac\u00EDo", { position: "right" });
        }            

        return false;

    } else {
        return true;
    }
}
