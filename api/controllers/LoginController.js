exports.GetSignin = function (req, res) {
    console.log("Recibí el pedido Get");
    var usuario = {usuario: "Guido", Password: "1234"}
    res.send(usuario);
};

exports.PostSignin = function (req,res) {
    console.log("Recibí el pedido Post");
    var title = req.body.title;
    //console.log(req);
    console.log("Body keys:" + Object.keys(req.body));
    console.log("Title: "+ title);
    res.status(200).send();
};