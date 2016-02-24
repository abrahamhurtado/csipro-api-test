var express = require('express');
var dataEventos = require('../api/hardcodedEventsData').eventos;
var dataEventosIndividuales = require('../api/hardcodedEventData');

var router = express.Router();

router.get('/eventos', (req, res) => {
  res.status(200).json(data);
});

router.get('/eventos/:id', (req, res) => {
  res.status(200).json(dataEventosIndividuales);
});

module.exports = router;
