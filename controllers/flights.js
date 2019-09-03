var Flight = require("../models/flight");

module.exports = {
  index,
  create,
  newFlight,
  show,
  update
};

function update(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destination.airport = req.body.airport;
    flight.destination.arrival = req.body.arrival;
    flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
    });
    console.log("destination is " + flight.destination.airport + " " + flight.destination.arrival);
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render("flights/show", { title: "Flight Detail", flight });
  });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render("flights/index", { flights });
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) {
      console.log(req.body);
      return res.render("flights/new");
    }

    console.log(flight);
    res.redirect("/flights");
  });
}
