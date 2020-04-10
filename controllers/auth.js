const bcrypt = require("bcrypt"); // Used for hashed passwords

const Volunteer = require("../models/volunteer.model");
const Host = require("../models/host.model");
const Admin = require("../models/admin.model");

/** Volunteer **/

// Volunteer signin
const volunteerSignin = async (req, res) => {
  var uname = req.body.uname;
  var pass = req.body.pass;

  // Get login credentials
  Volunteer.findOne({
    email: uname,
  })
    .lean()
    .then(async (data) => {
      if (await bcrypt.compare(pass, data.password)) {
        req.session.volId = data._id;
        req.session.signedAs = "volunteer";

        console.log(
          req.session.volId + " is signed as a " + req.session.signedAs
        );

        res.redirect("/volunteer/" + data._id);
      } else {
        req.session.signedAs = "none";
        res.send("please enter valid credentials");
      }
    }) // redirect to Volunteer data
    .catch((err) => res.status(400).json("Error " + err));
};

// Volunteer signup
const volunteerSignup = async (req, res) => {
  var pass = req.body.password;
  var volunteer = req.body;

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
            .catch((err) => res.status(400).json("Error " + err));
        }
      );
    })
    .catch((err) => res.status(400).json("Error " + err));
};

/** Host **/

// Host signin
const hostSignin = async (req, res) => {
  var uname = req.body.uname;
  var pass = req.body.pass;

  // Get login credentials
  Host.findOne({
    email: uname,
  })
    .lean()
    .then(async (data) => {
      if (await bcrypt.compare(pass, data.password)) {
        req.session.volId = data._id;
        req.session.signedAs = "host";

        console.log(
          req.session.volId + " is signed as a " + req.session.signedAs
        );

        res.redirect("/host/" + data._id);
      } else {
        req.session.signedAs = "none";
        res.send("please enter valid credentials");
      }
    }) // redirect to Volunteer data
    .catch((err) => res.status(400).json("Error " + err));
};

// Host signup
const hostSignup = async (req, res) => {
  var pass = req.body.password;
  var host = req.body;

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

        console.log(
          req.session.volId + " is signed as a " + req.session.signedAs
        );

        res.redirect("/admin/" + data._id);
      } else {
        req.session.signedAs = "none";
        res.send("please enter valid credentials");
      }
    }) // redirect to Volunteer data
    .catch((err) => res.status(400).json("Error " + err));
};

// Admin signup
const adminSignup = async (req, res) => {
  var pass = req.body.password;
  var admin = req.body;

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
};

// Signout
const signout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/event");
  });
};

module.exports = {
  volunteerSignin,
  volunteerSignup,
  adminSignin,
  // adminSignup,
  hostSignin,
  hostSignup,
  signout,
};
