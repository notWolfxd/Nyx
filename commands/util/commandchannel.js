const { RichEmbed } = require("discord.js");
const { dbConnect } = require("./../events/dbConnection.js");
const { getChannel } = require("../../functions.js");

module.exports.run = async (client, message, args) => {
 
if (!message.member.hasPermission("MANAGE_GUILD")) return;
if (!args[0]) return message.channel.send("Please specify a new channel!");

const channel = getChannel(message, args[0]);
  
  let db;
  db = dbConnect();
    
    const selCmdChan = "SELECT commandchannel FROM guildSettings WHERE guildId = $1"
    const phVal3 = [message.guild.id]
   
      db.query(selCmdChan, phVal3, (er, res) => {
       
        const updCmdChan = `UPDATE guildSettings SET commandchannel = $1 WHERE guildId = $2`
        const phVals = [channel, message.guild.id]
       
         db.query(updCmdChan, phVals, (err, res) => {
          
           if (err) { 
              console.log(err.stack);
               } else {
              console.log(`Command channel changed to ${args[0]} in ${message.guild.id}`);
               }
           })

    message.channel.send(`Your commands channel was set to \`${channel}\`!`);
        }) 
};

module.exports.help = {
    name: "commandchannel",
    aliases: ["cmdchannel"],
    description: "Change the channel for command usage in this guild.",
    usage: "commandchannel <Channel>",
    example: "commandchannel #commands",
    category: "Util"
}
