const { Client } = require('pg');

exports.run = async (client) => {

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

db.connect();

db.query('CREATE TABLE IF NOT EXISTS guildSettings (guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT);')
.then(() => {
		console.log("Table created.");
		})
	.catch((err) => {
		console.log(err);
		});
	}
	
module.exports = db;
