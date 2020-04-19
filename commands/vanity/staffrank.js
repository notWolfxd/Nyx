const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

 if (message.guild.id !== "460208972306186252")
   return;
 
//Build Staff Rank help embed.
 var srHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: StaffRank")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Request your staff rank.")
    .addField("Usage: ", "-staff <Ingame | Forums | Discord> <IGN | Forum Profile Link> <Staff Position> (Gamemode)")
    .addField("Example: ", "-staff Ingame Wolf Owner | -staff Ingame Wolf Owner Factions")
    .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)
    
//Define the arguments for Staff Rank
    let rankType = args[0];
    let playerinfo = args[1];
    let position = args.slice(2).join(" ");
    let gamemode = args.slice(5).join(" ") || "Was not needed for scenario.";
    let staffleaderrole = message.guild.roles.find(r => r.name === "Leadership");
    if (!position) return message.channel.sendEmbed(srHelpEmbed);
    
//Build Staff Rank message Embed.
var ssrEmbed = new Discord.RichEmbed()
    .setTitle("Staff Rank Requested")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Rank Type:", `${rankType}`, true)
    .addField("Staff Position:", `${position}`, true)
    .addBlankField()
    .addField("Staff Member:", `${playerinfo}`, true)
    .addField("Gamemode:", `${gamemode}`, true)
    .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)
    
//Sending the completed command things.
if (position) {
  await staffleaderrole.setMentionable(true, `${message.author.username} | With command Staff Rank. (Start)`);
  await client.channels.get("483051497702162442").send(`<@&${staffleaderrole.id}>`);
  await staffleaderrole.setMentionable(false, `${message.author.username} | With command Staff Rank. (End)`);
  await client.channels.get("483051497702162442").send(ssrEmbed);
  await message.channel.send("The leadership team have been notified that you need your rank(s).");
 }
  }

module.exports.help = {
    name: "staffrank",
    aliases: [ "rank",
               "staff",
               "sr"
             ]
}
