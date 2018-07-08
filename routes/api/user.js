const router = require("express").Router();
const userController = require('../../controllers/userController');
//require passport
var passport = require("../../passport/passport");
var path = require("path");

//signup route
router.route('/newuser')
    .post(userController.create);
//login route
router.route('/signin')
    .get(userController.findById);
router.route("/occasions/:email")
    .get(userController.findOne);
    
//login specific to the user by id for profile page
router.route('/user/:id')
    .get(userController.findById)
    .put(userController.update);

router.route('/signup')
    .post(userController.authenticateUser);


module.exports = router;