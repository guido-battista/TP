var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var usuarioSchema = new Schema({
  //_id:       { type: String},
  nombre:      { type: String },
  password:    { type: String }
});

module.exports = mongoose.model('Usuarios', usuarioSchema);