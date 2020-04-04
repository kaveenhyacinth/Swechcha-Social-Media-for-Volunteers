// Load express, cors, mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Fire controllers
const eventController = require('./controllers/eventController');
const userController = require('./controllers/userController');
const hostController = require('./controllers/hostController');
const adminController = require('./controllers/adminController');

// Set environment var file
require('dotenv').config();

// Init express app
const app = express();
// Listening PORT
const port = process.env.PORT || 3000;

// Set template engine
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

// Use controllers as middleware
app.use('/event', eventController);
app.use('/user', userController);
app.use('/host', hostController);
app.use('/admin', adminController);

// Database uri

// Database connection

// Deploy DB connection

// Set port to listen
app.listen(port, () => {
    console.log(`App is now online at port ${port}`);
});