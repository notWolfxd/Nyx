const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

//Build Screenshare Request help embed.
 var ssrHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: ScreenshareRequest")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Request a player to be screenshared by an SS Verified person.")
    .addField("Usage: ", "-ss <IGN> | <realm> | <reason>")
    .addField("Example: ", "-ss JarnoPwr | Demonic | Being a nerd.")
    .setFooter("Nyx v1.4.5 | Made By: Wolf#9001", client.user.avatarURL)
    
//Define the arguments for Screenshare Request
    let ssrDefine = args.join(" ").split(" | ");
    let playertoSS = ssrDefine[0];
    let realm = ssrDefine[1];
    let reason = ssrDefine[2];
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
if (message.guild.id == "460208972306186252") {
 await ssverifiedrole.setMentionable(true, `${message.author.username} | With command Screenshare Request. (Start)`);
 await client.channels.get("573718629435047956").send(`<@&${ssverifiedrole.id}>`);
 await ssverifiedrole.setMentionable(false, `${message.author.username} | With command Screenshare Request. (End)`);
 await client.channels.get("573718629435047956").send(ssrEmbed);
 await message.channel.send("Screenshare notify staff have been notified with your request.");
  
},
  }

module.exports.help = {
    name: "screenshare",
    aliases: [ "ss",
               "ssr",
               "screensharerequest",
               "requestss"
             ]
}
