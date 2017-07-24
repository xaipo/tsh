app.controller('ControllerUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlBuscarUser;
    $scope.urlRegister;
    $scope.urlModificar;
    $scope.urlModificarPsswd;
    $scope.urlAllUsuario;
    $scope.urlAllTipoUsuario;
    $scope.urlBuscarTipoUsuario;


    $scope.nombreUsuario;
    $scope.nombresCompletos;
    $scope.cedulaUsuario;
    $scope.contrasenaUsuario;
    $scope.telefonoUsuario;
    $scope.correoUsuario;
    $scope.tipoUsuario;
    $scope.contrasenaAux = "";

    $scope.userAux = "";

    $scope.id;
    $scope.seleccionUsuario;
    $scope.seleccionTipoUsuario;


    $scope.busqueda;
    $scope.listaUsuario;
    $scope.listaTipoUsuario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {

            $scope.url = myProvider.getUrlIngresoUsuario();
            $scope.urlBuscarUser = myProvider.getUrlBuscarUsuarioNombre();
            $scope.urlRegister = myProvider.getUrlRegisterUser();
            $scope.urlModificarPsswd = myProvider.getUrlModificarUsuarioPsswd();
            $scope.urlModificar = myProvider.getUrlModificarUsuario();
            $scope.urlAllUsuario = myProvider.getUrlAllUsuario();
            $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoUsuarioActivos();
            $scope.urlBuscarTipoUsuario = myProvider.getUrlBuscarTipoUsuario();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuarioLogin = JSON.parse(localStorage.getItem("tipoUser"));
                if ($scope.tipoUsuarioLogin.descripcion_tipo_usuario != "administrador") {
                    $scope.id = $scope.usuario._id;
                    $scope.nombreUsuario = $scope.usuario.username;
                    $scope.correoUsuario = $scope.usuario.email;
                    $scope.nombresCompletos = $scope.usuario.name;
                    $scope.contrasenaUsuario = "";
                    $scope.telefonoUsuario = $scope.usuario.phone;
                    $scope.tipoUsuario = $scope.tipoUsuarioLogin._id;
                    $scope.cedulaUsuario = $scope.usuario.identification_card;
                    $scope.userAux = $scope.usuario;
                    $scope.contrasenaAux = $scope.usuario.password;

                    $http.get($scope.urlAllTipoUsuario)
                        .then(function (response) {

                            $scope.listaTipoUsuario = response.data;
                            $scope.tipoUsuario = $scope.tipoUsuarioLogin._id;

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                } else {
                    $scope.id = "";
                    $scope.nombreUsuario = "";
                    $scope.correoUsuario = "";
                    $scope.nombresCompletos = "";
                    $scope.contrasenaUsuario = "";
                    $scope.telefonoUsuario = "";
                    $scope.tipoUsuario = "";
                    $scope.cedulaUsuario = "";
                    $scope.userAux = "";
                    $scope.contrasenaAux = "";

                    $scope.seleccionUsuario = "";
                    $scope.seleccionTipoUsuario = "";


                    $scope.busqueda = "";
                    $scope.listaUsuario;
                    $scope.listaTipoUsuario;

                    $http.get($scope.urlAllTipoUsuario)
                        .then(function (response) {

                            $scope.listaTipoUsuario = response.data;
                            $scope.tipoUsuario = $scope.listaTipoUsuario[0]._id;

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                }
            }
            $scope.listaEstado;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllUsuario)
                .then(function (response) {

                    $scope.listaUsuario = response.data;

                    var n1 = $scope.listaUsuario.length;
                    for (var i = 0; i < n1; i++) {
                        if ($scope.listaUsuario[i].estado == $scope.listaEstado[0].id)
                            $scope.listaUsuario[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaUsuario[i].estado = $scope.listaEstado[1];
                    }

                    var n = $scope.listaUsuario.length;
                    var k = 0;
                    for (var i = 0; i < n; i++) {
                        var tpUsu = {
                            id: $scope.listaUsuario[i].type_user
                        }

                        $http.post($scope.urlBuscarTipoUsuario, tpUsu)
                            .then(function (response) {

                                $scope.listaUsuario[k++].type_user = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoUsuario = function () {

        const obj = {
            name: $scope.nombresCompletos,
            username: $scope.nombreUsuario,
            identification_card: $scope.cedulaUsuario,
            password: $scope.contrasenaUsuario,
            phone: $scope.telefonoUsuario,
            email: $scope.correoUsuario,
            type_user: $scope.tipoUsuario,
            estado: $scope.estado
        }

        if (validarCamposVacios(obj)) {
            if (obj.password != "") {
                if (obj.identification_card.length == 10) {
                    if (obj.phone.length == 10 || obj.phone.length == 9) {
                        if (validarRucCedula(obj.identification_card)) {
                            if (validateEmail(obj.email)) {
                                $http.post($scope.urlRegister, obj)
                                    .then(function (response) {

                                        if (response.data.success == true) {
                                            $scope.iniciar();
                                            swal({
                                                title: "Ingreso Exitoso!",
                                                type: "success",
                                                timer: 1500,
                                                showConfirmButton: false
                                            });

                                            if ($scope.tipoUsuarioLogin.descripcion_tipo_usuario != "administrador") {

                                                $scope.logout();
                                                window.location = "../login.html";
                                            }
                                        } else
                                            $(document.getElementById("mensaje")).notify("C\u00E9dula o Usuario ya Existe", { position: "top right" });

                                    }, function errorCallback(response) {

                                        $(document.getElementById("ruc")).notify("C\u00E9dula ya Existe", { position: "right" });
                                    });
                            } else {
                                $(document.getElementById("correo")).notify("Correo Inv\u00E1lido!", { position: "right" });
                            }
                        } else {

                            $(document.getElementById("ruc")).notify("C\u00E9dula Inv\u00E1lida", { position: "right" });

                        }
                    } else {

                        $(document.getElementById("telefono")).notify("T\u00E9fono Inv\u00E1lido", { position: "right" });

                    }
                } else {
                    $(document.getElementById("ruc")).notify("C\u00E9dula Incompleta", { position: "right" });
                }
            } else {
                $(document.getElementById("psswd")).notify("Ingrese una Clave", { position: "right" });
            }
        }
    }

    $scope.modificarUsuario = function () {

        if ($scope.contrasenaUsuario == "") {
            var obj = {
                id: $scope.id,
                name: $scope.nombresCompletos,
                username: $scope.nombreUsuario,
                identification_card: $scope.cedulaUsuario,
                password: $scope.contrasenaAux,
                phone: $scope.telefonoUsuario,
                email: $scope.correoUsuario,
                type_user: $scope.tipoUsuario,
                estado: $scope.estado
            };

            if ($scope.seleccionUsuario != "") {
                if (validarCamposVacios(obj)) {
                    if (obj.identification_card.length == 10) {
                        if (obj.phone.length == 10 || obj.phone.length == 9) {
                            if (validarRucCedula(obj.identification_card)) {
                                if (validateEmail(obj.email)) {
                                    $http.post($scope.urlModificar, obj)
                                        .then(function (response) {

                                            if (response.data == true) {
                                                if ($scope.id == $scope.usuario._id) {

                                                    $scope.iniciar();
                                                    swal({
                                                        title: "Modificaci\u00F3n Exitosa!",
                                                        type: "success",
                                                        timer: 1500,
                                                        showConfirmButton: false
                                                    });
                                                    $scope.logout();
                                                    window.location = "../login.html";


                                                } else {
                                                    $scope.iniciar();
                                                    swal({
                                                        title: "Modificaci\u00F3n Exitosa!",
                                                        type: "success",
                                                        timer: 1500,
                                                        showConfirmButton: false
                                                    });
                                                }
                                            } else {

                                                $(document.getElementById("mensaje")).notify("C\u00E9dula o Usuario ya Existe", { position: "top right" });

                                            }

                                        }, function errorCallback(response) {
                                            $.notify("Error!", "error");
                                        });
                                } else {
                                    $(document.getElementById("correo")).notify("Correo Inv\u00E1lido!", { position: "right" });
                                }
                            } else {

                                $(document.getElementById("ruc")).notify("C\u00E9dula Inv\u00E1lida", { position: "right" });

                            }
                        } else {

                            $(document.getElementById("telefono")).notify("T\u00E9fono Inv\u00E1lido", { position: "right" });

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
        } else {
            var obj = {
                id: $scope.id,
                name: $scope.nombresCompletos,
                username: $scope.nombreUsuario,
                identification_card: $scope.cedulaUsuario,
                password: $scope.contrasenaUsuario,
                phone: $scope.telefonoUsuario,
                email: $scope.correoUsuario,
                type_user: $scope.tipoUsuario,
                estado: $scope.estado
            };

            if ($scope.seleccionUsuario != "") {
                if (validarCamposVacios(obj)) {
                    if (obj.identification_card.length == 10) {
                        if (obj.phone.length == 10 || obj.phone.length == 9) {
                            if (validarRucCedula(obj.identification_card)) {
                                if (validateEmail(obj.email)) {
                                    $http.post($scope.urlModificarPsswd, obj)
                                        .then(function (response) {

                                            if (response.data == true) {
                                                if ($scope.id == $scope.usuario._id) {

                                                    $scope.iniciar();
                                                    swal({
                                                        title: "Modificaci\u00F3n Exitosa!",
                                                        type: "success",
                                                        timer: 1500,
                                                        showConfirmButton: false
                                                    });
                                                    $scope.logout();
                                                    window.location = "../login.html";


                                                } else {
                                                    $scope.iniciar();
                                                    swal({
                                                        title: "Modificaci\u00F3n Exitosa!",
                                                        type: "success",
                                                        timer: 1500,
                                                        showConfirmButton: false
                                                    });
                                                }
                                            } else {

                                                $(document.getElementById("mensaje")).notify("C\u00E9dula o Usuario ya Existe", { position: "top right" });

                                            }

                                        }, function errorCallback(response) {
                                            $.notify("Error!", "error");
                                        });
                                } else {
                                    $(document.getElementById("correo")).notify("Correo Inv\u00E1lido!", { position: "right" });
                                }
                            } else {

                                $(document.getElementById("ruc")).notify("C\u00E9dula Inv\u00E1lida", { position: "right" });

                            }
                        } else {

                            $(document.getElementById("telefono")).notify("T\u00E9fono Inv\u00E1lido", { position: "right" });

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
    }

    $scope.buscarSeleccionListaUsuario = function () {

        if ($scope.seleccionUsuario != '' && $scope.seleccionUsuario != undefined) {

            $scope.selecUsu = $scope.seleccionUsuario;

            $scope.id = $scope.selecUsu._id;
            $scope.nombreUsuario = $scope.selecUsu.username;
            $scope.nombresCompletos = $scope.selecUsu.name;
            $scope.cedulaUsuario = $scope.selecUsu.identification_card;
            $scope.contrasenaUsuario = "";
            $scope.telefonoUsuario = $scope.selecUsu.phone;
            $scope.correoUsuario = $scope.selecUsu.email;
            $scope.tipoUsuario = $scope.selecUsu.type_user._id;
            $scope.estado = $scope.selecUsu.estado.id;

            $scope.contrasenaAux = $scope.selecUsu.password;
            $scope.userAux = $scope.selecUsu;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html";

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionUsuario = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaUsuario();

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

function validarCamposVacios(user) {

    if (user.username == "" || user.name == "" || user.email == "" || user.phone == "" ||
        user.identification_card == "" || user.type_user == "") {

        if (user.username == "") {
            $(document.getElementById("userName")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (user.identification_card == "") {
            $(document.getElementById("ruc")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (user.name == "") {
            $(document.getElementById("nombre")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (user.email == "") {
            $(document.getElementById("correo")).notify("Campo Vac\u00EDo", { position: "right" });
        }
        if (user.phone == "") {
            $(document.getElementById("telefono")).notify("Campo Vac\u00EDo", { position: "right" });
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