const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

//Build Screenshare Request help embed.
 var ssrHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: ScreenshareRequest")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Request a player to be screenshared by an SS Verified person.")
    .addField("Usage: ", "-ss <IGN> <realm> <reason>")
    .addField("Example: ", "-ss JarnoPwr Demonic being an idiot")
    .setFooter("Nyx v1.4.5 | Made By: Wolf#9001", client.user.avatarURL)
    
//Define the arguments for Screenshare Request
    let playertoSS = args[0];
    let realm = args[1];
    let reason = args[2].join(" ");
    let ssverifiedrole = message.guild.roles.find(r => r.name === "SS Verified");
    let member = message.member;
    if (!playertoSS) return message.channel.sendEmbed(ssrHelpEmbed);
    
//Build Screenshare Request message Embed.
var ssrEmbed = new Discord.RichEmbed()
    .setTitle("Screenshare Requested")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("IGN:", `${playertoSS}`, true)
    .addField("Realm:", `${realm}`, true)
    .addField("Reason:", `${reason}`)
    .setFooter("Nyx v1.4.5 | Made By: Wolf#9001", client.user.avatarURL)
    
//Sending the completed command things.

  await ssverifiedrole.setMentionable(true, `${message.author.username} | With command Screenshare Request. (Start)`);
  await message.channel.send(`<@&${ssverifiedrole.id}>`);
  await ssverifiedrole.setMentionable(false, `${message.author.username} | With command Screenshare Request. (End)`);
  await client.channels.get("573718629435047956").send(ssrEmbed);
  await message.channel.send("Screenshare notify staff have been notified with your request.");
  
  
  }

module.exports.help = {
    name: "screenshare",
    aliases: [ "ss",
               "ssr",
               "screensharerequest",
               "requestss"
             ]
}
