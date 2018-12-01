const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/html/index.html'));
    });

    app.get("/add_recipe", function(req,res){
        res.sendFile(path.join(__dirname, "../public/html/add_recipe.html"));
    });

    app.get("/search_results", function(req,res){
        res.sendFile(path.join(__dirname, "../public/html/search_results.html"));
    });

};