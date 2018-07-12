const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
// const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer"
        ]
    },
    gender: {
        type: String,
        required: true
    },
    occasions: [{
        type: Schema.Types.ObjectId,
        ref: "Occasion"
    }]

});


const User = mongoose.model("User", userSchema);

module.exports = User;