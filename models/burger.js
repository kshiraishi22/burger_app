module.exports = function(sequelize, DataTypes) {
let Burger = sequelize.define("Burger", 
  {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.TINYINT(1),
  });

  return Burger;
}