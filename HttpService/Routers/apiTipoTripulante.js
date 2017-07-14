var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/saveTipoTripulante', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('tipo_tripulante');
        collection.insert(req.body, {

        });

        res.send('Info ingresada');

        db.close();

    });
});


router.post('/updateTipoTripulante', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            descripcion_tipo_tripulante: req.body.descripcion_tipo_tripulante,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('tipo_tripulante').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');

            res.send(result);
        });

        db.close();
    });
});

router.post('/getByIdTipoTripulante', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('tipo_tripulante').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});


router.get('/getAllTipoTripulante', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('tipo_tripulante').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoTipoTripulante.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;