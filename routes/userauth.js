const express = require("express");
const { handleSignUp, handleLogIn } = require("../handlers/handlers");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", handleSignUp);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", handleLogIn);

module.exports = {
  router,
};
