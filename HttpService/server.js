var express = require ('express');
var mongoose=  require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;


var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/page',function(req, res){
    var nombre=req.body.name;
    console.log(nombre);
    res.send(nombre);
});

//suma
app.post('/operaciones',function(req, res){
    var numero1=req.body.nume1;
    var numero2=req.body.nume2;
    var suma = numero1 + numero2;
    res.send(JSON.stringify(suma));
});

//resta
app.post('/operaciones',function(req, res){
    var numero1=req.body.nume1;
    var numero2=req.body.nume2;
    var resta = numero1 - numero2;
    res.send(JSON.stringify(resta));
});

//multiplicacion
app.post('/operaciones',function(req, res){
    var numero1=req.body.nume1;
    var numero2=req.body.nume2;
    var multiplicacion = numero1 * numero2;
    res.send(JSON.stringify(multiplicacion));
});

//division
app.post('/operaciones',function(req, res){
    var numero1=req.body.nume1;
    var numero2=req.body.nume2;
    var division = numero1 / numero2;
    res.send(JSON.stringify(division));
});

app.listen(3000, function(){
    console.log('Ejecudion 3000')
});