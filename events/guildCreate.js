const fs = require("fs");
const config = require("../config.json");
const { dbConnect } = require("./dbConnection.js");

exports.run = async (client, guild) => {

    let db;
    db = dbConnect();
    
    db.query(`SELECT * FROM gSettings WHERE guildId ="${guild.id}"`).then(rows => {
        if (!rows) {
           let idk;
           idk = `INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", ["${guild.id}", "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
            db.query(idk, console.log)} 
        }).catch((err) => { 
     console.error;
     db.query("CREATE TABLE IF NOT EXISTS gSettings(guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT").then(() => {
     let idk;
           idk = `INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", ["${guild.id}", "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
            db.query(idk, console.log(err))
     })
  
  })

}
