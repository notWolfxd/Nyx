const fs = require("fs");
const config = require("../config.json");
const db = require("./dbConnection.js");

exports.run = (client, message) => {
    
    db.query(`SELECT * FROM guildSettings WHERE guildId ="${message.guild.id}"`).then(row => {
        if (!row) {
            db.query("INSERT INTO guildSettings (guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]);
          } 
        })
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
 //  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

 //   if (!prefixes[message.guild.id]) {
 //      prefixes[message.guild.id] = {
 //         prefixes: config.prefix
 //      };
 //     }

 //  let prefix = prefixes[message.guild.id].prefixes;
       db.query(`SELECT * FROM guildSettings WHERE guildId ="${message.guild.id}"`).then(row => {
        if (!row) return;

              const prefix = row.prefix
                if (row.prefix === undefined) return prefix = "-"
           
    
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
    command.run(client, message, args, prefix);

} catch (e) {
}
 })
}
