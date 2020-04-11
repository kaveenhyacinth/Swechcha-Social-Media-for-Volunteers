// Load express, cors, mongoose
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Fire controllers
const eventRouter = require("./routes/event");
const volunteerRouter = require("./routes/volunteer");
const hostRouter = require("./routes/host");
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const assignRouter = require("./routes/assign");

// const tests = require("./tests/session");

// Set environment var file
require("dotenv").config();

// Init express app
const app = express();
// Listening PORT
const port = process.env.PORT || 3000;

// Set template engine
app.set("view engine", "ejs");

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use(
  session({
    secret: "swechcha",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 10 * 60 * 1000 },
  })
);

// Use controllers as middleware
app.use("/event", eventRouter);
app.use("/volunteer", volunteerRouter);
app.use("/host", hostRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);
app.use("/add", assignRouter);

// app.use('/test', tests);


// Database uri
const uri = process.env.ATLAS_URI;

// Database connection
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Deploy DB connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to mongoDB");
});


// Set port to listen
app.listen(port, () => {
  console.log(`App is now online at port ${port}`);
});
