const request = require('request');

const CLIENT_ID =       "LSTJXWTU3HOOBPRUP0XKJ4AP3ZX3CKADYSUE2ENT52BDWDTU";
const CLIENT_SECRET =   "SWUBA43NDRCJ22FY5OXUSUKISC0SUJJU3AYACUBEDSNDT1CP";


exports.GetVenues = function (req, response) {
    var latitud = req.query.latitud;
    var longitud = req.query.longitud;
    var texto     = req.query.texto;

    var ll = latitud.toString() + ',' + longitud.toString();

    //console.log(id);
    request({
        url: 'https://api.foursquare.com/v2/venues/search',
        method: 'GET',
        qs: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          //ll: '40.7243,-74.0018',
          ll: ll,
          query: texto.toString(),
          radius: '250',
          v: '20180323',
          limit: 10
        }
      }, function(err, res, body) {
        if (err) {
          //console.error(err);
          response.status(500).send();
        } 
        //console.log( Object.keys(res.body));
        var respuesta = JSON.parse(body);
        console.log("Respuesta OK");
        console.log(respuesta.response.venues);
        response.status(200).send(respuesta.response.venues);
      });
};