const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES"))
   return;

let colourchange = args.join(" ").split(" | ");
let roleclr = colourchange[0];

if (roleclr.position >= message.member.highestRole.position)
        return message.channel.send("You do not have permission to edit this role!");

let clrchange;
        if (message.mentions.roles.size) {
          clrchange = message.mentions.roles.first();
        }
        else if (message.guild.roles.has(roleclr)) {
          clrchange = message.guild.roles.get(roleclr);
        }
        else {
          clrchange = message.guild.roles.find(role => role.name === roleclr);
        }
let colour = colourchange[1];

if (!clrchange)
        return message.channel.send("Could not find the original role or you did not specify a colour.");
if (!clrchange.editable)
        return message.channel.send("I do not have sufficient enough permissions to change the colour of that role.");

clrchange.setColor(colour, `${message.author.username} | With command rolecolour.`);

var rcchangeembed = new Discord.RichEmbed()
   .setTitle("Role Colour Changed")
   .setColor(colour)
   .addField("Role Name", clrchange, true)
   .addField("New Colour", colour, true)
   
message.channel.send(rcchangeembed);

};
module.exports.help = {
    name: "rolecolour",
    aliases: [
            "rc",
            "colour"
    ]
  }
