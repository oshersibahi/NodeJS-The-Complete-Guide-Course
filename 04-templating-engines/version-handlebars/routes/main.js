const path = require("path");

const express = require("express");

const router = express.Router();

const usersData = require("./users");

router.get("/", (req, res, next) => {
  res.render("main", { 
      pageTitle: "Main Page",
      path: '/', 
      users: usersData.users, 
      hasUsers: usersData.users.length > 0, 
      activeMain: true
    });
});

module.exports = router;
