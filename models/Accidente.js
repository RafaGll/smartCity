var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AccidenteSchema = new Schema({
  num_expediente: String,
  fecha: String,
  hora: String,
  localizacion: String,
  numero: Number,
  cod_distrito: Number,
  distrito: String,
  tipo_accidente: String,
  estado_meteorologico: String,
  tipo_vehiculo: String,
  tipo_persona: String,
  rango_edad: String,
  sexo: String,
  cod_lesividad: Number,
  lesividad: String,
  coordenada_x_utm: Number,
  coordenada_y_utm: Number,
  positiva_alcohol: Boolean,
  positiva_droga: Boolean
});

module.exports = mongoose.model('Accidente', AccidenteSchema);