const pool = require("./pool");

async function getItemsWithCategory(category) {
  const listings = await pool.query(
    `SELECT * FROM products
         WHERE category = $1;
        `,
    [category]
  );
  return listings.rows;
}

async function addItem(prodName, category, quantity) {
  await pool.query(
    `
        INSERT INTO products (prodname, category, quantity)
        VALUES($1, $2, $3);
        `,
    [prodName, category, quantity]
  );
}

module.exports = { getItemsWithCategory, addItem };
