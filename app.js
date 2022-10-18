const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


// index page
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/services", function(req, res) {
  res.render("services");
});

app.get("/gallery", function(req, res) {
  res.render("gallery");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running.");
});
