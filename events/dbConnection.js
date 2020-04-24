const pgp = require("postgres")()

const connectionString = process.env.DATABASE_URL

const db = pgp(connectionString)

module.exports = db;
