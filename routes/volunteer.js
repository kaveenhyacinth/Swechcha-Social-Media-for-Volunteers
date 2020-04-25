// Load router
const router = require("express").Router();
const multer = require("multer");

// Take the new image
var imgval;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../public/assets/users/dp" );
  },
  filename: (req, file, cb) => {
    const uni = Date.now() + "-" + Math.round(Math.random() * 1000);
    imgval = "sw" + "-" + uni + ".png";
    cb(null, imgval);
  }, 
});

var covval;
const cstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../public/assets/users/cover" );
  },
  filename: (req, file, cb) => {
    const uni = Date.now() + "-" + Math.round(Math.random() * 1000);
    covval = "sw" + "-" + uni + ".png";
    cb(null, covval);
  }, 
});

const upload = multer({ storage: storage });
const cupload = multer({ storage: cstorage });

// Fire volunteer controller
var volunteerController = require("../controllers/volunteer");

// Read all volunteers
router.get("/", volunteerController.read);

// Get Volunteer profile by id
router.get("/:id", volunteerController.findById);
router.post("/about/:id", volunteerController.findAboutById);

// Update Volunteer data aka profile update
router.post("/update/:id", volunteerController.update);

//TODO: Update prof img
router.post("/update/profimg/:id", upload.single("img"), volunteerController.updateProfimg);

//TODO: Update prof img
router.post("/update/coverimg/:id", cupload.single("img"), volunteerController.updateCoverimg);


// Get joined events
router.get("/:id/eventlist", volunteerController.getEventList);

module.exports = router;
