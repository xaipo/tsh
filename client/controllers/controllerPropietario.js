app.controller('ControllerPropietario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllPropietario;

    $scope.nombrePropietario;
    $scope.cedulaPropietario;
    $scope.telefonoPropietario;
    $scope.celularPropietario;
    $scope.correoPropietario;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionPropietario;

    $scope.busqueda;
    $scope.listaPropietario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoPropietario();
            $scope.urlModificar = myProvider.getUrlModificarPropietario();
            $scope.urlAllPropietario = myProvider.getUrlAllPropietario();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.nombrePropietario = "";
            $scope.cedulaPropietario = "";
            $scope.telefonoPropietario = "";
            $scope.celularPropietario = "";
            $scope.correoPropietario = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionPropietario = "";

            $scope.busqueda = "";
            $scope.listaPropietario;
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllPropietario)
                .then(function (response) {

                    $scope.listaPropietario = response.data;

                    var n = $scope.listaPropietario.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaPropietario[i].estado == $scope.listaEstado[0].id)
                            $scope.listaPropietario[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaPropietario[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoPropietario = function () {

        var obj = {
            nombre_propietario: $scope.nombrePropietario,
            cedula_propietario: $scope.cedulaPropietario,
            telefono_propietario: $scope.telefonoPropietario,
            celular_propietario: $scope.celularPropietario,
            correo_propietario: $scope.correoPropietario,
            estado: $scope.estado
        };

        if (validarCamposVacios(obj)) {
            if (obj.cedula_propietario.length == 10) {
                if (obj.telefono_propietario.length == 9) {
                    if (obj.celular_propietario.length == 10) {
                        if (validarRucCedula(obj.cedula_propietario)) {
                            if (validateEmail(obj.correo_propietario)) {
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
                                $(document.getElementById("correo")).notify("Correo Inv\u00E1lido!", { position: "right" });
                            }

                        } else {

                            $(document.getElementById("ruc")).notify("Ruc Inv\u00E1lido", { position: "right" });

                        }
                    } else {

                        $(document.getElementById("cell")).notify("Celular Inv\u00E1lido", { position: "right" });

                    }
                } else {

                    $(document.getElementById("tlf")).notify("Telefono Inv\u00E1lido", { position: "right" });

                }
            } else {
                $(document.getElementById("ruc")).notify("Cedula Incompleto", { position: "right" });
            }
        } else {
            $(document.getElementById("mensaje")).notify("Revise los Campos", { position: "top right" });
        }
    }

    $scope.modificarPropietario = function () {

        var obj = {
            id: $scope.id, nombre_propietario: $scope.nombrePropietario,
            cedula_propietario: $scope.cedulaPropietario,
            telefono_propietario: $scope.telefonoPropietario,
            celular_propietario: $scope.celularPropietario,
            correo_propietario: $scope.correoPropietario,
            estado: $scope.estado
        };

        if ($scope.seleccionPropietario != "") {
            if (validarCamposVacios(obj)) {
                if (obj.cedula_propietario.length == 10) {
                    if (obj.telefono_propietario.length == 10 || obj.telefono_propietario.length == 9) {
                        if (validarRucCedula(obj.cedula_propietario)) {
                            if (validateEmail(obj.correo_propietario)) {
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
                                            $(document.getElementById("ruc")).notify("Cedula Existe", { position: "right" });

                                    }, function errorCallback(response) {

                                        $.notify("Error!", "error");
                                    });
                            } else {
                                $(document.getElementById("correo")).notify("Correo Inv\u00E1lido!", { position: "right" });
                            }
                        } else {

                            $(document.getElementById("ruc")).notify("Ruc Inv\u00E1lido", { position: "right" });

                        }
                    } else {

                        $(document.getElementById("telefono")).notify("Tlfn/Cel Inv\u00E1lido", { position: "right" });

                    }
                } else {
                    $(document.getElementById("ruc")).notify("Ruc Incompleto", { position: "right" });
                }
            } else {
                $(document.getElementById("mensaje")).notify("Revise los Campos", { position: "top right" });
            }
        } else {
            $(document.getElementById("lista")).notify("Seleccione un Registro", { position: "left middle" });
        }
    }

    $scope.buscarSeleccionPropietario = function () {

        if ($scope.seleccionPropietario != '' && $scope.seleccionPropietario != undefined) {

            $scope.selecProp = $scope.seleccionPropietario;

            $scope.id = $scope.selecProp._id;
            $scope.nombrePropietario = $scope.selecProp.nombre_propietario;
            $scope.cedulaPropietario = $scope.selecProp.cedula_propietario;
            $scope.telefonoPropietario = $scope.selecProp.telefono_propietario;
            $scope.celularPropietario = $scope.selecProp.celular_propietario;
            $scope.correoPropietario = $scope.selecProp.correo_propietario;
            $scope.estado = $scope.selecProp.estado.id;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionPropietario = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionPropietario();

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
        alert('El tercer dígito ingresado es inválido');
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
            alert('El ruc de la empresa del sector público es incorrecto.');
            return false;
        }
        /* El ruc de las empresas del sector publico terminan con 0001*/
        if (numero.substring(9, 4) != '0001') {
            alert('El ruc de la empresa del sector público debe terminar con 0001');
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
            //alert('El número de cédula de la persona natural es incorrecto.');
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

    if (obj.nombre_propietario == "" || obj.correo_propietario == "" || obj.cedula_propietario == "" ||
        obj.telefono_propietario == "" || obj.celular_propietario == "") {

        if (obj.nombre_propietario == "") {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.correo_propietario == "") {
            $(document.getElementById("correo")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.cedula_propietario == "") {
            $(document.getElementById("ruc")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.telefono_propietario == "") {
            $(document.getElementById("tlf")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (obj.celular_propietario == "") {
            $(document.getElementById("cell")).notify("Campo Vac\u00EDo", { position: "right" });
        }        

        return false;

    } else {
        return true;
    }

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}