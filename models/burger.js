module.exports = function(sequelize, DataTypes) {
let Burger = sequelize.define("burger", 
  {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.TINYINT(1),
  });

  return Burger;
}