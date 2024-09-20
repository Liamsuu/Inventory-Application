const pool = require("./pool");

async function getItemsWithCategory(category) {
  const listings = await pool.query(
    `SELECT * FROM products
         WHERE category = $1;
        `,
    [category]
  );
  listings.forEach((product) => {});
  return listings.rows;
}

async function addItem(prodName, category, brand, quantity) {
  await pool.query(
    `
        INSERT INTO products (prodname, category, brand)
        VALUES($1, $2, $3)
        RETURNING *;
        `,
    [prodName, category, brand],
    async (err, result) => {
      await pool.query(
        `
        INSERT INTO sales (product_id, quantity)
        VALUES($1, $2);
        `,
        [result.rows[0].id, quantity]
      );
    }
  );
}

module.exports = { getItemsWithCategory, addItem };
