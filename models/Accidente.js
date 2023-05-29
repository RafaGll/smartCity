var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AccidenteSchema = new Schema({
  num_expediente: String,
  fecha: String,
  hora: String,
  localizacion: String,
  numero: String,
  cod_distrito: Number,
  distrito: String,
  tipo_accidente: String,
  estado_meteorologico: String,
  tipo_vehiculo: String,
  tipo_persona: String,
  rango_edad: String,
  sexo: String,
  cod_lesividad: String,
  lesividad: String,
  coordenada_x_utm: String,
  coordenada_y_utm: String,
  positiva_alcohol: String,
  positiva_droga: String
});

module.exports = mongoose.model('Accidente', AccidenteSchema);