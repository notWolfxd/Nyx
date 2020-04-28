const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

   if (message.guild.id !== "460208972306186252")
      return;
 
   const ssrHelp = new RichEmbed()
    .setTitle("Command: Screenshare")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Request a player to be screenshared by an SS Verified person.", stripIndents`**Usage:** \`-ss <IGN> <Realm> <Reason>\`
    **Example:** \`-ss JarnoPwr Demonic Being bald\`
    **Aliases:** \`ss\`, \`ssr\`, \`screensharerequest\`, \`requestss\`
    **Category:** Vanity`)
    .setFooter(`${config.version}`, client.user.avatarURL)
    
     let playertoSS = args[0];
     let realm = args[1];
     let realms = [ "runic", "demonic", "heroic", "prison", "space", "hogwarts", "genesis" ]
     let reason = args.slice(2).join(" ");
     let ssverifiedrole = message.guild.roles.find(r => r.name === "SS Verified");
 
   if (!realms.includes(realm.toLowerCase()))
      return message.channel.send(ssrHelp);
   if (!playertoSS || !realm || !reason) 
      return message.channel.send(ssrHelp);
    
   const ssrEmbed = new RichEmbed()
    .setTitle("Screenshare Requested")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("IGN:", `${playertoSS}`, true)
    .addField("Realm:", `${realm}`, true)
    .addField("Reason:", `${reason}`)
    .setFooter(`${config.version} | Reported By: ${message.author.tag}`, client.user.avatarURL)
    
   if (reason) {
      await ssverifiedrole.setMentionable(true, `${message.author.tag} | With command Screenshare Request. (Start)`);
      await client.channels.get("573718629435047956").send(`<@&${ssverifiedrole.id}>`);
      await ssverifiedrole.setMentionable(false, `${message.author.tag} | With command Screenshare Request. (End)`);
      await client.channels.get("573718629435047956").send(ssrEmbed);
      await message.channel.send("Screenshare staff have been notified with your request.");
               }
}
module.exports.help = {
    name: "screenshare",
    aliases: [ "ss", "ssr", "screensharerequest", "requestss" ],
    description: "Request a player to be screenshared.",
    usage: "ss <IGN> <Realm> <Reason>",
    example: "ss JarnoPwr Demonic Being bald",
    category: "Vanity"
}
