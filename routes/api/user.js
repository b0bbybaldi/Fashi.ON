const router = require("express").Router();
const userController = require('../../controllers/userController');

//require passport
var passport = require("../../passport/passport");
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../passport/isAuthenticated.js");

//signup route

router.route('/newuser')
    .post(userController.create);
    console.log("Hit user routes");

//login route
router.route('/login')
    .get(userController.findById);

//logout route
// router.route("/logout")
// if (req.user){
//     req.session.destroy(function (err) {
//         res.clearCookie('connect.sid')
//         req.logout();
//         res.redirect("/");
//     })
// } else
// res.redirect("/login")

//login specific to the user by id for profile page
router.route('/user/:id')
    .get(userController.findById)
    .put(userController.update);


module.exports = router;