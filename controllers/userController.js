const router = require('express').Router();
const bodyParser = require('body-parser');

// Load user model
var User = require('../models/user.model');

// Setup url encoding
const encodedUrlParser = bodyParser.urlencoded({ extended: true });

// Manage login
router.get('/login', (req, res) => {
    var uname = req.body.uname;
    var pass = req.body.pass;

    // Get login credentials
    User.findOne({
        "email": uname, 
        "password": pass
    })
    .lean()
    .then(data => res.redirect('/user/' + data._id)) // redirect to user data
    .catch(err => res.status(400).json({msg: "please enter valid credentials", err: '' + err}));
});

// Add new user to db aka registration
router.post('/add', encodedUrlParser, (req, res) => {
    var user = req.body;

    var newUser = new User(user);

    console.log(newUser);

    // Render to view when updated
    newUser.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error ' + err));
});

// Get user data from db
router.get('/:id', (req, res) => {
    // get user id
    var id = req.params.id;

    // Render to view when updated
    User.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error ' + err));
});

// update user data aka profile update
router.post('/update/:id', encodedUrlParser, (req, res) => {
    var userId = req.params.id;
    var userUpdate = req.body;

    // Render to view when updated
    User.findByIdAndUpdate(userId, userUpdate)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;