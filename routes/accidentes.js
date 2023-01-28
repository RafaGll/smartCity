var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

//Models
var Accidente = require('../models/Accidente.js');

var db = mongoose.connection;

/* GET accidentes listing */
router.get('/', function (req, res) {
  Accidente.find().lean().exec(function(err, accidentes) {
    if (err) res.status(500).send(err);
    else res.status(200).json(accidentes);
  });
});

/* GET single accidente by Id */
router.get('/:id', function (req, res, next) {
  Accidente.findById(req.params.id, function (err, accidenteinfo) {
    if (err) res.status(500).send(err);
    else res.status(200).json(accidenteinfo);
  }).lean();
});

module.exports = router;