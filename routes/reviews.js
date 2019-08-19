var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/flights/:id', reviewsCtrl.index);
router.post('/flights/:id/reviews', reviewsCtrl.create);

module.exports = router;