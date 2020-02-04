const Discord = require("discord.js");
const cooldown = new Set();

module.exports.run = async (client, message, args) => {

   if (message.channel.id !== ("410526913879080960")) 
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
    .addField("Permissions:", "You must have one of the four leader roles (faction-leader, island-leader, or gang-leader).")
    .addField("Syntax Formatter: ", "Use https://notwolfxd.github.io/leaders/ to format the recruitment post if you're having trouble.")
    .addField("Friendly PSA:", "If you are caught using this to advertise other servers, then you will be banned.")
    .setFooter("Nyx v1.5.0 | Made By: Wolf#9001", client.user.avatarURL)

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

    let facsaliases = [ "facs", "factions", "faction", "demonic", "heroic", "runic" ];
    let sbaliases = [ "sb", "skyblock", "island", "unity", "fantasy" ];
    let prisonaliases = [ "prison", "prisons", "cell", "gang" ];

    //Build the Recruitment message Embed.
    var recruitEmbed = new Discord.RichEmbed()

    .setTitle("Team Recruitment!")
    .setColor("#ffa0bb")
    .setThumbnail(message.author.avatarURL)
    .addField("Recruitment Format:", "https://notwolfxd.github.io/leaders")
    .addField("Recruiter:", `${message.author.tag} | ${message.author.id}`)
    .addField("Recruiting On:", `${gametype}`)
    .addField("Recruiting For:", `${teamname}`)
    .addField("About Them:", `${about} `)
    .addField("Their Requirements:", `${req}`)
    .addField("Team Discord:", `${link}`)
    .setFooter("Nyx v1.5.0 | Made By: Wolf#9001", client.user.avatarURL)

   if (message.member.roles.has("471779470525595668") && facsaliases.includes(recruitDefine[0].toLowerCase())) {
      await client.channels.get("426903359392448522").send(recruitEmbed);
      await message.channel.send("Your recruitment information has been sent to the respective channel. You must wait **__five__** hours to post it again!");
      await    cooldown.add(message.author.id);
                  setTimeout(() => {
               cooldown.delete(message.author.id);
               }, 18000000);
   }
   if (message.member.roles.has("487054093655998485") && sbaliases.includes(recruitDefine[0].toLowerCase())) {
      await client.channels.get("487053977821904909").send(recruitEmbed);
      await message.channel.send("Your recruitment information has been sent to the respective channel. You must wait **__five__** hours to post it again!");
      await    cooldown.add(message.author.id);
                  setTimeout(() => {
               cooldown.delete(message.author.id);
               }, 18000000);
   }
   if (message.member.roles.has("515587892525924352") && prisonaliases.includes(recruitDefine[0].toLowerCase())) {
      await client.channels.get("515639377695866881").send(recruitEmbed);
      await message.channel.send("Your recruitment information has been sent to the respective channel. You must wait **__five__** hours to post it again!");
      await    cooldown.add(message.author.id);
                  setTimeout(() => {
               cooldown.delete(message.author.id);
               }, 18000000);
   }
       }
   }
 module.exports.help = {
    name: "recruit",
    aliases: [               "recruitment",
               "recruiting",
             ]
}
