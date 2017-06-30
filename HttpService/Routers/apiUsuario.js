var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');


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
            nombres_completos: req.body.nombres_completos,
            correo_usuario: req.body.correo_usuario,
            nombre_usuario: req.body.nombre_usuario,
            contrasena_usuario: req.body.contrasena_usuario,
            telefono_usuario: req.body.telefono_usuario,
            tipo_usuario: req.body.tipo_usuario,
            cedula_usuario: req.body.cedula_usuario
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


router.get('/IngresoUsuario.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;