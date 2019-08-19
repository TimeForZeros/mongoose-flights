var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.newFlight);
router.post('/', flightsCtrl.create);
// router.post('/', flightsCtrl.create);

module.exports = router;

