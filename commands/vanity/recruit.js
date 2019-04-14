const Discord = require("discord.js");
const cooldown = new Set();

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.has("402751364846845953") && message.channel.id !== ("410526913879080960")) 
      return;

    if (cooldown.has(message.author.id)) 
      return message.reply("you must wait 5 hours between recruiting!");
    
      else {

    //Build recruit help Embed
    var recruitHelpEmbed = new Discord.RichEmbed()

    .setTitle("Command: Recruit")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Recruit people to join your team for either: Factions, Skyblock, or Prison.")
    .addField("Permissions:", "You must have one of the three leader roles (faction-leader, island-leader, or gang-leader).")
    .addField("Syntax Formatter: ", "Use https://notwolfxd.github.io/leaders/ to format the recruitment post if you're having trouble.")
    .addField("Friendly PSA:", "If you are caught using this to advertise other servers, then you will be banned.")
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for recruit.
    let recruitDefine = args.join(" ").split(" | ");
    let gametype = recruitDefine[0];
       if (!recruitDefine[0]) 
        return message.channel.sendEmbed(recruitHelpEmbed);
    let teamname = recruitDefine[1];
    let about = recruitDefine[2];
    about = about.replace(/(-)\s/gi, '\n$&');
    let req = recruitDefine[3];
    req = req.replace(/(-)\s/gi, '\n$&');  
    let link = recruitDefine[4];
    let facsaliases = [ "facs", "factions", "faction", "demonic", "heroic", "apocalyptic" ];
    let sbaliases = [ "sb", "skyblock", "island", "space", "jungle", "wildwest", "wild west" ];
    let prisonaliases = [ "prison", "prisons", "cell", "gang", "galactic", "alcatraz", "mythic" ];

   // if (recruitDefine[0] !== facsaliases.toLowerCase() && recruitDefine[0] !== sbaliases.toLowerCase() && recruitDefine[0] !== prisonaliases.toLowerCase()) 
//      return message.channel.sendEmbed(recruitHelpEmbed);

    //Build the .recruit message Embed.
    var recruitEmbed = new Discord.RichEmbed()

    .setTitle("Team Recruitment!")
    .setColor("#ffa0bb")
    .setThumbnail(message.author.avatarURL)
    .addField("Recruitment Format:", "https://notwolfxd.github.io/leaders")
    .addField("Recruiter:", `${message.author.username} | ${message.author.id}`)
    .addField("Recruiting In:", `${gametype}`)
    .addField("Recruiting For:", `${teamname}`)
    .addField("About Them:", `${about} `)
    .addField("Their Requirements:", `${req}`)
    .addField("Team Discord:", `${link}`)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
    
//  Command cooldown set up.
   cooldown.add(message.author.id);
   setTimeout(() => {
       cooldown.delete(message.author.id);
   }, 18000000);

   if (message.member.roles.has("471779470525595668") && recruitDefine[0].toLowerCase() == facsaliases) 
      return client.channels.get("426903359392448522").send(recruitEmbed);
   if (message.member.roles.has("487054093655998485") && recruitDefine[0].toLowerCase() == sbaliases) 
      return client.channels.get("487053977821904909").send(recruitEmbed);
   if (message.member.roles.has("515587892525924352") && recruitDefine[0].toLowerCase() == prisonaliases) 
      return client.channels.get("515639377695866881").send(recruitEmbed);
   await message.reply("you need a leader role to use this command!");
    }
 }
 module.exports.help = {
    name: "recruit",
    aliases: [ "rec",
               "recruitment",
               "recruiting"
             ]
}
