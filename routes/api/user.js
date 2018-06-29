const router = require("express").Router();
const userController = require('../../controllers/userController');


router.route('/')
    .get(userController.findById);

router.route('/api/user')
    .post(userController.create);


router.route('/api/user/:id')
    .get(userController.findById)
    .put(userController.update);


module.exports = router;