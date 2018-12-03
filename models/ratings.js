module.exports = function(sequelize, DataTypes) {
    const Ratings = sequelize.define("Ratings", {
      TotalStars: {
        type: DataTypes.INTEGER
      },
      TotalVotes: {
        type: DataTypes.INTEGER
      },

      RecipeId: {
        type: sequelize.INTEGER,
        references: Recipe,
        referenceKey: 'id'
      }
  
    });
    Ratings.associate = function(models){
      Ratings.belongsTo(models.Recipe, {
        
      })
    }
    return Ratings;
  };