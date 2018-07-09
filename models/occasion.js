const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Will add the Currency type to the Mongoose Schema types
// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;

const occasionSchema = new Schema({

    dresscode: {
        type: String,
        required: true
    },
    colors: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    items: {
        type: String,
        required: true
    }

});

const Occasion = mongoose.model("Occasion", occasionSchema);

module.exports = Occasion;