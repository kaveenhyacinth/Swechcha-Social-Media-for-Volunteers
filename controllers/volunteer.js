// Load Volunteer model
var Volunteer = require("../models/volunteer.model");

// Volunteer signin page
const signin = (req, res) => {
  res.render('userlogin', {msg: "done"});
};


// Read
const read = (req, res) => {
  if(req.session.signedAs == "admin") {
    Volunteer.find()
    .populate("eventsJoined", "eventname desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("not an admin");
  }
  
};

// Get Volunteer data from db aka profile
const findById = (req, res) => {
  // get Volunteer id
  var id = req.params.id;

  // Render to view when updated
  Volunteer.findById(id)
    .populate("eventsJoined", "eventname desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error " + err));
};

// Update Volunteer data
const update = (req, res) => {
  if(req.session.signedAs == "volunteer") {
    var VolunteerId = req.params.id;
    var update = req.body;
  
    console.log(update);
  
    // Render to view when updated
    Volunteer.findByIdAndUpdate(VolunteerId, update)
      .then(() => {
        Volunteer.findById(VolunteerId)
          .populate("eventsJoined", "eventname desc")
          .then((data) => res.json(data))
          .catch((err) => res.status(400).json("Error " + err));
      })
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("not a volunteer");
  }
 
};

// Get joined events list
const getEventList = (req, res) => {
  var id = req.params.id;

  Volunteer.findById(id)
    .populate("eventsJoined", "eventname desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error " + err));
};

module.exports = {
  signin,
  read,
  findById,
  update,
  getEventList,
};
