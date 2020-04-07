const Event = require("../models/events.model");

// Read all events
const read = (req, res) => {
    Event.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error ' + err));
}

// Get event data
const findById = (req, res) => {
    var eventId = req.params.id;

    // Get data from db
    Event.findById(eventId)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error ' + err));
}

// Create an event
const create = (req, res) => {
    var hostId = req.params.hostId;

    var newEvent = new Event({
        eventname: req.body.eventname,
        desc: req.body.desc
    });

    // Saave to db
    newEvent
    .save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error ' + err));
}

// Update event by id
const update = (req, res) => {
    // var hostId = req.params.hostId;
    // var eventId = req.params.id;
    // var update = req.body;

    // Event.findByIdAndUpdate(eventId, update)
    // .then(data => {
    //     if(data.host == hostId) {
    //         res.json(data);
    //     }
    // })
    // .catch(err => res.status(400).json('Error ' + err));
}

module.exports = {
    read,
    findById,
    create,
    update
}