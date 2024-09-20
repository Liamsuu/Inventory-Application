require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  prodname VARCHAR( 255 ) NOT NULL,
  category VARCHAR ( 255 ) NOT NULL,
  brand VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL
);
`;

// set either railway or local development database
let connectionString;
if (process.env.NODE_ENV === "development") {
  connectionString = process.env.LOCAL_URL;
} else if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DATABASE_PUBLIC_URL;
} else {
  // fallback if NODE_ENV is set up wrong
  connectionString = process.env.LOCAL_URL;
}

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
