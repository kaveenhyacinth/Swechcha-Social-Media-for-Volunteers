const router = require("express").Router();

router.get("/", function(req, res){
    res.sendfile(__dirname + "/index.html");
}
);

module.exports = router;