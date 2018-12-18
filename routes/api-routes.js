const db = require("../models");
const Op = db.sequelize.Op;
const literal = db.sequelize.literal;

module.exports = function (app) {
/*******************************vblaha code starts*********************************** */
  // http://localhost:8080/api/recipe?q=gin
  /**
   * looks in the request to see if there is a query param "q"
   * if not return all recipes
   * if present, use "q" as a search term to find all recipes that match recipe.name or ingredient.name
   * @returns {array} - list of recipes 
   * @author vblaha
   */
  app.get('/api/recipe', function (req, res) {
    const query = req.query.q;
    let whereClause = {};
    if (query) {
      whereClause = {
        //the following lines use Operator symbols to query the database. 
        //[Op.or] provides an option to match the Recipe name to contain query.
        //[Op.like] finds all matches. -vblaha 
        [Op.or]: [
          db.sequelize.where( db.sequelize.fn('upper', db.sequelize.col('recipe.name')), { [Op.like]: `%${query.toUpperCase()}%` } ),
          {
            id: {
              //This is a SQL subquery. Read more here https://github.com/sequelize/sequelize/issues/3961
              // [Op.In] searches for matching name within ingredients and returns matching recipe Ids. -vblaha
              [Op.in]: [
                literal(`select recipeId from ingredients where UPPER(name) like "%${query.toUpperCase()}%"`)
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
/*****************vblaha code ends***************************** */
  //**************gina code starts*****************************
  /**
   * API to post a cocktail recipe
   * @param {obj} req - contains name, instruction, and array of objects  to post
   * @returns {obj} res - returns recipe object on success else error object
   * @author Gina Yi
   */
  app.post("/api/recipe", function (req, res) {

    let ingredients = req.body.ingredient;
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
    }).then(function (result) {
      console.log(result);
      res.json(result);
    }).catch(function (err) {
      if(err.message == 'Validation error')
        res.json({success:false, reason:'The cocktail name already exists.'})
      else
        res.json({ success: false, reason: 'error' });
    });
  });
  //**************gina code ends*****************************
   
  /***************vblaha code starts************************* */
  /**
   * uses the provided url param id to find a recipe
   * @returns { object } -  a recipe and its ingredients
   * @author vblaha
   */
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
/*****************vblaha code ends**************************** */
  app.post('/api/recipe/update', function(req, res){
    const id = req.body.id;
    db.recipe.update({
      TotalStars: req.body.TotalStars,
      TotalVotes: req.body.TotalVotes
      
    },{
      where: {
        id: id
      }
    }).then(function(dbRecipe){
      db.recipe.findById(id, {
        include: [{
          model: db.ingredient,
        }]
      }).then(function (dbItem) {
        res.json(dbItem);
      });
    });
  });
}