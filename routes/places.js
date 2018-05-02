var express = require("express");
var router = express.Router();
var Place = require("../models/place");

router.get("/", function (req, res) {
    //Get all places
    Place.find({}, function (err, allPlaces) {
        if (err) {
            //console.log(err);
        } else {
            res.render("places/index", { places: allPlaces, currentUser: req.user });
        }
    });
    // res.render("index",{places:places});
});
router.post("/", isLoggedIn, function (req, res) {
    var title = req.body.title;
    var topic = req.body.topic;
    var describe = req.body.describe;
    var image = req.body.image;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newPlace = { title: title, topic: topic, describe: describe, image: image, author: author }
    // places.push(newPlace);
    Place.create(newPlace, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // console.log(newlyCreated);
            res.redirect("/");
        }
    })
    // res.redirect("/");
});

router.get("/new-story", isLoggedIn, function (req, res) {
    res.render("places/newplace");
});

router.get("/:id", function (req, res) {
    Place.findById(req.params.id).populate("comments").exec(function (err, foundPlace) {
        if (err) {
            //console.log(err);
        } else {
            //console.log(foundPlace);
            res.render("places/show", { place: foundPlace });
        }
    });
});

//EDIT
router.get("/:id/edit", function (req, res) {
    Place.findById(req.params.id, function (err, foundPlace) {
        if (err) {
            res.redirect("/");
        } else{
            res.render("places/edit", {place: foundPlace});
        }
    });
});

router.put("/:id", function(req, res) {
    Place.findByIdAndUpdate(req.params.id, req.body.place, function(err, updatePlace) {
        if (err) {
            res.redirect("/");
        } else{
            res.redirect("/" + req.params.id);
        }
    })
});

//DESTROY
router.delete("/:id", function(req, res) {
    Place.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/");
        } else{
            res.redirect("/");
        }
    });
});

//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;