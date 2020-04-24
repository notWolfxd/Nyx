const pgp = require("pg-promise")()

const connectionString = process.env.DATABASE_URL

const db = pgp(connectionString)

console.log("Works!")

module.exports = db;
