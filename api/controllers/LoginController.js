const Usuario = require('../models/Usuario.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

const secret = config.secret;

exports.GetSignin = function (req, res) {
    var usuario = {usuario: "Guido", Password: "1234"}
    res.send(usuario);
};

exports.Login = function (req, res) {
    var nombre = req.query.nombre;
    var pass = req.query.pass;
    Usuario.findOne({ 'nombre': nombre }).exec()
    .then(usuario => {
        if (usuario.password == pass )
        {
            // Issue token
            const payload = { nombre };
            const token = jwt.sign(payload, secret, {
                expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
        }
        else
        {
            res.status(401);
        }
    })
    .catch((err) => res.status(404).send(err));
};

exports.Logout = function (req, res) {
    res.clearCookie('token');
    res.status(200).send();
};

exports.CrearUsuario = function (req,res) {
    var retornoOk = {CodigoRetorno: "00"};

    var usuario = new Usuario(
    { 
        nombre: req.body.usuario,
        password: req.body.password
    });
    usuario.save()
    .then((usuario) =>
    { 
        // Issue token
        const nombre = usuario.nombre;
        const payload = { nombre };
        const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
        });
        res.cookie('token', token, { httpOnly: true })
                .status(200).send(retornoOk);        
    })
    .catch((err) => {
        res.status(404).send(err)
    });
};


exports.PruebaLog = function (req, res) {
    res.status(200).send();
};