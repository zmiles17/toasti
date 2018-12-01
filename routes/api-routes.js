const db = require("../models");

module.exports = function(app){


app.get('/api/recipes', function(req, res) {
  db.Recipe.findAll({
    where: {
      item: req.body.item
    }
  }).then(function(dbItem) {
    res.json(dbItem);
  });
});
}