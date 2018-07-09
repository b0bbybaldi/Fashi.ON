const express = require("express");
const router = express.Router();
// const passport = require("passport");

const passport = require("../passport/passport");

const User = require("../models/user.js");


router.get("/user", (req, res) => {
    if (req.isAuthenticated()) {
        const currentUser = req.session.passport.user;

        // call db and find user by currenUser which is user id
        // get username and email
        console.log("hellur", currentUser)
        db.User
            .findOne({ _id: currentUser })
            .then(dbUser => {
                const user = {
                    loggedIn: true,
                    firstName: dbUser.firstName,
                    lastName: dbUser.lastName,
                    email: dbUser.email,
                    gender: dbUser.gender
                }
                console.log("25", user)
                res.json(user);
            })

    } else {
        const user = {
            loggedIn: false,
            firstName: '',
            lastName: '',
            email: '',
            gender: ''
        }
        res.json(user);
    }
});
//local auth signup
router.post("/signup", (req, res, next) => {

    console.log("43", req.body);

    passport.authenticate("local-signup", (err, user, info) => {
        if (err) {
            console.log(err)
            return next(err);
        }

        console.log("49", info);

        if (!user) {
            console.log("not a userr")
            return res.redirect("/");
        }

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
                console.log("confrim")
                return res.redirect("/");
            }

        })
    })(req, res, next);
});
//local auth sign in
router.post("/signin", (req, res, next) => {

    passport.authenticate("local-signin", (err, user, info) => {
        if (err) {
            console.log("41", err)
            return next(err);
        }

        if (!user) {
            console.log("not a user")
            req.flash('notify', 'This is a test notification.')
            return res.redirect("/");
        }

        req.login(user, (err) => {
            if (err) {
                return next(err);
            }

            res.cookie("firstName", user[0].firstName);
            res.cookie("lastName", user[0].lastName);
            res.cookie("email", user[0].email);
            res.cookie("gender", user[0].gender);
            res.cookie("user_id", user[0]._id);
            var userI = {
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                email: user[0].email,
                gender: user[0].gender
            }
            //redirect to path containing user id2
            return res.json(userI)
        })
    })(req, res, next);
});

router.get("/logout", function (req, res) {
    console.log("Hello, it's me")
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
        }
        res.clearCookie("user_id");
        res.clearCookie("firstName");
        res.clearCookie("lastName");
        res.clearCookie("email");
        res.clearCookie("gender");
        res.clearCookie("connect.sid");
        res.redirect("/");
        console.log("Hello from the other side.")
    });
});

module.exports = router;