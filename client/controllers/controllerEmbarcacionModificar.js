app.controller('ControllerEmbarcacionModificar', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.urlModificar;
    $scope.urlAllEmbarcacion;
    $scope.urlAllTipoUsuario;
    $scope.urlAllTipoCombustible;
    $scope.urlAllTipoEmbarcacion;

    //atributos
    $scope.id;
    $scope.nombreEmbarcacion;
    $scope.numeroMatricula;
    $scope.esloraTotal;
    $scope.manga;
    $scope.puntual;
    $scope.calado;
    $scope.fechaConstruccion;
    $scope.propietario;
    $scope.propulsion;
    $scope.tipoCombustible;
    $scope.tonelajeBruto;
    $scope.capacidadCarga;
    $scope.tipoEmbarcacion;


    //Selecciones
    $scope.seleccion;
    $scope.seleccionEmbarcacion;

    //Listas
    $scope.busqueda;
    $scope.listaTipoEmbarcacion;
    $scope.listaEmbarcacion;
    $scope.listaTipoCombustible;

    $scope.iniciar = function () {
        $scope.urlModificar = myProvider.getUrlModificarEmbarcacion();
        $scope.urlAllEmbarcacion = myProvider.getUrlAllEmbarcacion();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();

        $scope.id = "";
        $scope.nombreEmbarcacion = "";
        $scope.numeroMatricula = "";
        $scope.esloraTotal = "";
        $scope.manga = "";
        $scope.puntual = "";
        $scope.calado = "";
        $scope.fechaConstruccion = "";
        $scope.propietario = "";
        $scope.propulsion = "";
        $scope.tipoCombustible = "";
        $scope.tonelajeBruto = "";
        $scope.capacidadCarga = "";
        $scope.tipoEmbarcacion = "";

        $http.get($scope.urlAllEmbarcacion)
            .then(function (response) {

                $scope.listaEmbarcacion = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllTipoCombustible)
            .then(function (response) {

                $scope.listaTipoCombustible = response.data;
                $scope.tipoCombustible = $scope.listaTipoCombustible[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

        $http.get($scope.urlAllTipoEmbarcacion)
            .then(function (response) {

                $scope.listaTipoEmbarcacion = response.data;
                $scope.tipoEmbarcacion = $scope.listaTipoEmbarcacion[0]._id;

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarEmbarcacion = function () {

        var obj = {
            id: $scope.id,
            nombre_embarcacion: $scope.nombreEmbarcacion,
            num_matricula: $scope.numeroMatricula,
            eslora_total: $scope.esloraTotal,
            manga: $scope.manga,
            puntual: $scope.puntual,
            calado: $scope.calado,
            fecha_construccion: $scope.fechaConstruccion,
            propietario: $scope.propietario,
            propulsion: $scope.propulsion,
            tipo_combustible: $scope.tipoCombustible,
            tonelaje_bruto: $scope.tonelajeBruto,
            capacidad_carga: $scope.capacidadCarga,
            tipo_embarcacion: $scope.tipoEmbarcacion
        };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionListaEmbarcacion = function () {

        if ($scope.seleccionEmbarcacion != '' && $scope.seleccionEmbarcacion != undefined) {

            $scope.selecEmbarJS = JSON.parse($scope.seleccionEmbarcacion);

            $scope.id = $scope.selecEmbarJS._id;
            $scope.nombreEmbarcacion = $scope.selecEmbarJS.nombre_embarcacion;
            $scope.numeroMatricula = $scope.selecEmbarJS.num_matricula;
            $scope.esloraTotal = $scope.selecEmbarJS.eslora_total;
            $scope.manga = $scope.selecEmbarJS.manga;
            $scope.puntual = $scope.selecEmbarJS.puntual;
            $scope.calado = $scope.selecEmbarJS.calado;
            $scope.fechaConstruccion = $scope.selecEmbarJS.fecha_construccion.toString();
            $scope.propietario = $scope.selecEmbarJS.propietario;
            $scope.propulsion = $scope.selecEmbarJS.propulsion;
            $scope.tipoCombustible = $scope.selecEmbarJS.tipo_combustible;
            $scope.tonelajeBruto = $scope.selecEmbarJS.tonelaje_bruto;
            $scope.capacidadCarga = $scope.selecEmbarJS.capacidad_carga;
            $scope.tipoEmbarcacion = $scope.selecEmbarJS.tipo_embarcacion;

        }
    }

}]);