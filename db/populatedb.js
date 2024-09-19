require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  prodname VARCHAR( 255 ) NOT NULL,
  category VARCHAR ( 255 ) NOT NULL,
  quantity INTEGER NOT NULL
);`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.LOCAL_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
