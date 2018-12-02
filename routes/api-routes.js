const db = require("../models");

module.exports = function (app) {


  app.get('/api/recipe', function (req, res) {
    db.recipe.findAll({ where: {}, include: [db.ingredient] }).then(function (dbItem) {
      res.json(dbItem);
    });
  });
  app.post("/api/recipe", function (req, res) {
    db.recipe.create(req.body).then(function (dbRecipe) {
      res.json(dbRecipe);
    })
  })
}