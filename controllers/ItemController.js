const db = require("../db/queries.js");

function addItemGet(req, res) {
  res.render("AddItem", {});
  res.end();
}

async function addItemPost(req, res) {
  db.addItem(); // fill these parameters out
}

module.exports = { addItemGet, addItemPost };
