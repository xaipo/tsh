var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;

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


//router.post('/updateEmbarcacion', function (req, res) {


//    MongoClient.connect(url, function (err, db) {
//        assert.equal(null, err);
//        console.log(req.body);
//        var item = {
//            nombre_cliente: req.body.nombre_cliente,
//            ruc_cliente: req.body.ruc_cliente,
//            direccion_cliente: req.body.direccion_cliente,
//            telefono_cliente: req.body.telefono_cliente,
//            correo_cliente: req.body.correo_cliente,
//            tipo_cliente: req.body.tipo_cliente
//        };



//        var id = req.body.id;
//        db.collection('embarcacion').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
//            assert.equal(null, err);
//            console.log('Item updated');

//            res.send(result);
//        });

//        db.close();
//    });
//});

//router.post('/getByIdEmbarcacion', function (req, res) {

//    MongoClient.connect(url, function (err, db) {
//        assert.equal(null, err);
//        console.log(req.body);

//        var id = req.body.id;
//        db.collection('embarcacion').findOne({ "_id": objectId(id) }, function (err, result) {
//            assert.equal(null, err);
//            console.log(result);
//            console.log('Item loaded');
//            res.send(result);
//        });

//        db.close();
//    });
//});



router.get('/getAllEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('embarcacion');

        collection.find().toArray(function (err, results) {
            console.log(results)
            // send HTML file populated with quotes here
            res.send(results);
        });

        db.close();

    });
});


module.exports = router;