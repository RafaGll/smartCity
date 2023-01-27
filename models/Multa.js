var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var MultaSchema = new Schema({
  calificacion: String,
  lugar: String,
  mes: Number,
  anio: Number,
  hora: String,
  imp_bol: Number,
  descuento: Boolean,
  puntos: Number,
  denunciante: String,
  hecho_bol: String,
  vel_limite: Number,
  vel_circula: Number,
  coordenada_x: Number,
  coordenada_x: Number
});

module.exports = mongoose.model('Multa', MultaSchema);