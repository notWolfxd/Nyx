const { Client } = require('pg');

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

db.connect();

module.exports = db;
