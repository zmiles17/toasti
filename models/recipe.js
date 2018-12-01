module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define('Recipe', {
    instructions: DataTypes.STRING,
    name: DataTypes.STRING,
    ingredient: DataTypes.STRING,
    image: DataTypes.STRING
  });
  return Recipe;
}; 