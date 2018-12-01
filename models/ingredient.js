module.exports = function (sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 499]
      }
    },
  });
  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.Recipe, {

    })
  }
  return Ingredient;
};