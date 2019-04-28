exports.GetSignin = function (req, res) {
    console.log("Recibí el pedido Get");
    var usuario = {usuario: "Guido", Password: "1234"}
    res.send(usuario);
};

exports.CrearUsuario = function (req,res) {
    console.log("Recibí el pedido Post");
    console.log("Body keys:" + Object.keys(req.body));
    console.log("usuario: "+ req.body.usuario);
    console.log("usuario: "+ req.body.password);
    var retorno = {CodigoRetorno: "00"};
    res.status(200).send(retorno);
};