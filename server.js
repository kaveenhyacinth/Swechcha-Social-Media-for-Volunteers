// Load express, cors, mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Fire controllers
const eventRouter = require('./routes/event');
const volunteerRouter = require('./routes/volunteer');
const hostRouter = require('./routes/host');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');

// Set environment var file
require('dotenv').config();

// Init express app
const app = express();
// Listening PORT
const port = process.env.PORT || 3000;

// Set template engine
app.set('view engine', 'ejs');

/******
 * TESTING
 ******/

app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/login/adm',function(req, res){
    res.render('AdminLogin');
});

app.get('/login/usr',function(req, res){
    res.render('userlogin');
});

app.get('/register/volunteer',function(req, res){
    res.render('volreg');
});

app.get('/register/organization',function(req, res){
    res.render('orgreg');
});

app.get('/host/admin/:id',function(req, res){
   
    res.render('Hostadmin',{love: req.params.id});
});
 /******
 * END OF TESTING
 ******/


// middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));

// Use controllers as middleware
app.use('/event', eventRouter);
app.use('/volunteer', volunteerRouter);
app.use('/host', hostRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);



/*
// Database uri
const uri = process.env.ATLAS_URI;

// Database connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Deploy DB connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to mongoDB');
});
*/

// Set port to listen
app.listen(port, () => {
    console.log(`App is now online at port ${port}`);
});