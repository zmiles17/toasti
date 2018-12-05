const db = require("../models");

module.exports = function (app) {

  app.get('/api/recipe', function (req, res) {
    db.recipe.findAll({ where: {}, include: [db.ingredient] }).then(function (dbItem) {
      res.json(dbItem);
    });
  });
  app.post("/api/recipe", function (req, res) {
    console.log(req.body.ingredient);
    db.recipe.create({
      name: req.body.name,
      instruction: req.body.instruction,
      ingredients: [ {name: 'Gin'}]
    },{
      include:[db.ingredient]
    })
  })
}