var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;



router.post('/login', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var name = req.body.name;
        var password = req.body.password;
        var token = suid(200);
        var item = {
            name: name,
            password: password,
            tk: token

        }
        db.collection('usuarios').findOneAndUpdate({ "name": name, "password": password }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            res.send(result);

        });

        db.close();
    });
});


router.post('/saveUsuario', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('usuarios');
        collection.insert(req.body, {

        });

        res.send('Info ingresada');

        db.close();

    });
});


router.post('/updateUsuario', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            nombre_usuario: req.body.nombre_usuario,
            cedula_usuario: req.body.cedula_usuario,
            contrasena_usuario: req.body.contrasena_usuario,
            telefono_usuario: req.body.telefono_usuario,
            correo_usuario: req.body.contrasena_usuario,
            tipo_usuario: req.body.tipo_usuario
        };



        var id = req.body.id;
        db.collection('usuarios').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');

            res.send(result);
        });

        db.close();
    });
});

router.post('/getByIdUsuario', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('usuarios').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});


router.get('/getAllUsuario', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('usuarios').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});




module.exports = router;