var Flight = require('../models/flight');

module.exports = {
  create,
  index,
};
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flight/:id', {flights});
    });
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, movie) {
    flight.reviews.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}