const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const rootDir = require("../version-ejs/util/path");

const mainRoutes = require("./routes/main");
const usersData = require("./routes/users");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutDir: "/views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);
app.use("/users", usersData.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: null });
});

app.listen(3000);
