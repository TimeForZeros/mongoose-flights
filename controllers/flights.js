var Flight = require("../models/flight");
var Ticket = require("../models/ticket");

module.exports = {
  index,
  create,
  newFlight,
  show,
  update
};

function update(req, res) {
  Flight.findById(req.params.id, function(err, flight) {

    var tickets = new Ticket(req.body.seat);
    tickets.save(function(err){
      if (err) {
        console.log(req.body);
        return res.render(flights.new);
      }
flight.destination.push(req.body);
    flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
    });
  });
});
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render("flights/show", { title: "Flight Detail", flight, tickets });
      });
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