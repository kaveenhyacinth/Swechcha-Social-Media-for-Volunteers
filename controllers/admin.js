const Admin = require("../models/admin.model");

// Get admin data from db aka profile
const findById = (req, res) => {
  if (req.session.signedAs == "admin") {
    // get admin id
    var id = req.params.id;

    // Render to view when updated
    Admin.findById(id)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.send("not an admin");
  }
};

module.exports = {
  findById,
};
