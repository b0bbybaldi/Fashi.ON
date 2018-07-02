const router = require("express").Router();
const occasionController = require("../../controllers/occasionController")

router.route("/api/occasion")
.post(occasionController.create);

router.route("/api/occasion/:id")
.get(occasionController.findById)
.put(occasionController.update)
.delete(occasionController.delete);

module.exports = router;




