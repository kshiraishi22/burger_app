// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js")

// Creates a "Burgers" model that matches up with DB
let Burger = sequelize.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
  });

  // Syncs with DB
  Burger.sync();

  module.exports = Burger;