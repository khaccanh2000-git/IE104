const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const productModel = require("../models/product.model");
const passport = require("passport");


function check(req, res, next) {
    if (req.isAuthenticated() && req.user.role === "Admin") {
      console.log("la tk admin")
    return next();
  }
  console.log("k la tk admin")
  res.redirect("/admin/login");
}

router.get("/", check, async (req, res) => {

    const users = await userModel.find();
  const products = await productModel.find();
  res.render("admin/index", { users: users, products: products });
});


router.get("/login", (req, res) => {
  res.render("admin/login");
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/admin/login",
    failureFlash: true,
  })
);


module.exports = router;
