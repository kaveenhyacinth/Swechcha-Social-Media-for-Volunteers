const router = require('express').Router();
const bodyParser = require('body-parser');

// Setup url encoding
const encodedUrlParser = bodyParser.urlencoded({extended: true});

// Get host data from db
router.get('/:id', (req, res) => {

});

// Add new host to db
router.post('/add', encodedUrlParser, (req, res) => {

});

// update host data
router.post('/update/:id', encodedUrlParser, (req, res) => {

});

module.exports = router;