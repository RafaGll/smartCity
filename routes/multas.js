var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

//Models
var Multa = require('../models/Multa.js');

var db = mongoose.connection;

/* GET multas listing */
router.get('/', function (req, res) {
    Multa.find().exec(function(err, multas) {
      if (err) res.status(500).send(err);
      else res.status(200).json(multas);
    });
});

/* GET single multa by Id */
router.get('/:id', function (req, res, next) {
    Multa.findById(req.params.id, function (err, multainfo) {
      if (err) res.status(500).send(err);
      else res.status(200).json(multainfo);
    });
});

module.exports = router;