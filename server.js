const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')
//const queryString = require('querystring');
const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const config = require('./api/config/config.json');


const withAuth = require('./api/middleware.js');

const Path = require('path');

//Agrego los controllers
const LoginController = require('./api/controllers/LoginController.js');
const VenuesController = require('./api/controllers/VenuesController.js')

//Configuro los elementos estáticos
app.use(express.static('public'));
app.use('/statics', express.static(__dirname + '/statics'));

//Configuro el body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Configuro la dirección de las vistas
var dirVistas = Path.join(__dirname, './views');

//Conexión con la BD Mongo
//var conString = 'mongodb://tacs:tacs01@ds147746.mlab.com:47746/tacs';
var conString = config.DBConString;

mongoose.connect(conString, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conexión realizada a BD");
    //Se pone el puerto en escucha
    app.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err)
      }
      console.log(`server is listening on ${port}`)
      });
});

app.use(cookieParser());

//Se sirve el primer HTML al browser
app.get('/', (req, res) => {
    res.sendFile(dirVistas + '/index.html');
});

//Metodos que recibe la Api
app.get('/login',LoginController.Login);

app.post('/crearUsuario',LoginController.CrearUsuario);

app.get('/logout',withAuth, LoginController.Logout);

app.get('/pruebaLog',withAuth, LoginController.PruebaLog);

app.get('/venues', VenuesController.GetVenues);

