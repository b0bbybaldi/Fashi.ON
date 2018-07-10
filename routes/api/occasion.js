const router = require("express").Router();
const occasionController = require("../../controllers/occasionController")

router.route("/newoccasion")
.post(occasionController.create);

router.route("/occasion/:id")
.get(occasionController.findById)
.put(occasionController.update)
.delete(occasionController.remove);

router.route("/:data")
.get(occasionController.getSuggestions);

module.exports = router;