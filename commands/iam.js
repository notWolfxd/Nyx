const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    //Build .iam help Embed.
    var iamHelpEmbed = new Discord.RichEmbed()
    .setDescription("**Command: IAm**")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Alerts the proper staff that you need a leader role in the gamemode of choice.")
    .addField("Usage: ", ".iam [Gamemode (Factions | Skyblock | Prison)] [Position (Leader | CoLeader)] [Team name]")
    .addField("Example: ", ".iam Factions Leader Promised")
    .setFooter("Nyx v1.3.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for .iam.
    let [gamemode, position, team] = args;
    if (!position || !team || !gamemode) return message.channel.sendEmbed(iamHelpEmbed);
    if (args[0] != "factions" && args[0] != "prison" && args[0] != "skyblock") return message.channel.sendEmbed(iamHelpEmbed);
    if (args[1] != "leader" && args[1] != "coleader") return message.channel.sendEmbed(iamHelpEmbed);
 
    //Build .iam message Embed.
    var leaderEmbed = new Discord.RichEmbed()
    .setDescription("Leader Request")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role requested by:", `${message.author} | ${message.author.id}`)
    .addField("They are looking for a role in the gametype:", `${gamemode}`)
    .addField("They are apart of:", `${team}`)
    .addField("In this team they are a:", `${position}`)
    .setFooter("Nyx v1.2.5 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
  message.reply("staff have been notified that you need the correct role. Please be patient.");
  client.channels.get("530178004928823306").sendEmbed(leaderEmbed);
  client.channels.get("530178004928823306").send("@everyone");
  }

module.exports.help = {
    name: "iam"
}
