
const express = require("express");
const app = express();
const db = require("./models");
const server = require("http").createServer(app);
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

db.sequelize.sync({ force: true }).then(function() {
    server.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  module.exports=app;

