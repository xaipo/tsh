var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/saveOrdenServicio', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('orden_servicio');
        collection.insert(req.body, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();

    });
});


router.post('/updateOrdenServicio', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            cliente: req.body.cliente,
            detalle: req.body.detalle,
            embarcacion: req.body.embarcacion,
            estado: req.body.estado,
            fecha_emision: req.body.fecha_emision,
            fecha_entrega: req.body.fecha_entrega,
            puerto_embarque: req.body.puerto_embarque,
            puerto_desembarque: req.body.puerto_desembarque,
            orometro_inicial_m1: req.body.orometro_inicial_m1,
            orometro_inicial_m2: req.body.orometro_inicial_m2,
            orometro_final_m1: req.body.orometro_final_m1,
            orometro_final_m2: req.body.orometro_final_m2,
            hora_salida: req.body.hora_salida,
            hora_arribo: req.body.hora_arribo,
            carga_material_petreo: req.body.carga_material_petreo,
            carga_vehiculo: req.body.carga_vehiculo,
            observaciones: req.body.observaciones,
            combustible_consumo: req.body.combustible_consumo,
            combustible_transporte: req.body.combustible_transporte,
            observacion_maquinaria: req.body.observacion_maquinaria,
            contrato_recepcion: req.body.contrato_recepcion,
            capitan_embarcacion: req.body.capitan_embarcacion,
            num_orden: req.body.num_orden
        };



        var id = req.body.id;
        db.collection('orden_servicio').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();
    });
});

router.post('/getByIdOrdenServicio', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('orden_servicio').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.get('/getOrdenServicioEstadoViajeProceso', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var cursor = db.collection('orden_servicio').find({ "estado": { $in: ["594be6b980b7e1645404787d", "594be6ca80b7e1645404787e"] } });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllOrdenServicio', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('orden_servicio').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoOrdenServicio.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;