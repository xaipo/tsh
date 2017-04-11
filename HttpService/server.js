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
app.use('/api',require('./Routers/apiUsuario'));
app.use('/api',require('./Routers/apiTipoUsuario'));


app.listen(3000, function(){
    console.log('Ejecudion 3000')
});