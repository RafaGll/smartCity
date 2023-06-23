var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

// Models
var Temperatura = require('../models/Temperatura.js');

var db = mongoose.connection;

/* POST temperature data */
router.post('/', function (req, res) {
  var tempData = new Temperatura({
    valor: req.body.temperature
  });

  tempData.save(function(err) {
    if (err) res.status(500).send(err);
    else res.status(200).json({ message: 'Dato de temperatura guardado con éxito.' });
  });
});

/* GET temperature data listing */
router.get('/', function (req, res) {
  Temperatura.find().lean().exec(function(err, temperaturas) {
    if (err) res.status(500).send(err);
    else res.status(200).json(temperaturas);
  });
});

module.exports = router;
