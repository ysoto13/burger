// var orm = require("../config/orm.js");

// // cats.js

// var burger = {
//     selectall
//     orm.selectall

//     insertOne
//     orm.insertOne

//     updateOne
//     orm.updateOne
// }
// model.


// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(bg) {
    orm.all("burgers", function(res) {
      bg(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bg) {
    orm.create("burgers", cols, vals, function(res) {
      bg(res);
    });
  },
  update: function(objColVals, condition, bg) {
    orm.update("burgers", objColVals, condition, function(res) {
      bg(res);
    });
  },
  delete: function(condition, bg) {
    orm.delete("burgers", condition, function(res) {
      bg(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
