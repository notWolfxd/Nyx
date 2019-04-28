const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    //Build .iamnot help Embed.
    var iamHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: IAmNot")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Removes a gamemode role of your choice.")
    .addField("Usage: ", "-iamnot [Gamemode (factions | skyblock | prison)]")
    .addField("Example: ", "-iamnot factions")
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for .iamnot.
    let gamemode = args;
    let facsrole = message.guild.roles.find(r => r.id === "556189435796914204");
    let sbrole = message.guild.roles.find(r => r.id === "556189434672971777");
    let prisonrole = message.guild.roles.find(r => r.id === "556189416172027910");
    let member = message.member;
    if (!gamemode) return message.channel.sendEmbed(iamnotHelpEmbed);
    if (args[0] != "factions" && args[0] != "prison" && args[0] != "skyblock") return message.channel.sendEmbed(iamHelpEmbed);
 
    //Build .iamnot message Embed.
    var leaderEmbed = new Discord.RichEmbed()
    .setTitle("Role Removed")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role Removed From:", `${message.author.username}`)
    .addField("Role Name:", `${gamemode}`)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
    if(args[0].toLowerCase() == "factions" && member.roles.has(556189435796914204))
        return member.removeRole(facsrole);
    if(args[0].toLowerCase() == "skyblock" && member.roles.has(556189434672971777))
        return member.removeRole(sbrole);
    if(args[0].toLowerCase() == "prison" && member.roles.has(556189416172027910))
        return member.removeRole(prisonrole);
    //message.reply("staff have been notified that you need the correct role. Please be patient.");
 // client.channels.get("530178004928823306").sendEmbed(leaderEmbed);
  }

module.exports.help = {
    name: "iamnot",
    aliases: [ "iamn",
               "unassign" 
               ]
}
