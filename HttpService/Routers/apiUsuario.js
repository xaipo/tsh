var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/saveUsuario', function (req, res) {

    var newUser = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: psswd,
        phone: req.body.phone,
        identification_card: req.body.identification_card,
        type_user: req.body.type_user
    }

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var collection = db.collection('users');
        collection.insert(newUser, {

        });

        res.send('Info ingresada');

        db.close();

    });

});

router.post('/updateUsuarioPassword', function (req, res) {
    var item;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;

            item = {
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: hash,
                phone: req.body.phone,
                type_user: req.body.type_user,
                identification_card: req.body.identification_card
            };

        });
    });

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var id = req.body.id;
        db.collection('users').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');

            res.send(result);
        });

        db.close();
    });
});

router.post('/updateUsuario', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            type_user: req.body.type_user,
            identification_card: req.body.identification_card
        };

        var id = req.body.id;
        db.collection('users').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
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
        db.collection('users').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.post('/getByNameUsuario', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var user = req.body.username;
        db.collection('users').findOne({ "username": user }, function (err, result) {
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
        var cursor = db.collection('users').find();
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