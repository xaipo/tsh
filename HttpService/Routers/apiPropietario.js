var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/savePropietario', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('propietario');
        collection.insert(req.body, {

        });

        res.send('Info ingresada');

        db.close();

    });
});


router.post('/updatePropietario', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            nombre_propietario: req.body.nombre_propietario,
            cedula_propietario: req.body.cedula_propietario,
            telefono_propietario: req.body.telefono_propietario,
            celular_propietario: req.body.celular_propietario,
            correo_propietario: req.body.correo_propietario,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('propietario').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');

            res.send(result);
        });

        db.close();
    });
});

router.post('/getByIdPropietario', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('propietario').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.get('/getAllPropietarioActivos', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var cursor = db.collection('propietario').find({ "estado": "1" });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllPropietario', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('propietario').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoPropietario.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;