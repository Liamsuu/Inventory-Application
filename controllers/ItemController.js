const db = require("../db/queries.js");

function addItemGet(req, res) {
  res.render("AddItem", {});
  res.end();
}

async function addItemPost(req, res) {
  db.addItem(
    req.body.prodname,
    req.body.category,
    req.body.brand,
    req.body.quantity
  );
  res.redirect("/");
}

module.exports = { addItemGet, addItemPost };
