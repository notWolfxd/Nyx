const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES"))
   return;

let namechange = args.join(" ").split(" | ");
let oldname = namechange[0];

if (oldname.position >= message.member.highestRole.position)
        return message.channel.send("You do not have permission to edit this role!");

let namechanging;
        if (message.mentions.roles.size) {
          namechanging = message.mentions.roles.first();
        }
        else if (message.guild.roles.has(oldname)) {
          namechanging = message.guild.roles.get(oldname);
        }
        else {
          namechanging = message.guild.roles.find(role => role.name === oldname);
        }
let newname = namechange[1];

if (!namechanging)
        return message.channel.send("Could not find the original role or you did not specify a colour.");
if (newname.length >= 100)
        return message.channel.send("The new name you entered is too long.")
if (!namechanging.editable)
        return message.channel.send("I do not have sufficient enough permissions to change the name of that role.");

namechanging.setName(newname, `${message.author.username} | With command renamerole.`);

var ncembed = new Discord.RichEmbed()
   .setTitle("Role Name Changed")
   .setColor("#f439c3")
   .addField("Old Name", oldname, true)
   .addField("New Name", newname,true)
   
message.channel.send(ncembed);

};
module.exports.help = {
    name: "renamerole",
    aliases: [
            "rename",
            "rrole"
    ]
  }
