const db = require("../db/queries.js");

// clicking add product on homepage will run this controller that renders the add product webpage.
function addItemGet(req, res) {
  res.render("AddItem", {});
  res.end();
}

// on add item webpage, submitting it will run this controller which sends the data to the database tables
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
