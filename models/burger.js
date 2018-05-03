var orm = require('../config/orm.js');

var burger = {
    all: function(cbk) {
        orm.selectAll('burgers', function(data) {
            cbk(data);
        });
    },
    create: function(name, cbk) {
        orm.insertOne('burgers', name, function(data) {
            cbk(data);
        });
    },
    devour: function(id, cbk) {
        orm.updateOne('burgers', id, function(data) {
            cbk(data);
        });
    }
}

module.exports = burger;