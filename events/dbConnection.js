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
	
db.query('BEGIN', err => {
    if (shouldAbort(err)) return;
      db.query('CREATE TABLE IF NOT EXISTS guildSettings (guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT)', (err, res) => {
        if (shouldAbort(err)) return;
        db.query('COMMIT', err => {
          if (err) {
            console.error('Error committing transaction', err.stack)
          }
          
        
      })
    })
  })
	
module.exports = {
    dbConnect: () => {
        return db
    }
}
