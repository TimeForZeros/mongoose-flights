var Flight = require ('../models/flight');

module.exports = {

    index,
    create,
    newFlight,
    show
}

function show(req, res) {
          res.render("flights/show", {
           // airline, flightNo, departs
  })}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

 function newFlight(req, res) {
     res.render('flights/new');
 };

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
       if (err) {
           console.log(req.body.departs);
        return res.render('flights/new');
    }

       console.log(flight);
      res.redirect('/flights');
    });
}