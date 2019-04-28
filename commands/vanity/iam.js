const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    //Build .iam help Embed.
    var iamHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: IAm")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Gives you a gamemode role of your choice.")
    .addField("Usage: ", "-iam [Gamemode (factions | skyblock | prison)]")
    .addField("Example: ", "-iam factions")
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for .iam.
    let gamemode = args
    if (!gamemode) return message.channel.sendEmbed(iamHelpEmbed);
    if (args[0] != "factions" && args[0] != "prison" && args[0] != "skyblock") return message.channel.sendEmbed(iamHelpEmbed);
 
    //Build .iam message Embed.
    var leaderEmbed = new Discord.RichEmbed()
    .setTitle("Role Added")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role Added To:", `${message.author.username}`)
    .addField("Role Name:", `${gamemode}`)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
    if(args[0].toLowerCase() == "factions")
        return message.member.addRole(556189435796914204);
    if(args[0].toLowerCase() == "skyblock")
        return message.member.addRole(556189434672971777);
    if(args[0].toLowerCase() == "prison")
        return message.member.addRole(556189416172027910);
    //message.reply("staff have been notified that you need the correct role. Please be patient.");
 // client.channels.get("530178004928823306").sendEmbed(leaderEmbed);
  }

module.exports.help = {
    name: "iam"
}
