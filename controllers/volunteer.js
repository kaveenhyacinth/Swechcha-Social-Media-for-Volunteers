// Load Volunteer model
var Volunteer = require("../models/volunteer.model");

// Read
const read = (req, res) => {
  Volunteer.find()
    .populate("eventsJoined", "eventname desc")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error " + err));
};

// Get Volunteer data from db aka profile
const findById = (req, res) => {
  // get Volunteer id
  var id = req.params.id;
  // Render to view when updated
  Volunteer.findById(id)
    .populate("eventsJoined", "eventname desc")
    .then((data) => {
     // res.json(data); replaced with ejs
      res.render('pro_timeline',{data : data, sess : req.params.id});
    })
    .catch((err) => res.status(400).json("Error " + err));
   
};

//About page

const findAboutById = (req, res) => {
  // get Volunteer id
  var id = req.params.id;
  // Render to view when updated
  Volunteer.findById(id)
    .populate("eventsJoined", "eventname desc")
    .then((data) => {
     // res.json(data); replaced with ejs
      res.render('profilePg',{data : data, sess : req.params.id});
    })
    .catch((err) => res.status(400).json("Error " + err));
   
};

// Update Volunteer data
const update = (req, res) => {
  var VolunteerId = req.params.id;
  var update = {
    name: {
      fname: req.body.fname,
      mname: "",
      lname: req.body.lname
    },
    email: req.body.email,
    address: {
        street: req.body.street,
        city : req.body.city,
        state: req.body.state,
        country: req.body.country,
        postal: req.body.postal
    },
    NIC : req.body.NIC,
    DOB : req.body.DOB,
    contactNo : req.body.contactNo,
    profession : req.body.profession 
  }
  
  console.log(update);


  // Render to view when updated
  Volunteer.findByIdAndUpdate(VolunteerId, update)
    .then(() => {
      Volunteer.findById(VolunteerId)
        .populate("eventsJoined", "eventname desc")
        .then((data) => {
          res.redirect("/volunteer/" + VolunteerId);
        })
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
};

//DP upload
const updateProfimg = (req, res) => {
  const image = req.file.filename;
  var id = req.params.id;
  var updateDP = {
    profileImage : image
  };
  console.log(`IGot image!!!  ${image}`);

  
  // Render to view when updated
  Volunteer.findByIdAndUpdate(id, updateDP)
    .then(() => {
      Volunteer.findById(id)
        .populate("eventsJoined", "eventname desc")
        .then((data) => {
          res.redirect("/volunteer/" + id);
        })
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
};

//Cover upload
const updateCoverimg = (req, res) => {
  const image = req.file.filename;
  var id = req.params.id;
  var updateCover = {
    coverImage : image
  };
  console.log(`IGot cover!!!  ${image}`);

  
  // Render to view when updated
  Volunteer.findByIdAndUpdate(id, updateCover)
    .then(() => {
      Volunteer.findById(id)
        .populate("eventsJoined", "eventname desc")
        .then((data) => {
          res.redirect("/volunteer/" + id);
        })
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
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
  read,
  findById,
  update,
  updateProfimg,
  getEventList,
  findAboutById,
  updateCoverimg,
};
