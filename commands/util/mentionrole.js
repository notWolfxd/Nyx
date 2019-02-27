const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES"))
   return;

let menrole = args.join(" ");

if (menrole.position >= message.member.highestRole.position)
        return message.channel.send("You do not have permission to mention this role!");
        
let mentionrole;
        if (message.mentions.roles.size) {
          mentionrole = message.mentions.roles.first();
        }
        else if (message.guild.roles.has(menrole)) {
          mentionrole = message.guild.roles.get(menrole);
        }
        else {
          mentionrole = message.guild.roles.find(role => role.name === menrole);
        }

if (!menrole)
        return message.channel.send("Could not find role to mention.");

if (mentionrole.editable) {
  await mentionrole.setMentionable(true, `${message.author.username} | With command mentionrole. (Start)`);
  await message.channel.send(`<@&${mentionrole.id}>`);
  await mentionrole.setMentionable(false, `${message.author.username} | With command mentionrole. (End)`);
        }
if (!mentionrole.editable)
        return message.channel.send("I do not have sufficient enough permissions to mention that role.");
};
module.exports.help = {
    name: "mentionrole",
    aliases: [
            "mr",
            "menro"
    ]
  }
