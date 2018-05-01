var mongoose = require("mongoose");
// SCHEMA
var placeSchema = new mongoose.Schema({
    title: String,
    topic: String,
    describe: String,
    image: String,
    content: String
});

//Model explort
module.exports = mongoose.model("Place", placeSchema);