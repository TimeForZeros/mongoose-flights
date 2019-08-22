var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"]
  },
  arrival: { type: Date }
});


var flightSchema = new Schema({
  airline: { type: String, enum: ["United", "Southwest", "American"] },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: { type: Date },
  airport: { type: String, enum: ["AUS", "DAL", "LAX", "SEA"], default: "SEA" },
  destination: destinationSchema
});


module.exports = mongoose.model("Flight", flightSchema);
module.exports = mongoose.model("Destination", destinationSchema);