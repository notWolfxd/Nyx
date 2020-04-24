const { Pool } = require('pg');

exports.run = async (client) => {

const db = await new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
});

await db.run('CREATE TABLE guildSettings (guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT);')
.then(() => {
		console.log("Table created.");
		})
	.catch((err) => {
		console.log(err);
		});
	
	
	}
	
