var mongoose = require("mongoose");
// SCHEMA
var placeSchema = new mongoose.Schema({
    title: String,
    topic: String,
    describe: String,
    image: String,
    // content: String
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

//Model explort
module.exports = mongoose.model("Place", placeSchema);