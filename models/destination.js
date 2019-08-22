var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"]
  },
  arrival: { type: Date }
});


module.exports = mongoose.model('Destination', destinationSchema);