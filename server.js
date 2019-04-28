const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')
const queryString = require('querystring');
const mongoose = require('mongoose');

const Path = require('path');

//Agrego los controllers
const LoginController = require('./api/controllers/LoginController.js')

//Configuro los elementos estáticos
app.use(express.static('public'));
app.use('/statics', express.static(__dirname + '/statics'));

//Configuro el body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Configuro la dirección de las vistas
var dirVistas = Path.join(__dirname, './views');

//Conexión con la BD Mongo
var conString = 'mongodb://tacs:tacs01@ds147746.mlab.com:47746/tacs';

//Conexión a la BD
mongoose.connect(conString, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  //Se pone el puerto en escucha
  app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
  });
});

app.use((err, request, response, next) => {
    // log the error, for now just console.log
    console.log(err)
    response.status(500).send('Something broke!')
  });

//Se sirve el primer HTML al browser
app.get('/', (req, res) => {
    res.sendFile(dirVistas + '/index.html');
});

//Metodos que recibe la Api
app.get('/signin',LoginController.GetSignin);

app.post('/signin',LoginController.PostSignin);

