var express= require('express');
var router= express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;



router.post('/login',function(req,res){


    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var name = req.body.name;
        var password = req.body.password;
        var token = suid(200);
        var item={
            name:name,
            password:password,
            tk:token

        }
        db.collection('usuarios').findOneAndUpdate({"name":name,"password":password}, {$set: item},function(err, result) {
            assert.equal(null, err);
            console.log(result);
                res.send(result);

        });

        db.close();
    });
});


router.post('/saveUsuario',function(req,res){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection =db.collection('usuarios');
        collection.insert(req.body, {

        } );

        res.send('Info ingresada');

        db.close();

    });
});


router.get('/getAllUsuario',function(req,res){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection =db.collection('usuarios');

        collection.find().toArray(function(err, results) {
            console.log(results)
            // send HTML file populated with quotes here
            res.send(results);
        });

        db.close();

    });
});




module.exports=router;