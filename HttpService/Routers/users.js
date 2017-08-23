const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Registro
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        type_user: req.body.type_user,
        phone: req.body.phone,
        identification_card: req.body.identification_card,
        estado: req.body.estado
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

// AUTENTICACION 
router.post('/autenticacion', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {

        if (err) throw err;
        if (!user) {

            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePass(password, user.password, (err, isMatch) => {
            
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 //1 semana esta en segundos
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        estado: user.estado,
                        type_user: user.type_user
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong Password!' });
            }
        })
    })

});

// PERFIL 
/*router.get('/perfil', (req, res, next) => {
    res.send('PERFIL');
});*/

router.get('/perfil', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    
    res.json({ user: req.user });

});

module.exports = router;