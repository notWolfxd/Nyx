const { RichEmbed } = require("discord.js");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

   if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== ("298812170093723649"))
      return;  
      
    await message.channel.send("Unbanning all users. This may take some time depending on the total bans.");
	
      message.guild.fetchBans().then(bans => {
           bans.forEach(user => {
               console.log(user.tag + 'Unbanned');
               message.guild.unban(user);
                })
              });
	
    await message.channel.send("All users unbanned.");
	
}        
module.exports.help = {
    name: "unbanall",
    aliases: [ "uba", "clearbans" ],
    description: "Unban all users from the guild.",
    usage: "unbanall",
    category: "Moderation"
} 
