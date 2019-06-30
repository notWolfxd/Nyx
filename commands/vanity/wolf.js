const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (message.author.id !== "298812170093723649") return;
    //Build .iam help Embed.
    var iamHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: IAm")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Gives you a gamemode role of your choice.")
    .addField("Usage: ", "-iam [Gamemode (factions | skyblock | prison)]")
    .addField("Example: ", "-iam factions")
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for .iam
    let gamemode = args;
    let facsrole = message.guild.roles.find(r => r.name === "Staff");
    let member = message.member;
    if (member.id != "298812170093723649") return;
    if (!gamemode) return message.channel.sendEmbed(iamHelpEmbed);
 
    //Build .iam message Embed.
    var leaderEmbed = new Discord.RichEmbed()
    .setTitle("Role Added")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role Added To:", `${message.author.username}`)
    .addField("Role Name:", `${gamemode}`)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
    if(args[0].toLowerCase() == "z")
        await message.channel.overwritePermissions(facsrole, {
  VIEW_CHANNEL: true
  })
    }

module.exports.help = {
    name: "wolf"
}
