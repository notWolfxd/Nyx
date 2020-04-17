const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

 if (message.guild.id !== "460208972306186252")
   return;
 
//Build Screenshare Request help embed.
 var ssrHelpEmbed = new Discord.RichEmbed()

    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Command: Screenshare", `**Description:** Request a player to be screenshared by an SS Verified person.
    **Usage:** -ss <IGN> <Realm> <Reason>
    **Example:** -ss JarnoPwr Demonic Being bald
    **Category:** Vanity
    **Aliases:** ss, ssr, screensharerequest, requestss`)

    .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)
    
//Define the arguments for Screenshare Request
    let playertoSS = args[0];
    let realm = args[1];
    let reason = args.slice(2).join(" ");
    let ssverifiedrole = message.guild.roles.find(r => r.name === "SS Verified");
    if (!playertoSS || !realm || !reason) return message.channel.sendEmbed(ssrHelpEmbed);
    
//Build Screenshare Request message Embed.
var ssrEmbed = new Discord.RichEmbed()
    .setTitle("Screenshare Requested")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("IGN:", `${playertoSS}`, true)
    .addField("Realm:", `${realm}`, true)
    .addField("Reason:", `${reason}`)
    .setFooter(`${config.version} | Reported By: ${message.author.tag} | Made By: Wolf#9001`, client.user.avatarURL)
    
//Sending the completed command things.
if (reason) {
  await ssverifiedrole.setMentionable(true, `${message.author.username} | With command Screenshare Request. (Start)`);
  await client.channels.get("573718629435047956").send(`<@&${ssverifiedrole.id}>`);
  await ssverifiedrole.setMentionable(false, `${message.author.username} | With command Screenshare Request. (End)`);
  await client.channels.get("573718629435047956").send(ssrEmbed);
  await message.channel.send("Screenshare staff have been notified with your request.");
   }
  }

module.exports.help = {
    name: "screenshare",
    aliases: [ "ss",
               "ssr",
               "screensharerequest",
               "requestss"
             ]
}
