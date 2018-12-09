module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("user", {
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      password: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {
          len: [1, 1000]
        }
      },
      salt: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {
          len: [1, 1000]
        }
      },
      email: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
          len: [1, 500]
        }
      },
    });
    User.associate = function (models) {
      // create favorites join table
      const Favorites = sequelize.define('favorites');
      User.belongsToMany(models.recipe, {through: Favorites});
      models.recipe.belongsToMany(User, {through: Favorites});
  
      // create comments join table
      const Comments = sequelize.define('comments', {
        comment: {
          type: DataTypes.STRING(20000),
          allowNull: false,
          validate: {
            len: [1, 20000]
          }
        }
    })
      User.belongsToMany(models.recipe, {through: Comments});
      models.recipe.belongsToMany(User, {through: Comments});
  
      // create ratings join table
      const Ratings = sequelize.define('ratings', {
        ratings: DataTypes.INTEGER
    })
      User.belongsToMany(models.recipe, {through: Ratings});
      models.recipe.belongsToMany(User, {through: Ratings});
    };
  
    return User;
  };