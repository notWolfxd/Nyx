const Discord = require("discord.js");
const cooldown = new Set();

module.exports.run = async (client, message, args) => {
    if (message.channel.id !== ("410526913879080960")) return;
    if (cooldown.has(message.author.id)) return message.reply("you must wait 5 hours between recruiting!");
    else {

    //Build .recruit help Embed
    var recruitHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: Recruit")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Recruit people to join your team for either prison, factions, or skyblock.")
    .addField("Permissions:", "You must have one of the three leader roles (faction-leader, island-leader, or gang-leader", true)
    .addField("Syntax Formatter: ", "Use https://notwolfxd.github.io/leaders/ to format the recruitment post if you're having trouble.")
    .addField("Friendly PSA:", "If you are caught using this to advertise other servers, then you will be banned.", true)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for .recruit.
    let recruitDefine = args.join(" ").split(" | ");
    let gametype = recruitDefine[0];
    let teamname = recruitDefine[1];
    let aboutline1 = recruitDefine[2];
    let aboutline2 = recruitDefine[3];
    let aboutline3 = recruitDefine[4];
    let req1 = recruitDefine[5];
    let req2 = recruitDefine[6];
    let req3 = recruitDefine[7];
    let link = recruitDefine[8];
    if (recruitDefine[0] != "factions" && recruitDefine[0] != "prison" && recruitDefine[0] != "skyblock" && recruitDefine[0] != "Skyblock" && recruitDefine[0] != "Factions" && recruitDefine[0] != "Prison") return message.channel.sendEmbed(recruitHelpEmbed);
    if (!recruitDefine[8]) return message.channel.sendEmbed(recruitHelpEmbed);

    //Build the .recruit message Embed.
    var recruitEmbed = new Discord.RichEmbed()
    .setTitle("Team Recruitment!")
    .setColor("#ffae00")
    .setThumbnail(message.author.avatarURL)
    .addField("Recruiter:", `${message.author} | ${message.author.id}`)
    .addField("Recruiting In:", `${gametype}`)
    .addField("Recruiting For:", `${teamname}`)
    .addField("About Them:", `- ${aboutline1} 
   - ${aboutline2}
   - ${aboutline3}`)
    .addField("Their Requirements:", `- ${req1} 
   - ${req2} 
   - ${req3}`)
    .addField("Team Discord", `${link}`)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
  cooldown.add(message.author.id);
  setTimeout(() => {
      cooldown.delete(message.author.id);
  }, 18000000);
   if (message.member.roles.has("471779470525595668") && recruitDefine[0] == "factions" || recruitDefine[0] == "Factions") return client.channels.get("426903359392448522").send(recruitEmbed);
   if (message.member.roles.has("487054093655998485") && recruitDefine[0] == "skyblock" || recruitDefine[0] == "Skyblock") return client.channels.get("487053977821904909").send(recruitEmbed);
   if (message.member.roles.has("515587892525924352") && recruitDefine[0] == "prison" || recruitDefine[0] == "Prison") return client.channels.get("515639377695866881").send(recruitEmbed);
   message.reply("your recruitment information has been sent! You must now wait 5 hours to send it again.");
    }
 }
 module.exports.help = {
    name: "recruit"
}
