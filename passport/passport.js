//encrypts Oauth keys
// require("dotenv").config();
// const passport = require("passport");
// const LocalStrategy = require("passport-local");

const passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;


// const User = require("../models");
const db = require('../models');
//middleware to encrypt passwords
const bCrypt = require("bcrypt-nodejs");

// Passport session setup
passport.serializeUser(function (user, done) {
    console.log("user", user, "done", done)
    done(null, user[0]._id);
    console.log("serialize" + user[0]._id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
    console.log("deserialize" + id);
    db.User.findById(id).then(function (user) {
        if (user) {
            console.log("deserialize", user)
            done(null, user);
        } else {
            done(user[0].errors, null);
        }
    });
});

//passport config for local signup
passport.use('local-signup', new LocalStrategy({
    firstnameField: 'firstName',
    lastnameField: 'lastName',
    usernameField: 'email',
    passwordField: 'password',
    genderField: 'gender',
    passReqToCallback: true
},
    function (req, email, password, done) {
        process.nextTick(function () {
            db.User.find({
                email: email
            }).then(function (user) {
                console.log("44", "hahaha");
                if (user.length > 0) {
                    console.log('signupMessage', 'That email is already taken.');

                    return done(null, false, { message: 'That email is already taken.' });
                } else {
                    const userPassword = generateHash(req.body.password);
                    const newUser = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        gender: req.body.gender,
                        email: req.body.email,
                        password: userPassword

                    }
                    db.User.create(newUser).then(function (dbUser, created) {
                        if (!dbUser) {
                            return done(null, false);
                        } else {
                            return done(null, dbUser);
                        }
                    })
                }
            });

        });
    }
));

//passport config for local signin
passport.use('local-signin', new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password',

    passReqToCallback: true // allows us to pass back the entire request to the callback
},
    function (req, email, password, done) {

        const isValidPassword = function (userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }

        db.User.find({
            email: email
        }).then(function (user) {
            console.log("user", user[0])
            if (user[0].length <= 0) {
                console.log("'Email does not exist'")
                return done(null, false, {
                    message: 'Email does not exist'
                });
            }
            if (!isValidPassword(user[0].password, password)) {
                console.log("yo?")
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);


        }).catch(function (err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
    }
));


//generate hash for password
function generateHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

module.exports = passport;