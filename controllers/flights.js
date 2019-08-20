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
    // remove whitespace next to commas
    // req.body.airline = req.body.airline.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    // if (req.body.airline) req.body.airline = req.body.airline.split(',');
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('/flights/index');
      console.log(flight);
      res.redirect('/flights');
      // for now, redirect right back to new.ejs
      //res.redirect(`'/flight/${flight._id}'`);
    });
  }