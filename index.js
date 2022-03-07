const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");

require("./config/configDB");
const postsRoutes = require("./controllers/postsController");

app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoutes);

app.set("PORT", process.env.PORT || 8080);
app.listen(app.get("PORT"), () =>
  console.log(`Serveur started on PORT : ${app.get("PORT")} `)
);
