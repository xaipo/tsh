var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/saveTipoMaterialPetreo', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('tipo_material_petreo');
        collection.insert(req.body, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();

    });
});


router.post('/updateTipoMaterialPetreo', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            descripcion_tipo_material: req.body.descripcion_tipo_material,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('tipo_material_petreo').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();
    });
});

router.post('/getByIdTipoMaterialPetreo', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('tipo_material_petreo').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.get('/getAllTipoMaterialPetreoActivos', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var cursor = db.collection('tipo_material_petreo').find({ "estado": "1" });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllTipoMaterialPetreo', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('tipo_material_petreo').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoTipoMaterialPetreo.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;