//encrypts Oauth keys
// require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user.js");
//middleware to encrypt passwords
const bCrypt = require("bcrypt-nodejs");

// Passport session setup
passport.serializeUser(function(user, done) {
    console.log("user",user,"done", done)
    console.log("serialize" + user[0]._id);
    done(null, user[0]._id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    console.log("deserialize" + id);
    User.findById(id).then(function(user) {
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
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true

    },
    function(req, email, password, done) {
        process.nextTick(function() {
            User.find({
                email: email
            }).then(function(user) {
                if (user.length > 0) {
                    console.log('signupMessage', 'That email is already taken.');
                    
                    return done(null, false, { message: 'That email is already taken.' });
                } else {
                    const userPassword = generateHash(req.body.password);
                    const newUser = {
                        userName: req.body.userName,
                        email: req.body.email,
                        password: userPassword
                        
                    }
                    User.create(newUser).then(function(dbUser, created) {
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
    function(req, email, password, done) {

        const isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }

        User.find({
                email: email
        }).then(function(user) {
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


        }).catch(function(err) {
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