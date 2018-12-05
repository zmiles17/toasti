module.exports = function (sequelize, DataTypes) {
  const Ingredient = sequelize.define("ingredient", {
    name: {
      type: DataTypes.STRING(20000),
      allowNull: false,
      validate: {
        len: [1, 20000]
      }
    },
  });
  // Ingredient.associate = function (models) {
  //   Ingredient.belongsTo(models.Recipe);
  // }
  return Ingredient;
};