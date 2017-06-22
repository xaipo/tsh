var express = require('express');
var mongoose=  require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

// </editor-fold>
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/api', require('./Routers/apiUsuario'));
app.use('/api', require('./Routers/apiTipoUsuario'));
app.use('/api', require('./Routers/apiTipoTripulante'));
app.use('/api', require('./Routers/apiTripulante'));
app.use('/api', require('./Routers/apiTipoCombustible'));
app.use('/api', require('./Routers/apiTipoEmbarcacion'));
app.use('/api', require('./Routers/apiTipoMantenimiento'));
app.use('/api', require('./Routers/apiPropietario'));
app.use('/api', require('./Routers/apiPuerto'));
app.use('/api', require('./Routers/apiEstadoOrdenServicio'));
app.use('/api', require('./Routers/apiTipoMaterial'));
app.use('/api', require('./Routers/apiClientes'));
app.use('/api', require('./Routers/apiCombustible'));
app.use('/api', require('./Routers/apiMaterialPetreo'));
app.use('/api', require('./Routers/apiVehiculos'));
app.use('/api', require('./Routers/apiMateriales'));
app.use('/api', require('./Routers/apiMaterialesSeleccionados'));
app.use('/api', require('./Routers/apiAlimentos'));
app.use('/api', require('./Routers/apiDetalleMantenimiento'));
app.use('/api', require('./Routers/apiEmbarcacion'));
app.use('/api', require('./Routers/apiMantenimiento'));
app.use('/api', require('./Routers/apiOrdenServicio'));
app.use('/api', require('./Routers/apiPedido'));
app.use('/api', require('./Routers/apiContratoRecepcion'));




app.listen(3000, function(){
    console.log('Ejecudion 3000')
});