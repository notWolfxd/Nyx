const fs = require("fs");
const config = require("../config.json");
const { dbConnect } = require("./dbConnection.js");

exports.run = (client, guild) => {

    let db;
    db = dbConnect();
    
    db.query(`SELECT * FROM gSettings WHERE guildId ="${guild.id}"`, (row) => {
        if (row.length == 0) {
           let idk;
           idk = `INSERT INTO gSettings (guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)", [guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
            db.query(idk, console.log)} 
        })
}
