const router = require('express').Router();

// Load admin model
var Admin = require('../models/admin.model');

// Admin login controller
router.get('/login', (req, res) => {

    var uname = req.body.uname;
    var pass = req.body.pass;

    Admin.findOne({
        "username" : uname,
        "password" : pass
    })
    .lean()
    .then(data => res.json(data))
    .catch(err => res.status(400).json({msg: "Please enter valid credentials", err: '' + err}));
});

module.exports = router;