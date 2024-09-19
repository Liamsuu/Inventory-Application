const db = require("../db/queries.js");

async function getListings(req, res) {
  const listings = await db.getItemsWithCategory(req.body.category);
  res.render("Homepage", { listings: listings });
  res.end();
}

module.exports = { getListings };
