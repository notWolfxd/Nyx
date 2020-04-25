const fs = require("fs");
const config = require("../config.json");
const { dbConnect } = require("./dbConnection.js");

exports.run = async (client, message) => {
   
    let db;
    db = dbConnect();
    
  await db.query(`SELECT * FROM gSettings WHERE guildId ="${message.guild.id}"`).then(rows => {
        if (!rows) {
           let idk;
           idk = `INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)" ["${message.guild.id}", "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
            db.query(idk, console.log)} 
        }).catch((err) => { 
     console.error;
     db.query("CREATE TABLE IF NOT EXISTS gSettings(guildId TEXT, prefix TEXT, casenumber INTEGER, autoroleenabled TEXT, roletogive TEXT, logsenabled TEXT, logschannel TEXT, wlchannel TEXT, wlsystem TEXT, welcomemessage TEXT, slowmodetime INTEGER, modrole TEXT, commandchannel TEXT, blacklisteduser TEXT").then(() => {
     let idk;
           idk = `INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)" ["${message.guild.id}", "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
            db.query(idk, console.log(err))
     })
  
  })
/*   await db.query(`SELECT * FROM gSettings WHERE guildId ="${message.guild.id}"`, (rows) => {
        if (rows.length < 1) {
           let idk;
           idk = `INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)" ["${message.guild.id}", "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
         
            db.query(idk, console.log)} 
        }) */
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]) {
       prefixes[message.guild.id] = {
         prefixes: config.prefix
      };
      }

   let prefix = prefixes[message.guild.id].prefixes;
    /*   db.query(`SELECT * FROM guildSettings WHERE guildId ="${message.guild.id}"`).then(row => {
        if (!row) return;

             const prefix = row.prefix
                if (row.prefix === undefined) return prefix = "-" */
           
    
let args = message.content.slice(prefix.length).trim().split(/ +/g);
let cmd = args.shift().toLowerCase();
let command;

if (client.commands.has(cmd)) {
    command = client.commands.get(cmd);
} else if (client.aliases.has(cmd)) {
    command = client.commands.get(client.aliases.get(cmd));
}

    if (!message.content.startsWith(prefix)) return;

    if (command) {
    
        if (message.author.id == config.owner) return message.channel.send(`${message.author.username} Sorry the command has been Disabled!!`);
    }
try {
    command.run(client, message, args, prefix, db);

} catch (e) {
}
// })
}
