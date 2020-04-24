const { Pool } = require('pg');

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
 // ssl: true,
  max: 20,
  connectionTimeoutMillis: 10000000000000000000,
  idleTimeoutMillis: 100000000000000000000000
});

db.query('CREATE TABLE IF NOT EXISTS guildSettings (guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT)', (err, res) => {

console.log(err,res);
})

	
module.exports = {
    dbConnect: () => {
        return db
    }
}
