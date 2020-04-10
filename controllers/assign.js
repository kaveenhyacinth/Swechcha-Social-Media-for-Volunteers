const Event = require("../models/events.model");
const Volunteer = require("../models/volunteer.model");

// Assign Volunteer to an event
const assignToEvent = (req, res, next) => {
  var eventId = req.params.eventId;
  var volId = req.params.volId;

  Event.findByIdAndUpdate(eventId, { $push: { volunteers: volId } })
    .then(() => {
      Event.findById(eventId)
        .then((data) => {
          res.json(data);
          next();
        })
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
};

// Assign Event to a volunteer
const assignToVolunteer = (req, res) => {
  var eventId = req.params.eventId;
  var volId = req.params.volId;

  Volunteer.findByIdAndUpdate(volId, { $push: { eventsJoined: eventId } })
    .then(() => {
      Volunteer.findById(volId)
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
};

module.exports = {
  assignToEvent,
  assignToVolunteer,
};
