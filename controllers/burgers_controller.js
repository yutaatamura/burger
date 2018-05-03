var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

// module.exports = function(app) {

    router.get('/', function(req, res) {
        res.redirect('/index');
    });

    router.get('/index', function(req,res) {
        burger.all(function(data) {
            res.render('index', {burgers: data});
        });
    });

    router.put('/api/devour/:id', function(req, res) {
        var id = req.params.id;
        console.log(id);
        burger.devour(id, function(data) {
            console.log(data);
        });
    });

    router.post('/api/create', function(req, res) {
        var newBurger = req.body.burger;
        console.log("I am the new burger"+newBurger);
        burger.create({burger: newBurger}, function(data) {
            console.log(data)
        })
    })
// }

module.exports = router;

