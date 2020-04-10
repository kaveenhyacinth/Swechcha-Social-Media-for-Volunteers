const router = require("express").Router();

// Fire controller
const assignController = require("../controllers/assign");

// Assign volunter/event to event/volunter
router.get(
  "/:eventId/:volId",
  assignController.assignToEvent,
  assignController.assignToVolunteer
);

module.exports = router;
