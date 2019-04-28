const Usuario = require('../models/Usuario.js');

exports.GetSignin = function (req, res) {
    var usuario = {usuario: "Guido", Password: "1234"}
    res.send(usuario);
};

exports.Login = function (req, res) {
    var nombre = req.query.nombre;
    var pass = req.query.pass;
    Usuario.findOne({ 'nombre': nombre }).exec()
    .then(usuario => {
        if (usuario)
            var resultado = {resultado: "OK"}
        else
            var resultado = {resultado: "Error"}
        res.status(200).send(resultado);
    })
    .catch((err) => res.status(404).send(err));
};

exports.CrearUsuario = function (req,res) {
    var retorno = {CodigoRetorno: "00"};

    var usuario = new Usuario(
        { 
            nombre: req.body.usuario,
            password: req.body.password
        });
        /*
    usuario.save(function (err, usuario) {
        if (err) res.status(404).send(err);
        res.status(200).send();
        });
        */
    usuario.save()
    .then((usuario) => res.status(200).send())
    .catch((err) => res.status(404).send(err));
};