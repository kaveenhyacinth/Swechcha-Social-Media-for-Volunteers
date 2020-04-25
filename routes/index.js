const router = require("express").Router();

router.get("/home", function(req, res){
    console.log(req.url);
    res.render('index');
});

router.post("/home", function(req, res){
    var name = {
        fname: req.body.fname,
        lname: req.body.lname
    };
    var address = {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        postal: req.body.postal
    };

    var pass = {
        name : name,
        email : req.body.email,
        password : req.body.password,
        NIC : req.body.NIC,
        DOB : req.body.DOB,
        address : address,
        contactNo : req.body.contactNo,
        profession : req.body.profession
    };
    res.render('new',{data : pass});
});

router.get('/register/volunteer',(req, res)=>{
    res.render('volreg');
});

router.get('/register/host',(req, res)=>{
    res.render('orgreg');
});

router.get("/events", function(req, res){
    res.render('event');
});

router.get("/userlogin", function(req, res){
    res.render('login');
});

module.exports = router;