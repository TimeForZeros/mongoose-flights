
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ticketSchema = new Schema({

});


module.exports = mongoose.model('Ticket', ticketSchema);