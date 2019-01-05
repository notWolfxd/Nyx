const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let [gamemode, position, team] = args;
    if (!position || !team || !gamemode) return message.reply("to acquire a role do: `.iam [Gamemode (Factions | Skyblock | Prison)] [Position (Leader | CoLeader)] [Team name]`.");
    var leaderEmbed = new Discord.RichEmbed()
    .setDescription("Leader Request")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role requested by:", `${message.author} | ${message.author.id}`)
    .addField("They are looking for a role in the gametype:", `${gamemode}`)
    .addField("They are apart of:", `${team}`)
    .addField("In this team they are a:", `${position}`)
    .setFooter("Nyx v1.2.5 | Made By: Wolf#9001", client.user.avatarURL)
  message.reply("staff have been notified that you need the correct role. Please be patient.");
  client.channels.get("530178004928823306").sendEmbed(leaderEmbed);
  client.channels.get("530178004928823306").send("@everyone");
  }

module.exports.help = {
    name: "iam"
}
