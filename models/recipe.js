module.exports = function (sequelize, DataTypes) {
  const Recipe = sequelize.define("recipe", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    instruction: {
      type: DataTypes.STRING(20000),
      allowNull: false,
      validate: {
        len: [1, 20000]
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
    Recipe.hasMany(models.ingredient);
  };

  return Recipe;
};
