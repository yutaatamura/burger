var burger = require('../models/burger.js');

module.exports = function(app) {

    app.get('/', function(req,res) {
        burger.all(function(data) {
            res.render('index', {burgers: data});
        });
    });

    app.put('/api/devour/:id', function(req, res) {
        var id = req.params.id;
        console.log(id);
        burger.devour(id, function(data) {
            console.log(data);
        });
    });
}

