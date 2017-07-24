var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/saveTripulante', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('tripulante');
        collection.insert(req.body, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();

    });
});


router.post('/updateTripulante', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            nombre_tripulante: req.body.nombre_tripulante,
            cedula_tripulante: req.body.cedula_tripulante,
            telefono_tripulante: req.body.telefono_tripulante,
            tipo_tripulante: req.body.tipo_tripulante,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('tripulante').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();
    });
});

router.post('/getByIdTripulante', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var id = req.body.id;
        db.collection('tripulante').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.get('/getAllTripulanteActivos', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var cursor = db.collection('tripulante').find({ "estado": "1" });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.post('/getAllTripulanteCapitanes', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var idCapitan = req.body.idCapitan;
        var idTimonel = req.body.idTimonel;

        var cursor = db.collection('tripulante').find({ "tipo_tripulante": { $in: [idCapitan, idTimonel] }, "estado": "1" });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllTripulante', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('tripulante').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoTripulante.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;