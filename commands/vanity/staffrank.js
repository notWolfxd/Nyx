const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

   if (message.guild.id !== "460208972306186252")
      return;
 
   const srHelp = new RichEmbed()
    .setTitle("Command: StaffRank")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Request your staff rank.", stripIndents`**Usage:** \`-staffrank <Ingame | Forums> <IGN | Forum Profile Link> [Gamemode]\`
    **Example:** \`-staffrank Ingame Wolf Owner\`, \`-staffrank Ingame Wolf Owner Factions\`
    **Aliases:** \`rank\`, \`staff\`, \`sr\`
    **Category:** Vanity`)
    .setFooter(`${config.version}`, client.user.avatarURL)
    
     let rankType = args[0];
     let playerInfo = args[1];
     let position = args.slice(2).join(" ");
     let gamemode = args.slice(5).join(" ") || "Was not needed for scenario.";
     let leadershipRole = message.guild.roles.find(r => r.name === "Leadership");
 
   if (!position) 
      return message.channel.send(srHelp);
   
   const srEmbed = new RichEmbed()
    .setTitle("Staff Rank Requested")
    .setColor("#38b599")
    .setThumbnail(message.author.avatarURL)
    .addField("Rank Type:", `${rankType}`, true)
    .addField("Staff Position:", `${position}`, true)
    .addBlankField()
    .addField("Staff Member:", `${playerInfo}`, true)
    .addField("Gamemode:", `${gamemode}`, true)
    .setFooter(`${config.version}`, client.user.avatarURL)
    
   if (position) {
      await leadershipRole.setMentionable(true, `${message.author.username} | With command Staff Rank. (Start)`);
      await client.channels.get("483051497702162442").send(`<@&${leadershipRole.id}>`);
      await leadershipRole.setMentionable(false, `${message.author.username} | With command Staff Rank. (End)`);
      await client.channels.get("483051497702162442").send(srEmbed);
      await message.channel.send("The leadership team have been notified that you need your rank(s).");
                 }
}
module.exports.help = {
    name: "staffrank",
    aliases: [ "rank", "staff", "sr" ],
    description: "Request your staff rank",
    usage: "staffrank <Ingame | Forums> <IGN | Forum Profile Link> [Gamemode]",
    example: "staffrank Ingame Wolf Owner",
    category: "Vanity"
}
