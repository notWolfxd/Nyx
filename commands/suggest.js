const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //Build .suggest help Embed
    var suggestHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: Suggest")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Sends a suggestion to the suggestion channel. Once sent the players/ users can vote upon what was suggested.")
    .addField("Usage: ", ".suggest (Gamemode [factions | skyblock | prison]) (Suggestion)")
    .addField("Example: ", ".suggest Factions ╠═══╣ Lets build a ladder to demote Milk ╠═══╣")
    .setFooter("Nyx v1.3.1 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for .suggest.
    let gametype = args[0];
    let suggestion = args.slice(1).join(" ")
    if (args[0] != "factions" && args[0] != "prison" && args[0] != "skyblock") return message.channel.sendEmbed(suggestHelpEmbed);

    //Build the .suggest message Embed.
    var suggestEmbed = new Discord.RichEmbed()
    .setTitle("Suggestion")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Suggested By:", `${message.author} | ${message.author.id}`)
    .addField("Suggestion For:", `${gametype}`)
    .addField("Their Suggestion Is:", `${suggestion}`)
    .setFooter("Nyx v1.3.1 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
  message.reply("thank you for your suggestion, it has been sent to the suggestion area for players to vote on!");
  let voting = await client.channels.get("512077901085278228").sendEmbed(suggestEmbed);
  await voting.react("✅");
  await voting.react("❌");
  }

 module.exports.help = {
    name: "suggest"
 }
