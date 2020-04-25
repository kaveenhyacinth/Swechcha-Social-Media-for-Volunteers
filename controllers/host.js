const Host = require("../models/host.model");

// find host by id
const findById = (req, res) => {
  // get Host id
  var id = req.params.id;

  // Render to view when updated
  Host.findById(id)
    .populate("eventsHosted", "eventname desc")
    .then((data) => {
      res.render('org_timeline',{data : data});
    })
    .catch((err) => res.status(400).json("Error " + err));
};

// Update host data
const update = (req, res) => {
  var hostId = req.params.id;
  var update = req.body;

  console.log(update);

  // Render to view when updated
  Host.findByIdAndUpdate(hostId, update)
    .then(() => {
      Host.findById(hostId)
        .populate("eventsHosted", "eventname desc")
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
};

// Read all
const read = (req, res) => {
  Host.find()
    .populate("eventsHosted", "eventname desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error " + err));
};

// Get hosted event list
const getEventList = (req, res) => {
  var hostId = req.params.id;

  Host.findById(hostId)
    .populate("eventsHosted")
    .then((data) => {
      console.log(data.populated("evensHosted.EventID"));
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error " + err));
};

// // Get an event form hosteed event list
// const getListedEvent = (req, res) => {};

module.exports = {
  findById,
  update,
  read,
  getEventList,
};
