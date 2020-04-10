const router = require("express").Router();

// Fire Controller
const eventController = require("../controllers/event");

// Get all events
router.get("/", eventController.read);

// Get an event data from db
router.get("/:id", eventController.findById);

// Add new event to db
router.post("/create", eventController.create);

// update event data
router.post("/update/:id", eventController.update);

// add images of the event
router.post("/add/images/:id", eventController.addImages);

// // Delete an event
// router.delete();

module.exports = router;
