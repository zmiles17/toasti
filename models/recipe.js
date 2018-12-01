module.exports = function (sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 2000]
      }
    },
    TotalStars: {
      type: DataTypes.INTEGER
    },
    TotalVotes: {
      type: DataTypes.INTEGER
    } 
  });
  Recipe.associate = function (models) {
    Recipe.hasMany(models.Ingredients);
  };

  return Recipe;
};
