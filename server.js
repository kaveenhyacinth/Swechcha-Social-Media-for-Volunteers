// Load express, cors, mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Fire controllers

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

// Database uri

// Database connection

// Deploy DB connection

// Set port to listen
app.listen(port, () => {
    console.log(`App is now online at port ${port}`);
});