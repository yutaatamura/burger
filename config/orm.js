var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cbk) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cbk(result);
        });
    },
    insertOne: function(tableInput, colsData, cbk) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [tableInput, colsData]), function(err, result) {
            if (err) throw err;
            console.log(result);
            cbk(result);
        }
    },
    updateOne: function(tableInput, colsData, id, cbk) {
        var queryString = "UPDATE ?? SET ?? WHERE id = ?";
        connection.query(queryString, [tableInput, colsData, id]), function (err, result) {
            if (err) throw err;
            console.log(result);
            cbk(result);
        }
    }
};

module.exports = orm;