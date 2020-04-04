const router = require('express').Router();
const bodyParser = require('body-parser');

// Setup url encoding
const encodedUrlParser = bodyParser.urlencoded({extended: true});

// Get user data from db
router.get('/:id', (req, res) => {

});

// Add new user to db
router.post('/add', encodedUrlParser, (req, res) => {

});

// update user data
router.post('/update/:id', encodedUrlParser, (req, res) => {

});

module.exports = router;