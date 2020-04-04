const router = require('express').Router();
const bodyParser = require('body-parser');

// Setup url encoding
const encodedUrlParser = bodyParser.urlencoded({extended: true});

// Get all events
router.get('/', (req, res) => {

});

// Get an event data from db
router.get('/:id', (req, res) => {

});

// Add new event to db
router.post('/add', encodedUrlParser, (req, res) => {

});

// update event data
router.post('/update/:id', encodedUrlParser, (req, res) => {

});

// Delete an event
router.delete('/:id', (req, res) => {

});

module.exports = router;