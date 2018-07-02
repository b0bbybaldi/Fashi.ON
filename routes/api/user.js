const router = require("express").Router();
const userController = require('../../controllers/userController');

//login route
router.route('/')
    .get(userController.findById);

router.route('/api/user')
    .post(userController.create);

//login specific to the user by id for profile page
router.route('/api/user/:id')
    .get(userController.findById)
    .put(userController.update);


module.exports = router;