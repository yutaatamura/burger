var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

// module.exports = function(app) {

    router.get('/', function(req, res) {
        res.redirect("/burgers");
    })

    router.get('/burgers', function(req,res) {
        burger.all(function(data) {
            var hbsObject = {burgers: data};
            res.render('index', hbsObject);
        });
    });

    router.put('/burgers/api/devour/:id', function(req, res) {
        var id = req.params.id;
        console.log(id);
        burger.devour(id, function(data) {
            console.log(data);  
            res.redirect("/burgers");
            res.status(200).end();
        });
    });

    router.post('/burgers/api/create', function(req, res) {
        var newBurger = req.body.burger;
        console.log("I am the new burger "+newBurger);
        burger.create({burger_name: newBurger, devoured: 0}, function(data) {
            console.log(data);
            res.status(200).end();
        })
    })
// }

module.exports = router;

