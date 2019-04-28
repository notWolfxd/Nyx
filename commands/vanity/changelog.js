const Discord = require("discord.js");
const cooldown = new Set();

module.exports.run = async (client, message, args) => {

 //   if (!message.member.roles.has("427989567925256212")) 
 //     return;
    //Build changelog help Embed
    var changelogHelpEmbed = new Discord.RichEmbed()

    .setTitle("Command: Changelog")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Update players on what has changed recently on the server.")
    .addField("Permissions:", "You must have the Management role.")
    .addField("Usage: ", "-changelog <content>")
    .addField("Example:", "-changelog ur mum has been cured of ligma.")
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for changelog.
    let changelogcontent = message.content();

    //Build the .changelog message Embed.
    var changelogEmbed = new Discord.RichEmbed()
    
    .setColor(meesage.member.highestRole.color)
    .addField("Changelog:", `${changelogcontent}`)
    .setFooter(`Nyx v1.4.4 | Submitted By: ${message.author.username}`, message.author.avatarURL)

  // if (message.member.roles.has("427989567925256212")) 
       client.channels.get("426903359392448522").send(changelogEmbed);
 //     await message.reply("you need a leader role to use this command!");
    }
 module.exports.help = {
    name: "changelog",
    aliases: [ "cl",
               "update",
               "lolglennok"
             ]
}
