const Host = require("../models/host.model");


// find host by id
const findById = (req, res) => {
  // get Host id
  var id = req.params.id;

  // Render to view when updated
  Host.findById(id)
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error ' + err));
}

// Update host data
const update = (req, res) => {
    var hostId = req.params.id;
    var update = req.body;

    console.log(update);
    
    // Render to view when updated
    Host.findByIdAndUpdate(hostId, update)
    .then(() => {
        Host.findById(hostId)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error ' + err));
}

// Read all
const read = (req, res) => {
    Host.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error ' + err));
}

// Get hosted event list
const getEventList = (req, res) => {

}

// Get an event form hosteed event list
const getListedEvent = (req, res) => {

}


module.exports = {
    findById,
    update,
    read,
    getEventList,
    getListedEvent
}