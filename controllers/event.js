const Event = require("../models/events.model");
const Host = require("../models/host.model");

// Read all events
const read = (req, res) => {
  if (req.session.signedAs == "admin") {
    Event.find()
      .populate("host", "hostname email")
      // .populate('volunteers')
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("Not an admin");
  }
};

// Get event data
const findById = (req, res) => {
  var eventId = req.params.id;

  // Get data from db
  Event.findById(eventId)
    .populate("host", "hostname email")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error " + err));
};

// Create an event
const create = (req, res) => {
  if (req.session.signedAs == "host") {
    var hostId = req.body.host;
    var event = req.body;

    var newEvent = new Event(event);

    // Saave to db
    newEvent
      .save()
      .then((data) => {
        console.log(data._id);
        Host.findByIdAndUpdate(hostId, { $push: { eventsHosted: data._id } })
          .then(() => {
            console.log(data._id);
            res.json(data);
          })
          .catch((err) => res.status(400).json("Error " + err));
      })
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("not a host");
  }
};

// Update event by id
const update = (req, res) => {
  if (req.session.signedAs == "host") {
    var eventId = req.params.id;
    var hostId = req.body.hostId;
    var update = req.body;

    Event.findByIdAndUpdate(eventId, update)
      .then((data) => {
        if (data.host == hostId) {
          res.json(data);
        }
      })
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("not a host");
  }
};

// Add images of an event
const addImages = (req, res) => {
  if (req.session.signedAs == "host") {
    var eventId = req.prams.id;
    var imgPath = req.body.imgPath;

    Event.findByIdAndUpdate(eventId, { $push: { images: imgPath } })
      .then(() => {
        Event.findById(eventId)
          .then((data) => res.json(data))
          .catch((err) => res.status(400).json("Error " + err));
      })
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("not a host");
  }
};

// Delete an event

module.exports = {
  read,
  findById,
  create,
  update,
  addImages,
};
