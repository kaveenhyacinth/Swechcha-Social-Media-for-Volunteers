// Load router
const router = require('express').Router();

// Fire volunteer controller
var volunteerController = require("../controllers/volunteer");

// Read all volunteers
router.get('/', volunteerController.read);

// Get Volunteer profile by id
router.get('/:id', volunteerController.findById);

// Update Volunteer data aka profile update
router.post('/update/:id', volunteerController.update);

// Assign Volunteer to an event


module.exports = router;