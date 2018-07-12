const router = require("express").Router();
const suggestionController = require("../../controllers/suggestionController")

router.route("/:data")
.get(suggestionController.getSuggestions);

module.exports = router;