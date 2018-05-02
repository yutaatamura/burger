var connection = require('../config/connection.js');

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, cols, vals]), function(err, result) {
            if (err) throw err;
            console.log(result);
        }
    },
    updateOne: function(tableInput, )
}