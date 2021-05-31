const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("../version-ejs/util/path");

const mainRoutes = require("./routes/main");
const usersData = require("./routes/users");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);
app.use("/users", usersData.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: null });
});

app.listen(3000);
