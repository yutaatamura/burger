var express = require('express');
var bodyParser = require('body-parser');

var app = express(); 

var PORT = process.env.PORT || 8080; 

app.use(express.static(__dirname, '/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var exphbs = require("experss-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var router = require("./controllers/burgers_controller.js");
app.use('/', router);


app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
})

