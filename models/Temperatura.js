var mongoose = require('mongoose');

var TemperaturaSchema = new mongoose.Schema({
  valor: Number,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Temperatura', TemperaturaSchema);
