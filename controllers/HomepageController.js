const db = require("../db/queries");

function HomepageGet(req, res) {
  res.render("Homepage", {});
}

function removeProductFromDb(req, res) {
  db.removeProduct(req.body.prodId);
  res.redirect("/");
}

module.exports = { HomepageGet, removeProductFromDb };
