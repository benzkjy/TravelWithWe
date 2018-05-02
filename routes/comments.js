var express = require("express");
var router = express.Router({ mergeParams: true });
var Place = require("../models/place");
var Comment = require("../models/comment");

// COMMENT ROUTES

router.get("/:id/comments/new", isLoggedIn, function (req, res) {
    Place.findById(req.params.id, function (err, foundPlace) {
        if (err) {
            console.log(err);
        } else {
            //console.log(foundPlace);
            res.render("comments/newcomment", { place: foundPlace });
        }
    });
});

router.post("/:id/comments", isLoggedIn, function (req, res) {
    Place.findById(req.params.id, function (err, foundPlace) {
        //console.log(foundPlace);
        if (err) {
            //console.log(err);
            redirect("/");
        } else {
            //console.log(req.body.comment);
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log("Hello bug");
                } else {
                    //console.log(comment);
                    //console.log(foundPlace);
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save()
                    foundPlace.comments.push(comment);
                    foundPlace.save();
                    res.redirect('/' + foundPlace._id);
                    //console.log(comment);
                }
            })
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