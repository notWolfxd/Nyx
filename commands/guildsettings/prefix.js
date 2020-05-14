const { RichEmbed } = require("discord.js");
const { dbConnect }= require("../../events/dbConnection.js");

module.exports.run = async (client, message, args) => {
 
if (!message.member.hasPermission("MANAGE_GUILD")) return;
if (!args[0]) return message.channel.send("Please specify a new prefix!");
  
  let db;
  db = dbConnect();
    
    const selGuildPrefix = "SELECT prefix FROM guildSettings WHERE guildId = $1"
    const phVal3 = [message.guild.id]
   
      db.query(selGuildPrefix, phVal3, (er, res) => {
       
        const updPrefix = `UPDATE guildSettings SET prefix = $1 WHERE guildId = $2`
        const phVals = [args[0], message.guild.id]
       
         db.query(updPrefix, phVals, (err, res) => {
          
           if (err) { 
              console.log(err.stack);
               } else {
              console.log(`Prefix changed to ${args[0]} in ${message.guild.id}`);
               }
           })

    message.channel.send(`Your prefix was set to \`${args[0]}\`!`);
        }) 
};

module.exports.help = {
    name: "prefix",
    aliases: ["pfx"],
    description: "Change the bot prefix for this guild.",
    usage: "prefix <NewPrefix>",
    example: "prefix >",
    category: "Guild Settings"
}
