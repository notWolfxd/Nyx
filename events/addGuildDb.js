const db = require("./dbConnection.js");

module.exports = {
    addGuildtoDB: (guild) => {
    db.query('BEGIN', err => {
   
      db.query(`SELECT * FROM guildSettings WHERE guildId ="${guild.id}"`).then(row => {
            if (!row) {
            db.query("INSERT INTO guildSettings (guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]);
             } 
            }).catch((err) => {
            console.log(err);
          
            db.query("INSERT INTO guildSettings (guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]);
          })
        db.query('COMMIT', err => {
          if (err) {
            console.error('Error committing transaction', err.stack)
          }
          
        })
      })
    
        
    }
}
