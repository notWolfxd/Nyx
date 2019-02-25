const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES"))
   return;

let role = message.guild.roles.find(role => role.name === "`${args[0]}`");
let colour = args[1];

role.setColor("#`${colour}`") || role.setColor("`${colour}`");

.catch(error => message.channel.send(`Unable to change colour because of : ${error}`));

var rcchangeembed = new Discord.RichEmbed()
   .setTitlr("Role Colour Changed")
   .addField("Role Name", "`${args[0]}`", true)
   .addField("New Colour", "`${args[1]}`",true)
   
message.channel.send(rcchangeembed);

.catch(error => message.channel.send(`Unable to change colour because of : ${error}`));

};
module.exports.help = {
    name: "rolecolor",
    aliases: [
            "rc",
            "colour"
    ]
  }
