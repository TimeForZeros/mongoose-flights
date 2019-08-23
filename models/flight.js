var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"],
    default: 'SEA'
  },
  arrival: { type: Date }
});
var reviewSchema = new Schema({
  content: String,
  rating: { type: Number, min: 1, max: 5, default: 5 }
});

var flightSchema = new Schema({
  airline: { type: String, enum: ["United", "Southwest", "American"] },
  airport: { type: String, enum: ["AUS", "DAL", "LAX", "SEA"], default: "SEA" },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: { type: Date },
  destination: [destinationSchema],
  reviews: [reviewSchema]
});

module.exports = mongoose.model("Flight", flightSchema);
