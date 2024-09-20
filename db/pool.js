const { Pool } = require("pg");

// set either railway or local development database
let connectionString;
if (process.env.NODE_ENV === "development") {
  connectionString = process.env.LOCAL_URL;
} else if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DATABASE_PUBLIC_URL;
} else {
  // fallback to local database if NODE_ENV is set up wrong
  connectionString = process.env.LOCAL_URL;
}

module.exports = new Pool({
  connectionString: connectionString,
});
