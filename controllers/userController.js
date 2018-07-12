const db = require('../models');
const User = require('../models/user');
const passport = require('passport')
const bCrypt = require("bcrypt-nodejs");

module.exports = {
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {

        User.find({email: req.params.email})
        .populate("occasions")
            .then(function(dbUser) { 
                console.log("hi", dbUser);
                // console.log("hello", dbUser[0].occasion[0]);
                res.json(dbUser);
            })
            .catch(err => console.log(err));
    },
    authenticateUser: function (req, res, next) {
        console.log("#################################");
        passport.authenticate("local-signup", (err, user, info) => {
            if (err) {
                console.log(err)
                return next(err);
            }
    
            if (!user) {
                console.log("not a user", user);
                return res.redirect("/");
            }
            console.log("test");
            req.login(user, (err) => {
                if (err) {
                    console.log("auth error")
                    return next(err);
                } else {
                    res.cookie("firstName", req.user.firstName);
                    res.cookie("lastName", req.user.lastName);
                    res.cookie("email", req.body.email);
                    res.cookie("gender", req.user.gender);
                    res.cookie("user_id", req.user.id);
                    console.log("confirm")
                    return res.redirect("/");
                }
    
            })
        })(req, res, next);
    },
    update: function (req, res) {

        function generateHash(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        req.body.password = generateHash(req.body.password);
      
        db.User
            .findOneAndUpdate({ email: req.body.email }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
