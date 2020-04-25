const Discord = require("discord.js");
const { dbConnect } = require("../../events/dbConnection.js");

module.exports.run = async (client, message, args) => {
    
    let db;
    db = dbConnect();
    const HYPE = `SELECT * FROM gSettings WHERE guildId="${message.guild.id}"`
    
    await db.query(HYPE, (er, row) => {
        if (!row) {
    
    const text = "INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *"
    const values = [message.guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"];
    
   db.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    
  }
})
            }
  })
  

}

module.exports.help = {
    name: "wolf"
}
