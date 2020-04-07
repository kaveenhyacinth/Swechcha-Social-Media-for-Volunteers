const router = require("express").Router();

// Load Admin controller
const adminController = require("../controllers/admin");


// Find admin
router.get('/:id', adminController.findById);

module.exports = router;