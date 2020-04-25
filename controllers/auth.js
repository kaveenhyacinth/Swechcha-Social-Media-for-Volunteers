const bcrypt = require("bcrypt"); // Used for hashed passwords

const Volunteer = require("../models/volunteer.model");
const Host = require("../models/host.model");
const Admin = require("../models/admin.model");



/** Volunteer **/

// Volunteer signin
const volunteerSignin = async (req, res) => {
  var uname = req.body.email;
  var pass = req.body.password;

  // Get login credentials
  Volunteer.findOne({
    email: uname,
  })
    .lean()
    .then(async (data) => {
      if (await bcrypt.compare(pass, data.password)) {
        req.session.volId = data._id;
        req.session.signedAs = "volunteer";

        console.log(req.session.volId + " is signed as a " + req.session.signedAs);

        res.redirect("/volunteer/" + data._id);
      } else {
        req.session.signed = false;
        res.redirect(301,"/userlogin");
        //res.send("please enter valid credentials");
      }
    }) // redirect to Volunteer data
    .catch((err) => res.redirect('/userlogin'));
};

// Volunteer signup
const volunteerSignup = async (req, res) => {
  var pass = req.body.password;
  //var volunteer = req.body;
/*New*/
var name = {
  fname: req.body.fname,
  lname: req.body.lname
};
var address = {
  street: req.body.street,
  city: req.body.city,
  state: req.body.state,
  country: req.body.country,
  postal: req.body.postal
};

var volunteer = {
  name : name,
  email : req.body.email,
  password : req.body.password,
  NIC : req.body.NIC,
  DOB : req.body.DOB,
  address : address,
  contactNo : req.body.contactNo,
  profession : req.body.profession
};
/*End*/ 

  const hashedPass = await bcrypt.hash(pass, 10);

  console.log("signup pass: " + hashedPass);

  var newVolunteer = new Volunteer(volunteer);

  console.log(newVolunteer);
 

  newVolunteer
    .save()
    .then((data) => {
      Volunteer.findByIdAndUpdate(data._id, { password: hashedPass }).then(
        (data) => {
          Volunteer.findById(data._id)
            .then((data) => res.json(data))
            .catch((err) => res.status(400).json("Error 1" + err));
        }
        
      );
    })
    .catch((err) => res.status(400).json("Error 2" + err));
    //res.render('userlogin');
    res.redirect(301,'/userlogin');
};

/** Host **/

// Host signin
const hostSignin = async (req, res) => {
  var uname = req.body.email;
  var pass = req.body.password;

  // Get login credentials
  Host.findOne({
    email: uname,
  })
    .lean()
    .then(async (data) => {
      if (await bcrypt.compare(pass, data.password)) {
        req.session.volId = data._id;
        req.session.signedAs = "host";

        console.log(req.session.volId + " is signed as a " + req.session.signedAs);

        res.redirect("/host/" + data._id);
      } else {
        res.send("please enter valid credentials");
      }
    }) // redirect to Volunteer data
    .catch((err) => res.status(400).json("Error " + err));
};

// Host signup
const hostSignup = async (req, res) => {

  var pass = req.body.password;
  //var volunteer = req.body;
/*New*/
var address = {
  street: req.body.street,
  city: req.body.city,
  state: req.body.state,
  country: req.body.country,
  postal: req.body.postal
};

var host = {
  hostname : req.body.hostname,
  email : req.body.email,
  password : req.body.password,
  NIC : req.body.NIC,
  DOB : req.body.DOB,
  address : address,
  contactNo : req.body.contactNo,
  profession : req.body.profession
};
/*End*/ 

  const hashedPass = await bcrypt.hash(pass, 10);

  console.log(" signup pass: " + hashedPass);

  var newHost = new Host(host);

  console.log(newHost);

  newHost
    .save()
    .then((data) => {
      Host.findByIdAndUpdate(data._id, { password: hashedPass }).then(
        (data) => {
          Host.findById(data._id)
            .then((data) => res.json(data))
            .catch((err) => res.status(400).json("Error " + err));
        }
      );
    })
    .catch((err) => res.status(400).json("Error " + err));
    res.redirect(301,'/userlogin');
};

/** Admin **/

// Admin signin
const adminSignin = async (req, res) => {
  var uname = req.body.uname;
  var pass = req.body.pass;

  // Get login credentials
  Admin.findOne({
    username: uname,
  })
    .lean()
    .then(async (data) => {
      if (await bcrypt.compare(pass, data.password)) {
        req.session.volId = data._id;
        req.session.signedAs = "admin";

        console.log(req.session.volId + " is signed as a " + req.session.signedAs);

        res.redirect("/admin/" + data._id);
      } else {
        res.send("please enter valid credentials");
      }
    }) // redirect to Volunteer data
    .catch((err) => res.status(400).json("Error " + err));
};

// Admin signup
/*
const adminSignup = async (req, res) => {
  var pass = "password";
  var admin = {
    username: "admin",
    email: "admin@swechcha.lk",
    password: "1234567890"
  };

  const hashedPass = await bcrypt.hash(pass, 10);

  console.log(" signup pass: " + hashedPass);

  var newAdmin = new Admin(admin);

  console.log(newAdmin);

  newAdmin
    .save()
    .then((data) => {
      Admin.findByIdAndUpdate(data._id, { password: hashedPass }).then(
        (data) => {
          Admin.findById(data._id)
            .then((data) => res.json(data))
            .catch((err) => res.status(400).json("Error " + err));
        }
      );
    })
    .catch((err) => res.status(400).json("Error " + err));
};*/

// Signout
const signout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/home');
  });
};

module.exports = {
  volunteerSignin,
  volunteerSignup,
  adminSignin,
  //adminSignup,
  hostSignin,
  hostSignup,
  signout,
};
