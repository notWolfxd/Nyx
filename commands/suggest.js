const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let gametype = args[0];
    let suggestion = args.slice(1).join(" ")
    if (!gametype || !suggestion) return message.reply("to submit a suggestion do: `.suggest (Gamemode [Factions | Skyblock | Prison]) (Suggestion)`.");
    var suggestEmbed = new Discord.RichEmbed()
    .setDescription("**Suggestion**")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Suggested By:", `${message.author} | ${message.author.id}`)
    .addField("Suggestion For:", `${gametype}`)
    .addField("Their Suggestion Is:", `${suggestion}`)
    .setFooter("Nyx v1.2.9 | Made By: Wolf#9001", client.user.avatarURL)
  message.reply("thank you for your suggestion, it has been sent to the suggestion area for players to vote on!");
  let voting = await client.channels.get("512077901085278228").sendEmbed(suggestEmbed);
  await voting.react("✅");
  await voting.react("❌");
  }

 module.exports.help = {
    name: "suggest"
 }
