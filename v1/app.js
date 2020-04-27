var express = require("express")
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name : "Salmon Greek", image: "https://pixabay.com/get/55e8dc404f5aab14f1dc84609620367d1c3ed9e04e50744172267ad4904dc4_340.jpg"},
    {name : "Dispa Maroda", image: "https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e50744172267ad4904dc4_340.jpg"},
    {name : "Juvina Hill", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e50744172267ad4904dc4_340.jpg"}
];

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("newCampground");
});

app.listen(3000, function(){
    console.log("YelpCamp Server has been Started !");
});