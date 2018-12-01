const db = require("../models");

module.exports = function(app){


app.get('/api/recipes', function(req, res) {
  db.Recipe.findAll({}).then(function(dbItem) {
    res.json(dbItem);
  });
});
app.post("/api/recipes", function(req, res){
  db.Recipe.create(req.body).then(function(dbRecipe){
    res.json(dbRecipe);
  })
})
}