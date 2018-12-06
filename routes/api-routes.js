const db = require("../models");

module.exports = function (app) {

  app.get('/api/recipe', function (req, res) {
    db.recipe.findAll({ where: {}, include: [db.ingredient] }).then(function (dbItem) {
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
}