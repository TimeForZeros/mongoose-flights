var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/flights/:id/reviews', reviewsCtrl.create);
//router.post('/flights/:id/reviews', reviewsCtrl.update);

module.exports = router;