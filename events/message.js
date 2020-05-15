const fs = require("fs");
const config = require("../config.json");
const { dbConnect } = require("./dbConnection.js");

exports.run = async (client, message) => {
   
    let db;
    db = dbConnect();
   
   const selGuild = "SELECT * FROM guildSettings WHERE guildId = $1"
   const phVal1 = [message.guild.id]
   
 await db.query(selGuild, phVal1, (er, res) => {
      if (res.rows.length === 0) { 
         
         const insGuild = "INSERT INTO guildSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *"
         const phVal2 = [message.guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"];
      
    db.query(insGuild, phVal2, (err, res) => { 
      if (err) { 
         console.log(err.stack);
               } else {
         console.log(res.rows[0]);
               }
           })
         }
      })
    
      if (message.author.bot) return;
      if (message.channel.type === "dm") return;
   
   const selGuildData = "SELECT prefix, modrole, commandchannel FROM guildSettings WHERE guildId = $1"
   const phVal3 = [message.guild.id]
   
  await db.query(selGuildData, phVal3, (er, res) => {
     const prefix = res.rows[0].prefix;
     const modrole = res.rows[0].modrole;
     const commandchannel = res.rows[0].commandchannel;     

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;

      if (client.commands.has(cmd)) {
         command = client.commands.get(cmd);
    } else if (client.aliases.has(cmd)) {
         command = client.commands.get(client.aliases.get(cmd));
    }
      if (message.channel.id !== (commandchannel) && !message.member.roles.has(modrole) && !message.member.hasPermission("ADMINISTRATOR") && message.author.id !== ("298812170093723649")) return;
      if (!message.content.startsWith(prefix)) return;

      if (command) {
        if (message.author.id == config.owner) 
           return message.channel.send(`${message.author.username} Sorry the command has been Disabled!!`);
                   }
  try {
      command.run(client, message, args, prefix, db);
      } catch (e) {
      message.channel.send(e);
      }
    })
  }
