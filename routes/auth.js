const router = require("express").Router();

// Load controllers
const authController = require("../controllers/auth");


// Signin route
router.post("/volunteer/signin", authController.volunteerSignin);
router.post("/host/signin", authController.hostSignin);
router.post("/admin/signin", authController.adminSignin);

// Signup route
router.post("/volunteer/signup", authController.volunteerSignup);
router.post("/host/signup", authController.hostSignup);
//router.post('/admin/signup', authController.adminSignup);

// Sigout route
router.get("/signout", authController.signout);

module.exports = router;
