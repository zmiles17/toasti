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

  //**************gina code starts*****************************
  app.post("/api/recipe", function (req, res) {

    let ingredients = req.body.ingredient;
    //convert array of strings into array of objects
    let ingredientList = [];
 
    ingredients.forEach(element => {
      ingredientList.push({name:element});
    });
    
    db.recipe.create({
      name: req.body.name,
      instruction: req.body.instruction,
      ingredients: ingredientList
    },{
      include:[db.ingredient]
    });
  });
  //**************gina code ends*****************************
    // db.recipe.create(req.body, { include: [db.ingredient] }).then(function (dbRecipe) {
    //   res.json(dbRecipe);
    // })
  // })
  app.get('/api/recipe/:id', function (req, res) {
    const id = req.params.id;
    db.recipe.findById(id, {
      include: [{
        model: db.ingredient,
      }]
    }).then(function (dbItem) {
      res.json(dbItem);
    });
  });
}