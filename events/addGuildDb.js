const db = require("./dbConnection.js");

module.exports = {
    addGuildtoDB: (guild) => {
    db.query('BEGIN', err => {
   
db.query(`SELECT * FROM gSettings WHERE guildId ="${guild.id}"`, (rows) => {
        if (rows.length < 1) {
           let idk;
           idk = `INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES ("${message.guild.id}", "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none")`;
         
            db.query(idk, console.log)} 
        })
        
        db.query('COMMIT', err => {
          if (err) {
            console.error('Error committing transaction', err.stack)
          }
          
        })
      })
    
        
    }
}
