var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

// module.exports = function(app) {

    router.get('/', function(req,res) {
        burger.all(function(data) {
            res.render('index', {burgers: data});
        });
    });

    router.put('/api/devour/:id', function(req, res) {
        var id = req.params.id;
        console.log(id);
        burger.devour(id, function(data) {
            console.log(data);  
            res.redirect("/");
            res.status(200).end();
        });
    });

    router.post('/api/create', function(req, res) {
        var newBurger = req.body.burger;
        console.log("I am the new burger "+newBurger);
        burger.create({burger_name: newBurger, devoured: 0}, function(data) {
            console.log(data);
            res.status(200).end();
        })
    })
// }

module.exports = router;

