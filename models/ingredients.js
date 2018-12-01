module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 499]
      }
    },
    RecipeId: {
      type: sequelize.INTEGER,
      references: Recipe,
      referenceKey: 'id'
    }

  });
  Ingredients.associate = function(models){
    Ingredients.belongsTo(models.Recipe, {
      
    })
  }
  return Ingredient;
};