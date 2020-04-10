// Load router
const router = require("express").Router();

// Fire volunteer controller
var volunteerController = require("../controllers/volunteer");

// Read all volunteers
router.get("/", volunteerController.read);

// Volunteer signin page
router.get("/signin", volunteerController.signin);

// Get Volunteer profile by id
router.get("/:id", volunteerController.findById);

// Update Volunteer data aka profile update
router.post("/update/:id", volunteerController.update);

// Get joined events
router.get("/:id/eventlist", volunteerController.getEventList);

module.exports = router;
