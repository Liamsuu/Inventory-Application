const db = require("../db/queries");

// homepage. this is the first thing rendered at the index route, it does not contain any product listings
function HomepageGet(req, res) {
  res.render("Homepage", {});
}

// removes product from database based on id
function removeProductFromDb(req, res) {
  db.removeProduct(req.body.prodId);
  res.redirect("/");
}

// update product controllers. get version loads webpage with old data, post sends get info to database
async function updateItemInDbGet(req, res) {
  res.render("UpdateItem", {
    prodDetails: await db.getItemByID(req.query.prodId),
  });
}

async function updateItemInDbPost(req, res) {
  await db.updateDb(
    req.body.id,
    req.body.prodname,
    req.body.category,
    req.body.brand,
    req.body.quantity
  );
  res.redirect("/");
}

module.exports = {
  HomepageGet,
  removeProductFromDb,
  updateItemInDbGet,
  updateItemInDbPost,
};
