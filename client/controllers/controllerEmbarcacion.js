app.controller('ControllerEmbarcacion', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
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

    $scope.busqueda;
    $scope.listaTipoEmbarcacion;
    $scope.listaTipoCombustible;

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoEmbarcacion();
        $scope.urlAllTipoCombustible = myProvider.getUrlAllTipoCombustible();
        $scope.urlAllTipoEmbarcacion = myProvider.getUrlAllTipoEmbarcacion();

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

    $scope.ingresoEmbarcacion = function () {

        var obj = {
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
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }   

}]);