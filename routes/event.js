const router = require('express').Router();

// Fire Controller
const eventController = require("../controllers/event");

// Get all events
router.get('/', eventController.read);

// Get an event data from db
router.get('/:id', eventController.findById);

// Add new event to db
router.post('/create/:hostId', eventController.create);

// update event data
router.post('/update/:hostId/:id', eventController.update);

// // Delete an event
// router.delete();

module.exports = router;