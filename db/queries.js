const pool = require("./pool");

async function getItemsWithCategory(category) {
  const listings = await pool.query(
    `SELECT products.id, products.prodname, products.category, products.brand, sales.quantity FROM products
      INNER JOIN sales
      ON products.id = sales.product_id
      WHERE category = $1;
        `,
    [category]
  );
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

async function removeProduct(id) {
  await pool.query(
    `
    DELETE FROM products
    WHERE id = $1;
    `,
    [id]
  );

  await pool.query(
    `
    DELETE FROM sales
    WHERE product_id = $1;
    `,
    [id]
  );
}
module.exports = { getItemsWithCategory, addItem, removeProduct };
