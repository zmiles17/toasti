const db = require("../models");
const Op = db.sequelize.Op;
const literal = db.sequelize.literal;

module.exports = function (app) {

  // http://localhost:8080/api/recipe?q=gin
  app.get('/api/recipe', function (req, res) {
    const query = req.query.q;
    let whereClause = {};
    if (query) {
      whereClause = {
        //the following lines use Operator symbols to query the database. 
        //[Op.or] provides an option to match the Recipe name to contain query.
        //[Op.like] finds all matches. 
        [Op.or]: [
          { name: { [Op.like]: `%${query}%` } },
          {
            id: {
              //This is a SQL subquery. Read more here https://github.com/sequelize/sequelize/issues/3961
              // [Op.In] searches for matching name within ingredients and returns matching recipe Ids.
              [Op.in]: [
                literal(`select recipeId from ingredients where name like "%${query}%"`)
              ]
            }
          }
        ],
      };
    }
    db.recipe.findAll({
      where: whereClause,
      include: [{
        model: db.ingredient,
      }]
    }).then(function (dbItem) {
      res.json(dbItem);
    });
  });
  app.post("/api/recipe", function (req, res) {
    db.recipe.create(req.body, { include: [db.ingredient] }).then(function (dbRecipe) {
      res.json(dbRecipe);
    })
  })
}