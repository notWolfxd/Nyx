const { RichEmbed } = require("discord.js");
const { dbConnect } = require("../../events/dbConnection.js");
const { getRole } = require("../../functions.js");

module.exports.run = async (client, message, args) => {
 
if (!message.member.hasPermission("MANAGE_GUILD")) return;
if (!args[0]) return message.channel.send("Please specify a role!");

const role = getRole(message, args.join(" "));
  
  let db;
  db = dbConnect();
    
    const selModRole = "SELECT modrole FROM guildSettings WHERE guildId = $1"
    const phVal3 = [message.guild.id]
   
      db.query(selModRole, phVal3, (er, res) => {
       
        const updModRole = `UPDATE guildSettings SET modrole = $1 WHERE guildId = $2`
        const phVals = [role.id, message.guild.id]
       
         db.query(updModRole, phVals, (err, res) => {
          
           if (err) { 
              console.log(err.stack);
               } else {
              console.log(`Mod role changed to ${role} in ${message.guild.id}`);
               }
           })

    message.channel.send(`Your mod role was set to \`${role.id}\`!`);
        }) 
};

module.exports.help = {
    name: "modrole",
    aliases: ["moderatorrole"],
    description: "Change the moderator role for commands in this guild.",
    usage: "modrole <Role>",
    example: "modrole Staff",
    category: "Guild Settings"
}
