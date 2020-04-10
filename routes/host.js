const router = require("express").Router();

// Load Host model
const hostController = require("../controllers/host");

// Read all
router.get("/", hostController.read);

// Get host data from db
router.get("/:id", hostController.findById);

// update host data
router.post("/update/:id", hostController.update);

// get Events hosted
router.get("/:id/eventlist", hostController.getEventList);

// // Get info of one event hosted
// router.get('/:id/eventlist/:eventid', hostController.getListedEvent);

module.exports = router;
