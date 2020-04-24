const { Pool } = require('pg');

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
 // ssl: true,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
});

        db.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
db.query('CREATE TABLE IF NOT EXISTS gSettings (guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT)', (err, res) => {

if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
}) })
	
module.exports = {
    dbConnect: () => {
        return db
    }
}
