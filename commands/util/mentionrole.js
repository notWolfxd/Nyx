const Discord = require("discord.js");
const {getRole} = require("../../functions.js")

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES"))
   return;

const mentionrole = getRole(message, args.join(" "));

if (!mentionrole.editable)
        return message.channel.send("I do not have sufficient permissions to mention that role!");

if (mentionrole.position >= message.member.highestRole.position)
        return message.channel.send("You do not have permission to mention this role!");

if (!mentionrole)
        return message.channel.send("Could not find role to mention!")

if (mentionrole.editable) {
  await mentionrole.setMentionable(true, `${message.author.username} | With command mentionrole. (Start)`);
  await message.channel.send(`<@&${mentionrole.id}>`);
  await mentionrole.setMentionable(false, `${message.author.username} | With command mentionrole. (End)`);
        }
};
module.exports.help = {
    name: "mentionrole",
    aliases: [
            "mr",
            "menro"
    ]
  }
