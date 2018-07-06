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
    occasion: {
        type: Schema.Types.ObjectId,
        ref: "Occasion"
    }

});



//This will check if an unhashed password entered by the 
//user can be compared to the hashed password stored in our database
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
userSchema.generateHash = function (user) {
    return bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
};
const User = mongoose.model("User", userSchema);

module.exports = User;