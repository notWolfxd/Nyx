const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES"))
   return;

  let args.role = args.join(" ");
  if (message.mentions.roles.size) {
    role = message.mentions.roles.first();
  }
  else if (message.guild.roles.has(args.role)) {
    role = message.guild.roles.get(args.role);
  }
  else {
    role = message.guild.roles.find(role => role.name === args.role);
  }

   if (!args.role)
    return message.channel.send("Specify a role!");

  args.role = args.role.join(' ');
   
   	
   
  if (role.editable) {
    await role.setMentionable(true, '`${message.author}`, with command mentionrole (Start).');
    await message.channel.send(`<@&${role.id}>`);
    await role.setMentionable(false, '`${message.author}`, with command mentionrole (Stop).');
     
     if (err)
        return message.channel.send(err);
     	
  }
};

module.exports.help = {
    name: "mentionrole",
    aliases: [
            "mr",
            "menro"
    ]
  }
