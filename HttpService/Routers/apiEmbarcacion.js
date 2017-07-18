var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/saveEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('embarcacion');
        collection.insert(req.body, {

        });

        res.send('Info ingresada');

        db.close();

    });
});


router.post('/updateEmbarcacion', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            nombre_embarcacion: req.body.nombre_embarcacion,
            num_matricula: req.body.num_matricula,
            eslora_total: req.body.eslora_total,
            manga: req.body.manga,
            puntual: req.body.puntual,
            calado: req.body.calado,
            fecha_construccion: req.body.fecha_construccion,
            propietario: req.body.propietario,
            propulsion: req.body.propulsion,
            tipo_combustible: req.body.tipo_combustible,
            tonelaje_bruto: req.body.tonelaje_bruto,
            capacidad_carga: req.body.capacidad_carga,
            tipo_embarcacion: req.body.tipo_embarcacion,
            capitan_embarcacion: req.body.capitan_embarcacion,
            tripulantes: req.body.tripulantes,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('embarcacion').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');

            res.send(result);
        });

        db.close();
    });
});

router.post('/getByIdEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('embarcacion').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.post('/getAllEmbarcacionDisponibles', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var idDisponible = req.body.idDisponible;

        var cursor = db.collection('embarcacion').find({ "estado": idDisponible});
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.post('/getAllEmbarcacionDisponiblesViaje', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var idDisponible = req.body.idDisponible;
        var idViaje = req.body.idViaje;

        var cursor = db.collection('embarcacion').find({ "estado": { $in: [idDisponible, idViaje] } });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllEmbarcacion', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('embarcacion').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoEmbarcacion.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;